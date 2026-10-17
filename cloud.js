/* Firebase: вхід через Google + синхронізація з Cloud Firestore.
   Структура даних: users/{uid}/cars|events|reminders/{id}
   SDK підтягується лише тоді, коли в firebase-config.js заповнено window.FIREBASE_CONFIG. */
const cfg = window.FIREBASE_CONFIG;
const Cloud = window.Cloud;
const KINDS = ['cars', 'events', 'reminders'];
const V = '10.14.1', CDN = 'https://www.gstatic.com/firebasejs/' + V + '/';
const changed = () => window.dispatchEvent(new Event('mycar:data'));
const clean = (o) => JSON.parse(JSON.stringify(o));
const warn = (e) => { console.warn('Firestore:', e); if (Cloud.active && !Cloud.synced) { Cloud.synced = true; changed(); } window.dispatchEvent(new CustomEvent('mycar:cloud-error', { detail: e })); };

if (cfg && cfg.apiKey) {
  try {
    const [A, Au, F] = await Promise.all([import(CDN + 'firebase-app.js'), import(CDN + 'firebase-auth.js'), import(CDN + 'firebase-firestore.js')]);
    const app = A.initializeApp(cfg);
    const auth = Au.getAuth(app);
    const db = F.initializeFirestore(app, { localCache: F.persistentLocalCache({ tabManager: F.persistentMultipleTabManager() }) });
    let unsubs = [], first = true;
    Cloud.ready = true;

    const ref = (k, id) => F.doc(db, 'users', Cloud.user.uid, k, id);
    Cloud.set = (k, o) => F.setDoc(ref(k, o.id), clean(o)).catch(warn);
    Cloud.del = (k, id) => F.deleteDoc(ref(k, id)).catch(warn);
    Cloud.pushAll = (data) => KINDS.forEach((k) => (data[k] || []).forEach((o) => Cloud.set(k, o)));
    Cloud.signIn = () => {
      const p = new Au.GoogleAuthProvider();
      return Au.signInWithPopup(auth, p).catch((e) => {
        if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') return Au.signInWithRedirect(auth, p);
        throw e;
      });
    };
    Cloud.signOut = () => Au.signOut(auth).then(() => { window.Store.clearLocal(); changed(); });

    Au.onAuthStateChanged(auth, (u) => {
      unsubs.forEach((f) => f()); unsubs = [];
      Cloud.user = u; Cloud.active = !!u; Cloud.authChecked = true; Cloud.synced = false; first = true;
      if (!u) return changed();
      setTimeout(() => { if (!Cloud.synced) { Cloud.synced = true; changed(); } }, 8000);
      const got = {};
      KINDS.forEach((k) => {
        unsubs.push(F.onSnapshot(F.collection(db, 'users', u.uid, k), (snap) => {
          got[k] = snap.docs.map((d) => d.data());
          if (!KINDS.every((x) => got[x])) return;
          const S = window.Store;
          if (first && !got.cars.length && !got.events.length && !got.reminders.length && !S.isEmpty()) {
            Cloud.pushAll(S.db); // перший вхід: переносимо локальні дані в хмару
          } else {
            S.replaceAll({ cars: got.cars, events: got.events, reminders: got.reminders });
          }
          first = false; Cloud.synced = true; changed();
        }, warn));
      });
    });
  } catch (e) { Cloud.pending = false; warn(e); }
}
changed();
