(function () {
  var P = {
    back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    calcheck: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    left: '<path d="M15 18l-6-6 6-6"/>',
    right: '<path d="M9 18l6-6-6-6"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    trash: '<path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    cog: '<circle cx="12" cy="12" r="3"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>',
    gauge: '<path d="M12 14l4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    fuel: '<path d="M3 22V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v18M3 22h10M13 10h2a2 2 0 0 1 2 2v3a2 2 0 0 0 4 0V8l-3-3M6 8h4"/>',
    car: '<path d="M5 17H3v-5l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v5h-2M9 17h6M3 12h18"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    carfront: '<path d="M4 17v3h3v-3M17 17v3h3v-3"/><path d="M3 17v-5l2.2-5.2A2 2 0 0 1 7 5.6h10a2 2 0 0 1 1.8 1.2L21 12v5z"/><path d="M5 9.5h14"/><circle cx="7.5" cy="13" r="1" fill="currentColor"/><circle cx="16.5" cy="13" r="1" fill="currentColor"/>',
    wash: '<path d="M8 3v1.5M12 3v1.5M16 3v1.5"/><path d="M4 20v-3M20 20v-3"/><path d="M3 17v-5l2.2-3.2A2 2 0 0 1 7 8h10a2 2 0 0 1 1.8.8L21 12v5z"/><circle cx="7.5" cy="13" r="1" fill="currentColor"/><circle cx="16.5" cy="13" r="1" fill="currentColor"/>',
    bolt: '<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',
    charge: '<path d="M3 22V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v18M3 22h10M13 10h2a2 2 0 0 1 2 2v3a2 2 0 0 0 4 0V8l-3-3"/><path d="M9 7l-2 4h3l-2 4"/>',
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    gavel: '<path d="M14 13l-8.5 8.5a2.1 2.1 0 0 1-3-3L11 10M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8"/>',
    laptop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
    clip: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M12 11l-3 3 3 3M9 14h6"/>',
    more: '<circle cx="5" cy="12" r="1.7" fill="currentColor"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/><circle cx="19" cy="12" r="1.7" fill="currentColor"/>',
    grid: '<circle cx="9" cy="5.5" r="1.7" fill="currentColor"/><circle cx="15" cy="5.5" r="1.7" fill="currentColor"/><circle cx="9" cy="12" r="1.7" fill="currentColor"/><circle cx="15" cy="12" r="1.7" fill="currentColor"/><circle cx="9" cy="18.5" r="1.7" fill="currentColor"/><circle cx="15" cy="18.5" r="1.7" fill="currentColor"/>',
    layers: '<circle cx="12" cy="6" r="2.6"/><circle cx="6.5" cy="16.5" r="2.6"/><circle cx="17.5" cy="16.5" r="2.6"/>',
    archive: '<path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/>',
    x: '<path d="M18 6L6 18M6 6l12 12"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    img: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
    tire: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21"/>',
    chart: '<path d="M3 3v18h18M7 15v3M12 10v8M17 6v12"/>'
  };
  window.I = function (n, s, cls) {
    s = s || 24;
    return '<svg class="ic ' + (cls || '') + '" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || '') + '</svg>';
  };
})();
/* Сховище даних. Дані зберігаються в localStorage (кеш), а коли підключено Firebase і користувач увійшов —
   кожна зміна дзеркалиться в Firestore (див. js/cloud.js). Публічний інтерфейс window.Store синхронний. */
(function () {
  var KEY = 'mycar.v1';
  var empty = function () { return { cars: [], events: [], reminders: [] }; };
  var db = empty();
  try {
    var r = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (r && Array.isArray(r.cars)) db = Object.assign(empty(), r);
  } catch (e) {}

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); return true; } catch (e) { return false; }
  }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
  function cloud(m, kind, o) { try { if (window.Cloud && window.Cloud.active) window.Cloud[m](kind, o); } catch (e) {} }

  function costOf(e) {
    var d = e.data || {};
    switch (e.category) {
      case 'repair': case 'to': case 'diag':
        if (d.total !== undefined && d.total !== null && d.total !== '') return +d.total || 0;
        return (d.works || []).reduce(function (s, w) { return s + (+w.cost || 0); }, 0);
      case 'tire': return (+d.amount || 0) + (d.bought ? (+d.tyreCost || 0) : 0);
      case 'fuel': case 'charge': case 'other': return +d.cost || 0;
      case 'insurance': case 'wash': case 'fine': return +d.amount || 0;
      default: return 0;
    }
  }

  var S = {
    get db() { return db; },
    uid: uid, save: save, costOf: costOf,
    cars: function (arch) { return db.cars.filter(function (c) { return !!c.archived === !!arch; }); },
    car: function (id) { return db.cars.find(function (c) { return c.id === id; }); },
    putCar: function (c) {
      var i = db.cars.findIndex(function (x) { return x.id === c.id; });
      var prev = i < 0 ? null : db.cars[i];
      if (i < 0) db.cars.push(c); else db.cars[i] = c;
      if (!save()) { if (prev) db.cars[i] = prev; else db.cars.pop(); return false; }
      cloud('set', 'cars', c);
      return true;
    },
    delCar: function (id) {
      db.events.filter(function (e) { return e.carId === id; }).forEach(function (e) { cloud('del', 'events', e.id); });
      db.reminders.filter(function (r) { return r.carId === id; }).forEach(function (r) { cloud('del', 'reminders', r.id); });
      cloud('del', 'cars', id);
      db.cars = db.cars.filter(function (c) { return c.id !== id; });
      db.events = db.events.filter(function (e) { return e.carId !== id; });
      db.reminders = db.reminders.filter(function (r) { return r.carId !== id; });
      return save();
    },
    events: function (id) {
      return db.events.filter(function (e) { return e.carId === id; })
        .sort(function (a, b) { return (b.date || '').localeCompare(a.date || '') || (b.createdAt - a.createdAt); });
    },
    putEvent: function (e) {
      var c = S.car(e.carId), old = c ? c.mileage : 0;
      db.events.push(e);
      if (c && e.mileage && e.mileage > (c.mileage || 0)) c.mileage = e.mileage;
      if (!save()) { db.events.pop(); if (c) c.mileage = old; return false; }
      cloud('set', 'events', e);
      if (c && c.mileage !== old) cloud('set', 'cars', c);
      return true;
    },
    delEvent: function (id) {
      db.reminders.filter(function (r) { return r.eventId === id; }).forEach(function (r) { cloud('del', 'reminders', r.id); });
      cloud('del', 'events', id);
      db.events = db.events.filter(function (e) { return e.id !== id; });
      db.reminders = db.reminders.filter(function (r) { return r.eventId !== id; });
      return save();
    },
    reminders: function (id) { return db.reminders.filter(function (r) { return r.carId === id; }); },
    putReminder: function (r) { db.reminders.push(r); cloud('set', 'reminders', r); return save(); },
    delReminder: function (id) { cloud('del', 'reminders', id); db.reminders = db.reminders.filter(function (r) { return r.id !== id; }); return save(); },
    curMileage: function (id) {
      var c = S.car(id), m = c && c.mileage || 0;
      db.events.forEach(function (e) { if (e.carId === id && e.mileage > m) m = e.mileage; });
      return m;
    },
    isEmpty: function () { return !db.cars.length && !db.events.length && !db.reminders.length; },
    /* Заміна даних даними з хмари (без зворотного запису в хмару) */
    replaceAll: function (o) { db = Object.assign(empty(), o); save(); },
    clearLocal: function () { db = empty(); save(); },
    exportJSON: function () { return JSON.stringify(db); },
    importJSON: function (txt) {
      var r = JSON.parse(txt);
      if (!r || !Array.isArray(r.cars)) throw new Error('bad');
      db = Object.assign(empty(), r);
      var ok = save();
      if (window.Cloud && window.Cloud.active) window.Cloud.pushAll(db);
      return ok;
    }
  };
  window.Store = S;
})();
/* Довідники та схеми форм по категоріях подій */
(function () {
  var CATS = [
    { id: 'repair', label: 'Ремонт', icon: 'wrench', cls: 'c-repair' },
    { id: 'to', label: 'ТО', icon: 'cog', icon2: 'clip', cls: 'c-to' },
    { id: 'diag', label: 'Діагностика', icon: 'search', icon2: 'laptop', cls: 'c-diag' },
    { id: 'mileage', label: 'Пробіг', icon: 'gauge', cls: 'c-mile' },
    { id: 'insurance', label: 'Страховка', icon: 'shield', cls: 'c-ins' },
    { id: 'fuel', label: 'Заправка', icon: 'fuel', cls: 'c-fuel' },
    { id: 'wash', label: 'Мийка', icon: 'wash', cls: 'c-wash' },
    { id: 'tire', label: 'Шиномонтаж', icon: 'tire', cls: 'c-tire' },
    { id: 'charge', label: 'Зарядка', icon: 'charge', icon2: 'bolt', cls: 'c-charge' },
    { id: 'fine', label: 'Штраф', icon: 'doc', icon2: 'gavel', cls: 'c-fine' },
    { id: 'other', label: 'Інше', icon: 'more', icon2: 'car', cls: 'c-other' }
  ];
  var cat = function (id) { return CATS.find(function (c) { return c.id === id; }) || CATS[CATS.length - 1]; };

  var OPTS = {
    repair: ['Двигун', 'Трансмісія', 'Підвіска', 'Гальмівна система', 'Рульове керування', 'Електрика', 'Кузов', 'Салон', 'Вихлопна система', 'Охолодження', 'Кондиціонер', 'Інше'],
    to: ['Заміна масла', 'Масляний фільтр', 'Повітряний фільтр', 'Салонний фільтр', 'Паливний фільтр', 'Свічки запалювання', 'Гальмівні колодки', 'Гальмівна рідина', 'Антифриз', 'Ремінь/ланцюг ГРМ', 'Регламентне ТО', 'Інше'],
    diag: ['Комп’ютерна', 'Ходова частина', 'Двигун', 'Електрика', 'Кузов / геометрія', 'Гальма', 'Інше'],
    tire: ['Сезонна заміна шин', 'Балансування', 'Ремонт проколу', 'Заміна дисків', 'Розвал-сходження', 'Інше'],
    fuel: ['Бензин', 'Дизель', 'Газ', 'Газ/Бензин', 'Гібрид', 'Електро'],
    wash: ['Безконтактна', 'Ручна', 'Комплексна', 'Хімчистка салону', 'Самообслуговування', 'Інше'],
    body: ['Седан', 'Хетчбек', 'Універсал', 'Ліфтбек', 'Кросовер', 'Позашляховик', 'Купе', 'Кабріолет', 'Мінівен', 'Пікап', 'Фургон'],
    gear: ['Механічна', 'Автомат', 'Робот', 'Варіатор'],
    color: ['Білий', 'Чорний', 'Сірий', 'Сріблястий', 'Синій', 'Червоний', 'Зелений', 'Жовтий', 'Помаранчевий', 'Коричневий', 'Бежевий', 'Фіолетовий', 'Інший']
  };

  var BRANDS = {
    'Audi': ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7'],
    'BMW': ['3 Series', '5 Series', 'X3', 'X5', 'X6'],
    'Chevrolet': ['Aveo', 'Cruze', 'Lacetti', 'Spark'],
    'Citroen': ['Berlingo', 'C3', 'C4', 'C5'],
    'Daewoo': ['Lanos', 'Nexia', 'Matiz', 'Sens'],
    'Fiat': ['Doblo', 'Panda', 'Punto', 'Tipo'],
    'Ford': ['Fiesta', 'Focus', 'Fusion', 'Kuga', 'Mondeo', 'Transit'],
    'Honda': ['Accord', 'Civic', 'CR-V', 'Jazz'],
    'Hyundai': ['Accent', 'Creta', 'Elantra', 'i30', 'Kona', 'Santa Fe', 'Solaris', 'Sonata', 'Tucson'],
    'Kia': ['Ceed', 'Optima', 'Rio', 'Sorento', 'Sportage', 'Stinger'],
    'Lexus': ['ES', 'IS', 'NX', 'RX'],
    'Mazda': ['3', '6', 'CX-5', 'CX-30'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'Vito'],
    'Mitsubishi': ['ASX', 'Lancer', 'Outlander', 'Pajero'],
    'Nissan': ['Juke', 'Leaf', 'Qashqai', 'Rogue', 'X-Trail'],
    'Opel': ['Astra', 'Corsa', 'Insignia', 'Vectra', 'Zafira'],
    'Peugeot': ['206', '308', '407', '508', '3008'],
    'Renault': ['Clio', 'Duster', 'Kangoo', 'Logan', 'Megane', 'Sandero'],
    'Skoda': ['Fabia', 'Kodiaq', 'Octavia', 'Rapid', 'Superb', 'Yeti'],
    'Subaru': ['Forester', 'Impreza', 'Outback', 'XV'],
    'Suzuki': ['Grand Vitara', 'Swift', 'SX4', 'Vitara'],
    'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y'],
    'Toyota': ['Auris', 'Avensis', 'Camry', 'Corolla', 'Land Cruiser', 'Prius', 'RAV4', 'Yaris'],
    'Volkswagen': ['Golf', 'Jetta', 'Passat', 'Polo', 'Tiguan', 'Touareg', 'Transporter'],
    'Volvo': ['S60', 'S90', 'V60', 'XC60', 'XC90'],
    'ЗАЗ': ['Sens', 'Slavuta', 'Vida'],
    'ВАЗ (Lada)': ['2107', '2110', 'Granta', 'Niva', 'Vesta']
  };

  var DATE = { k: 'date', t: 'date', l: 'Дата', req: 1, core: 1 };
  var MILE = { k: 'mileage', t: 'num', l: 'Пробіг (км)', ph: 'напр. 125 000', core: 1 };

  var SCHEMAS = {
    repair: { kind: 'works', head: [DATE, MILE, { k: 'sto', t: 'text', l: 'СТО / Майстер', ph: 'СТО / Майстер' }], opts: OPTS.repair, addLabel: 'Додати роботу' },
    to: { kind: 'works', head: [DATE, MILE, { k: 'sto', t: 'text', l: 'СТО / Майстер', ph: 'СТО / Майстер' }], opts: OPTS.to, addLabel: 'Додати роботу' },
    diag: { kind: 'works', head: [DATE, MILE], opts: OPTS.diag, addLabel: 'Додати діагностику' },
    fuel: { att: false, fields: [DATE, MILE,
      { k: 'liters', t: 'money', l: 'Літри', req: 1, ph: 'напр. 40' },
      { k: 'ppl', t: 'money', l: 'Ціна за літр ₴' },
      { k: 'cost', t: 'money', l: 'Вартість ₴', req: 1 },
      { k: 'fuelType', t: 'select', l: 'Тип палива', req: 1, ph: 'Оберіть тип палива', opts: OPTS.fuel },
      { k: 'station', t: 'text', l: 'АЗС', ph: 'Назва АЗС' }] },
    tire: { fields: [DATE, MILE,
      { k: 'tyType', t: 'select', l: 'Вид робіт', req: 1, ph: 'Оберіть вид робіт', opts: OPTS.tire },
      { k: 'amount', t: 'money', l: 'Вартість шиномонтажу ₴' },
      { k: 'bought', t: 'bought' },
      { k: 'remDate', t: 'date', l: 'Нагадування (дата)', slash: true },
      { k: 'remKm', t: 'num', l: 'Нагадування (через N км)', ph: 'напр. 6 000' },
      { k: 'note', t: 'textarea', l: 'Примітка', ph: 'Примітка' }] },
    charge: { att: false, fields: [DATE, MILE,
      { k: 'kwh', t: 'money', l: 'кВт·год', req: 1, ph: 'напр. 30' },
      { k: 'ppl', t: 'money', l: 'Ціна за кВт·год ₴' },
      { k: 'cost', t: 'money', l: 'Вартість ₴', req: 1 },
      { k: 'station', t: 'text', l: 'Станція', ph: 'Назва станції' }] },
    wash: { fields: [DATE, MILE,
      { k: 'amount', t: 'money', l: 'Сума ₴', req: 1 },
      { k: 'washType', t: 'select', l: 'Тип мийки', req: 1, ph: 'Оберіть тип мийки', opts: OPTS.wash },
      { k: 'note', t: 'textarea', l: 'Примітка', ph: 'Примітка' }] },
    fine: { fields: [DATE, MILE,
      { k: 'amount', t: 'money', l: 'Сума штрафу', req: 1 },
      { k: 'paid', t: 'paid', l: 'Сплачено' },
      { k: 'discountUntil', t: 'date', l: 'Знижка до' },
      { k: 'violation', t: 'text', l: 'Тип порушення', ph: 'Тип порушення' },
      { k: 'place', t: 'text', l: 'Місце', ph: 'Місце' },
      { k: 'docNo', t: 'text', l: 'Номер документа', ph: 'Номер документа' },
      { k: 'issuer', t: 'text', l: 'Орган, що виписав', ph: 'Орган, що виписав' }] },
    other: { fields: [
      { k: 'name', t: 'text', ph: 'Назва' }, DATE, MILE,
      { k: 'cost', t: 'money', l: 'Вартість ₴' },
      { k: 'note', t: 'textarea', l: 'Примітка', ph: 'Примітка' }] },
    insurance: { info: 'Після збереження автоматично створюється нагадування про продовження страховки (→ Майбутні події, → Сповіщення)', fields: [
      { k: 'company', t: 'text', l: 'Страхова компанія', req: 1 },
      { k: 'policy', t: 'text', l: 'Номер полісу' },
      { k: 'start', t: 'date', l: 'Дата початку' },
      { k: 'end', t: 'date', l: 'Дата завершення', req: 1 },
      { k: 'amount', t: 'money', l: 'Сума ₴', req: 1 }] },
    mileage: { fields: [DATE, { k: 'newMileage', t: 'num', l: 'Новий пробіг (км)', req: 1, ph: 'напр. 125 000' },
      { k: 'note', t: 'textarea', l: 'Примітка', ph: 'Примітка' }] }
  };

  window.MC = {
    CATS: CATS, cat: cat, OPTS: OPTS, BRANDS: BRANDS, SCHEMAS: SCHEMAS,
    MONTHS: ['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру']
  };
})();
(function () {
  'use strict';
  var VERSION = '1.0.3';
  window.APP_VERSION = VERSION;
  var S = window.Store, I = window.I, M = window.MC;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var app = $('#app'), layer = $('#layer');
  var ui = { tab: 'my', compact: false, q: '', upCar: null, upTab: 'mine' };

  /* ---------- утиліти ---------- */
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var today = function () { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  var fmtD = function (i) { return i ? String(i).split('-').reverse().join('.') : ''; };
  var fmtN = function (n) { return String(Math.round(+n || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); };
  var money = function (n) { var p = (+n || 0).toFixed(2).split('.'); return p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + '.' + p[1] + ' ₴'; };
  var days = function (iso) { return Math.round((new Date(iso + 'T00:00:00') - new Date(today() + 'T00:00:00')) / 864e5); };
  var carName = function (c) { return c.brand + ' ' + c.model; };
  var unit = function (c) { return c && c.unit === 'mi' ? 'mi' : 'км'; };
  var go = function (h) { location.hash = h; };
  function parseD(s) {
    var m = String(s || '').match(/^(\d{2})[./](\d{2})[./](\d{4})$/);
    if (!m) return '';
    var d = +m[1], mo = +m[2], y = +m[3], dt = new Date(y, mo - 1, d);
    if (dt.getFullYear() !== y || dt.getMonth() !== mo - 1 || dt.getDate() !== d) return '';
    return y + '-' + pad(mo) + '-' + pad(d);
  }
  function toast(t) {
    $$('.toast').forEach(function (o) { o.remove(); });
    var el = document.createElement('div');
    el.className = 'toast'; el.textContent = t; document.body.appendChild(el);
    setTimeout(function () { el.classList.add('show'); }, 10);
    setTimeout(function () { el.classList.remove('show'); setTimeout(function () { el.remove(); }, 300); }, 2400);
  }
  function closeLayer() { layer.innerHTML = ''; layer.onclick = null; }

  /* ---------- шаблон сторінки ---------- */
  function alerts() {
    var out = [], t = today();
    S.db.reminders.forEach(function (r) {
      var c = S.car(r.carId); if (!c || c.archived) return;
      if (r.date) {
        var d = days(r.date);
        if (d <= 30) out.push({ late: d < 0, when: d, title: r.title, sub: carName(c) + ' · ' + fmtD(r.date) + ' · ' + (d < 0 ? 'прострочено на ' + (-d) + ' дн.' : d === 0 ? 'сьогодні' : 'через ' + d + ' дн.') });
      }
      if (r.km) {
        var left = (r.base || 0) + r.km - S.curMileage(c.id);
        if (left <= 1000) out.push({ late: left < 0, when: left / 100, title: r.title, sub: carName(c) + ' · ' + (left < 0 ? 'перевищено на ' + fmtN(-left) : 'залишилось ' + fmtN(left)) + ' ' + unit(c) });
      }
    });
    S.db.events.forEach(function (e) {
      var c = S.car(e.carId); if (!c || c.archived || e.category !== 'fine') return;
      var d = e.data || {};
      if (!d.paid && d.discountUntil && days(d.discountUntil) >= 0 && days(d.discountUntil) <= 14)
        out.push({ late: false, when: days(d.discountUntil), title: 'Знижка на штраф до ' + fmtD(d.discountUntil), sub: carName(c) + ' · ' + money(d.amount) });
    });
    return out.sort(function (a, b) { return a.when - b.when; });
  }
  function bellBtn() { return '<a class="ib bell" href="#/notifications" aria-label="Сповіщення">' + I('bell', 28) + (alerts().length ? '<i class="dot"></i>' : '') + '</a>'; }
  function tabbar(a) {
    var T = [['garage', 'Гараж', 'carfront'], ['upcoming', 'Майбутні події', 'calcheck'], ['services', 'Послуги', 'layers'], ['profile', 'Профіль', 'user']];
    return '<nav class="tabbar">' + T.map(function (t) { return '<a class="tab ' + (a === t[0] ? 'on' : '') + '" href="#/' + t[0] + '">' + I(t[2], 30) + '<span>' + t[1] + '</span></a>'; }).join('') + '</nav>';
  }
  function page(o) {
    var right = o.right !== undefined ? o.right : bellBtn();
    app.innerHTML = '<div class="page"><header class="top ' + (o.left ? 'left' : '') + '">' +
      (o.left ? '' : (o.back ? '<a class="ib ' + (o.dark ? 'dark' : '') + '" href="' + o.back + '" aria-label="Назад">' + I('back', 28) + '</a>' : '<span></span>')) +
      '<h1>' + esc(o.title || '') + '</h1><div class="topr">' + right + '</div></header>' +
      '<main class="body">' + o.body + '</main>' + (o.footer ? '<div class="foot">' + o.footer + '</div>' : '') + (o.nav ? tabbar(o.nav) : '') + '</div>';
    window.scrollTo(0, 0);
  }
  function setH(h) {
    app.onclick = function (e) { if (!common(e, 'click') && h.click) h.click(e); };
    app.oninput = function (e) { if (!common(e, 'input') && h.input) h.input(e); };
    app.onchange = function (e) { if (!common(e, 'change') && h.change) h.change(e); };
  }
  function sheet(title, items) {
    layer.innerHTML = '<div class="ov"><div class="sheet"><div class="grab"></div>' + (title ? '<h4>' + esc(title) + '</h4>' : '') +
      items.map(function (it, i) { return '<button class="si ' + (it.danger ? 'danger' : '') + '" data-i="' + i + '">' + (it.icon ? I(it.icon, 22) : '') + '<span>' + esc(it.label) + '</span></button>'; }).join('') +
      '<button class="si cancel">Скасувати</button></div></div>';
    layer.onclick = function (e) {
      var b = e.target.closest('[data-i]');
      if (b) { var it = items[+b.dataset.i]; closeLayer(); if (it.fn) it.fn(); return; }
      if (e.target.classList.contains('ov') || e.target.closest('.cancel')) closeLayer();
    };
  }
  function confirmDel(text, label, fn) { sheet(text, [{ label: label, icon: 'trash', danger: 1, fn: fn }]); }

  /* ---------- спільні обробники (маски, вкладення) ---------- */
  function common(e, type) {
    var t = e.target, b;
    if (type === 'click') {
      if ((b = t.closest('.addatt'))) { b.closest('[data-att]').querySelector('input[type=file]').click(); return true; }
      if ((b = t.closest('[data-rm]'))) { var box = b.closest('[data-att]'); box._f.splice(+b.dataset.rm, 1); drawThumbs(box); return true; }
      if ((b = t.closest('.exp'))) { var eb = b.nextElementSibling; eb.classList.toggle('hidden'); b.querySelector('.ic').style.transform = eb.classList.contains('hidden') ? '' : 'rotate(180deg)'; return true; }
      if ((b = t.closest('.rmw'))) { b.closest('[data-work]').remove(); renumber(); calcTotal(); return true; }
    }
    if (type === 'change') {
      if (t.matches && t.matches('input[type=file]') && t.closest('[data-att]')) { addFiles(t.closest('[data-att]'), t.files).then(function () { t.value = ''; }); return true; }
      if (t.classList.contains('native')) {
        if (t.value) { var inp = t.parentNode.querySelector('.dt'); inp.value = fmtD(t.value).replace(/\./g, inp.dataset.mask); var f = inp.closest('.fld'); if (f) f.classList.remove('err'); }
        return true;
      }
      if (t.name === 'paid') { var tx = t.parentNode.querySelector('b'); tx.textContent = t.checked ? 'Сплачено' : 'Не сплачено'; return true; }
      if (t.tagName === 'SELECT') { t.classList.toggle('empty', !t.value); var f2 = t.closest('.fld'); if (f2) f2.classList.remove('err'); }
    }
    if (type === 'input') {
      if (t.dataset && t.dataset.mask) {
        if (e.inputType && e.inputType.indexOf('delete') === 0) return true;
        var d = t.value.replace(/\D/g, '').slice(0, 8), s = t.dataset.mask, o = d.slice(0, 2);
        if (d.length > 2) o += s + d.slice(2, 4);
        if (d.length > 4) o += s + d.slice(4);
        t.value = o; return true;
      }
      if (t.hasAttribute && t.hasAttribute('data-num')) t.value = t.value.replace(/\D/g, '');
      if (t.hasAttribute && t.hasAttribute('data-dec')) t.value = t.value.replace(',', '.').replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
      if (t.closest && t.closest('.fld')) t.closest('.fld').classList.remove('err');
      var form = t.closest && t.closest('form');
      if (form && t.name === 'total') t.dataset.manual = t.value ? '1' : '';
      if (form && t.name === 'cost' && t.closest('[data-work]')) calcTotal();
      if (form && /^(fuel|charge)$/.test(form.dataset.cat || '')) calcFuel(form, t);
    }
    return false;
  }
  function calcTotal() {
    var tot = $('[name=total]'); if (!tot || tot.dataset.manual === '1') return;
    var s = 0; $$('[data-work] [name=cost]').forEach(function (i) { s += parseFloat(i.value) || 0; });
    tot.value = s ? s.toFixed(2).replace(/\.00$/, '') : '';
  }
  function calcFuel(form, t) {
    var l = form.querySelector('[name=liters],[name=kwh]'), p = form.querySelector('[name=ppl]'), c = form.querySelector('[name=cost]');
    var lv = parseFloat(l.value) || 0, pv = parseFloat(p.value) || 0, cv = parseFloat(c.value) || 0;
    if (t === c) { c.dataset.manual = c.value ? '1' : ''; if (lv > 0 && cv > 0 && !p.dataset.manual) p.value = (cv / lv).toFixed(2); }
    else if (t === p) { p.dataset.manual = p.value ? '1' : ''; if (lv > 0 && pv > 0 && !c.dataset.manual) c.value = (lv * pv).toFixed(2); }
    else if (t === l) { if (lv > 0 && pv > 0 && !c.dataset.manual) c.value = (lv * pv).toFixed(2); else if (lv > 0 && cv > 0 && !p.dataset.manual) p.value = (cv / lv).toFixed(2); }
  }
  function renumber() { $$('[data-work] .wtitle').forEach(function (el, i) { el.textContent = el.dataset.t + ' ' + (i + 1); }); }

  /* ---------- вкладення та фото ---------- */
  function readURL(f, max) {
    return new Promise(function (res, rej) {
      if (f.size > max) return rej(new Error('Файл завеликий (макс. ' + Math.round(max / 1000) + ' КБ)'));
      var r = new FileReader(); r.onerror = function () { rej(new Error('Не вдалося прочитати файл')); }; r.onload = function () { res(r.result); }; r.readAsDataURL(f);
    });
  }
  function shrink(file, max, q) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onerror = function () { rej(new Error('Не вдалося прочитати файл')); };
      r.onload = function () {
        var im = new Image();
        im.onerror = function () { rej(new Error('Невірний формат зображення')); };
        im.onload = function () {
          var k = Math.min(1, max / Math.max(im.width, im.height)), cv = document.createElement('canvas');
          cv.width = Math.round(im.width * k); cv.height = Math.round(im.height * k);
          cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
          res(cv.toDataURL('image/jpeg', q));
        };
        im.src = r.result;
      };
      r.readAsDataURL(file);
    });
  }
  function shrinkSquare(file, size, q) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onerror = function () { rej(new Error('Не вдалося прочитати файл')); };
      r.onload = function () {
        var im = new Image();
        im.onerror = function () { rej(new Error('Невірний формат зображення')); };
        im.onload = function () {
          var side = Math.min(im.width, im.height), cv = document.createElement('canvas');
          cv.width = cv.height = size;
          cv.getContext('2d').drawImage(im, (im.width - side) / 2, (im.height - side) / 2, side, side, 0, 0, size, size);
          res(cv.toDataURL('image/jpeg', q));
        };
        im.src = r.result;
      };
      r.readAsDataURL(file);
    });
  }
  function addFiles(box, files) {
    box._f = box._f || [];
    var max = +box.dataset.max || 8, list = Array.prototype.slice.call(files);
    return list.reduce(function (p, f) {
      return p.then(function () {
        if (box._f.length >= max) { toast('Максимум файлів: ' + max); return; }
        var job = /^image\//.test(f.type) ? shrink(f, 1000, 0.7) : readURL(f, 400000);
        return job.then(function (url) { box._f.push({ name: f.name, type: /^image\//.test(f.type) ? 'image/jpeg' : f.type, url: url }); }, function (er) { toast(er.message); });
      });
    }, Promise.resolve()).then(function () { drawThumbs(box); });
  }
  function drawThumbs(box) {
    var th = box.querySelector('.thumbs');
    th.innerHTML = (box._f || []).map(function (f, i) {
      return '<div class="th">' + (f.type.indexOf('image') === 0 ? '<img src="' + f.url + '" alt="">' : '<span>' + esc(f.name.slice(0, 16)) + '</span>') + '<button type="button" data-rm="' + i + '">' + I('x', 16) + '</button></div>';
    }).join('');
  }
  function attBox(label, cls, max) {
    return '<div class="card att ' + (cls || '') + '" data-att data-max="' + (max || 8) + '"><div class="attl">' + esc(label) + '</div><div class="attg"><span class="thumbs" style="display:contents"></span><button type="button" class="addatt" aria-label="Додати файл">' + I('plus', 38) + '</button></div><input type="file" hidden multiple accept="image/*,application/pdf"></div>';
  }
  var filesOf = function (box) { return box && box._f ? box._f.slice() : []; };

  /* ---------- поля форм ---------- */
  function dateInp(k, v, slash) {
    var sep = slash ? '/' : '.';
    return '<div class="datew"><input class="inp dt" name="' + k + '" inputmode="numeric" maxlength="10" autocomplete="off" placeholder="' + (slash ? '__/__/____' : '__.__.____') + '" value="' + (v ? fmtD(v).replace(/\./g, sep) : '') + '" data-mask="' + sep + '"><span class="cal">' + I('calendar', 30) + '</span><input type="date" class="native" tabindex="-1" aria-label="Обрати дату"></div>';
  }
  function selectEl(name, opts, v, ph) {
    return '<div class="sel"><select class="inp ' + (v ? '' : 'empty') + '" name="' + name + '"><option value="" ' + (v ? '' : 'selected') + (ph ? ' disabled hidden' : '') + '>' + esc(ph || '') + '</option>' +
      opts.map(function (o) { return '<option ' + (o === v ? 'selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>' + I('down', 24) + '</div>';
  }
  function fld(f, v) {
    v = v == null ? '' : v;
    var lab = f.l ? '<label class="lbl">' + esc(f.l) + (f.req ? ' <i class="req">*</i>' : '') + '</label>' : '', inp = '';
    switch (f.t) {
      case 'date': inp = dateInp(f.k, v, f.slash); break;
      case 'num': inp = '<input class="inp" name="' + f.k + '" inputmode="numeric" data-num autocomplete="off" placeholder="' + esc(f.ph || '') + '" value="' + esc(v) + '">'; break;
      case 'money': inp = '<input class="inp" name="' + f.k + '" inputmode="decimal" data-dec autocomplete="off" placeholder="' + esc(f.ph || '0.00') + '" value="' + esc(v) + '">'; break;
      case 'text': inp = '<input class="inp" name="' + f.k + '" autocomplete="off" placeholder="' + esc(f.ph || '') + '" value="' + esc(v) + '">'; break;
      case 'textarea': inp = '<textarea class="inp" name="' + f.k + '" placeholder="' + esc(f.ph || '') + '">' + esc(v) + '</textarea>'; break;
      case 'select': inp = selectEl(f.k, f.opts, v, f.ph); break;
      case 'bought': inp = '<label class="chk neu"><input type="checkbox" name="bought"><span class="box">' + I('check', 22) + '</span><b>Купував шини</b></label><input type="hidden" name="tyreName"><input type="hidden" name="tyreCost"><div class="tyinfo hidden"><span></span><button type="button" class="link" id="tyedit">Змінити</button></div>'; break;
      case 'paid': inp = '<label class="chk"><input type="checkbox" name="' + f.k + '"><span class="box">' + I('check', 22) + '</span><b>Не сплачено</b></label>'; break;
    }
    return '<div class="fld" data-k="' + f.k + '">' + lab + inp + '</div>';
  }
  function rd(root, f) {
    var el = root.querySelector('[name="' + f.k + '"]'); if (!el) return '';
    switch (f.t) {
      case 'date': return parseD(el.value);
      case 'num': return el.value ? parseInt(el.value, 10) : '';
      case 'money': return el.value === '' ? '' : (parseFloat(el.value) || 0);
      case 'paid': case 'bought': return el.checked;
      default: return el.value.trim();
    }
  }
  function validate(root, fields) {
    var bad = 0;
    fields.forEach(function (f) {
      var box = root.querySelector('[data-k="' + f.k + '"]'), v = rd(root, f), el = root.querySelector('[name="' + f.k + '"]');
      var invalid = (f.req && (v === '' || v === undefined)) || (f.t === 'date' && el && el.value && !v);
      if (box) box.classList.toggle('err', !!invalid);
      if (invalid) bad++;
    });
    return !bad;
  }

  /* ---------- картки авто та події ---------- */
  function carCard(c, menu) {
    return '<article class="car" data-id="' + c.id + '"><div class="cimg">' + (c.photos && c.photos[0] ? '<img src="' + c.photos[0] + '" alt="">' : I('carfront', 66)) +
      (menu ? '<button class="kebab" data-menu="' + c.id + '" aria-label="Меню">' + I('grid', 24) + '</button>' : '') + '</div><div class="cinfo"><h3>' + esc(carName(c)) + '</h3><p>' + esc(c.body || '') + (c.alias ? ' · ' + esc(c.alias) : '') + (c.plate ? ' · ' + esc(c.plate) : '') + '</p><div class="yr">' + I('calendar', 24) + '<span>' + esc(c.year) + '</span></div></div></article>';
  }
  function carRow(c) {
    return '<article class="car row" data-id="' + c.id + '"><div class="rimg">' + (c.photos && c.photos[0] ? '<img src="' + c.photos[0] + '" alt="">' : I('carfront', 40)) + '</div><div class="rinfo"><h3>' + esc(carName(c)) + '</h3><p>' + esc([c.body, c.alias, c.plate].filter(Boolean).join(' · ')) + '</p><div class="tags"><span>' + I('calendar', 15) + c.year + '</span><span>' + I('gauge', 15) + fmtN(S.curMileage(c.id)) + ' ' + unit(c) + '</span></div></div><button class="kebab" data-menu="' + c.id + '" aria-label="Меню">' + I('more', 22) + '</button></article>';
  }
  function evTitle(e) {
    var d = e.data || {}, k = M.cat(e.category), w = (d.works || [])[0];
    switch (e.category) {
      case 'repair': case 'to': return k.label + (w && (w.name || w.cat) ? ' — ' + (w.name || w.cat) : '');
      case 'diag': return k.label + (w && w.cat ? ' — ' + w.cat : '');
      case 'fuel': return k.label + (d.station ? ' — ' + d.station : '') + (d.liters ? ' · ' + d.liters + ' л' : '');
      case 'charge': return k.label + (d.station ? ' — ' + d.station : '');
      case 'tire': return k.label + (d.tyType ? ' — ' + d.tyType : '');
      case 'insurance': return k.label + ' — ' + (d.company || '');
      case 'fine': return k.label + (d.paid ? ' (сплачено)' : ' (не сплачено)');
      case 'mileage': return 'Пробіг — ' + fmtN(e.mileage) + ' км';
      case 'other': return d.name || 'Інше';
      default: return k.label;
    }
  }
  function evRow(e) {
    var k = M.cat(e.category), c = S.costOf(e);
    return '<div class="ev" data-ev="' + e.id + '"><span class="evi ' + k.cls + '">' + I(k.icon2 || k.icon, 22) + '</span><div class="evm"><b>' + esc(evTitle(e)) + '</b><small>' + fmtD(e.date) + (e.mileage && e.category !== 'mileage' ? ' · ' + fmtN(e.mileage) + ' км' : '') + '</small></div><span class="evs">' + (c ? money(c) : '') + '</span></div>';
  }
  function eventLines(e) {
    var d = e.data || {}, L = [], sch = M.SCHEMAS[e.category];
    L.push(['Дата', fmtD(e.date)]);
    if (e.mileage && e.category !== 'mileage') L.push(['Пробіг', fmtN(e.mileage) + ' км']);
    if (sch.kind === 'works') {
      if (d.sto) L.push(['СТО / Майстер', d.sto]);
      (d.works || []).forEach(function (w, i) {
        L.push([e.category === 'diag' ? 'Діагностика ' + (i + 1) : (w.name || 'Робота ' + (i + 1)), null]);
        if (w.cat) L.push(['Категорія', w.cat]);
        if (w.desc) L.push(['Опис', w.desc]);
        if (w.result) L.push(['Результат', w.result]);
        if (w.note) L.push(['Примітки', w.note]);
        if (w.parts) L.push(['Запчастини', w.parts]);
        if (w.warranty) L.push(['Гарантія', w.warranty + ' міс.']);
        if (w.cost) L.push(['Вартість', money(w.cost)]);
        if (w.remDate) L.push(['Нагадування', fmtD(w.remDate)]);
        if (w.remKm) L.push(['Нагадування', 'через ' + fmtN(w.remKm) + ' км']);
      });
      if (d.note) L.push(['Нотатка', d.note]);
      L.push(['Загальна сума', money(S.costOf(e))]);
    } else {
      sch.fields.forEach(function (f) {
        if (f.core) return;
        if (f.t === 'bought') { if (d.bought) L.push(['Шини куплено', (d.tyreName || '') + (d.tyreCost ? ' · ' + money(d.tyreCost) : '')]); return; }
        var v = d[f.k]; if (v === '' || v == null || (v === false && f.t !== 'paid')) return;
        var s = f.t === 'money' ? ((f.k === 'liters' || f.k === 'kwh') ? v : money(v)) : f.t === 'date' ? fmtD(v) : f.t === 'paid' ? (v ? 'Сплачено' : 'Не сплачено') : f.k === 'newMileage' ? fmtN(v) + ' км' : v;
        L.push([f.l || 'Назва', String(s)]);
      });
    }
    return L;
  }
  function allFiles(e) {
    var f = (e.files || []).slice();
    ((e.data && e.data.works) || []).forEach(function (w) { f = f.concat(w.files || []); });
    return f;
  }
  function showEvent(e) {
    var k = M.cat(e.category), fl = allFiles(e);
    layer.innerHTML = '<div class="ov"><div class="sheet"><div class="grab"></div><h4>' + esc(evTitle(e)) + '</h4>' +
      eventLines(e).map(function (r) { return r[1] === null ? '<div class="kvh">' + esc(r[0]) + '</div>' : '<div class="kv"><span>' + esc(r[0]) + '</span><b>' + esc(r[1]) + '</b></div>'; }).join('') +
      (fl.length ? '<div class="dthumbs">' + fl.map(function (f) { return '<a href="' + f.url + '" download="' + esc(f.name) + '">' + (f.type.indexOf('image') === 0 ? '<img src="' + f.url + '" alt="">' : esc(f.name.slice(0, 14))) + '</a>'; }).join('') + '</div>' : '') +
      '<button class="si danger" data-del>' + I('trash', 22) + '<span>Видалити запис</span></button><button class="si cancel">Закрити</button></div></div>';
    layer.onclick = function (ev) {
      if (ev.target.closest('[data-del]')) { closeLayer(); confirmDel('Видалити цей запис?', 'Так, видалити', function () { S.delEvent(e.id); toast('Запис видалено'); render(); }); return; }
      if (ev.target.classList.contains('ov') || ev.target.closest('.cancel')) closeLayer();
    };
  }

  /* ---------- Гараж ---------- */
  function garage() {
    var seg = [['my', 'Мої авто'], ['add', '+ Додати авто'], ['arch', 'Архів']];
    page({
      title: 'Мій гараж', left: true, nav: 'garage',
      body: '<div class="seg">' + seg.map(function (s) { return '<button data-tab="' + s[0] + '" class="' + (ui.tab === s[0] ? 'on' : '') + '">' + s[1] + '</button>'; }).join('') + '</div>' +
        '<div class="searchrow"><label class="search">' + I('search', 28) + '<input id="q" placeholder="Пошук авто" value="' + esc(ui.q) + '" autocomplete="off"></label><button class="sq" id="view" aria-label="Вигляд">' + I('grid', 26) + '</button></div><div id="cars"></div>' +
        (ui.tab === 'my' ? '<button class="fab" id="add" aria-label="Додати запис">' + I('plus', 34) + '</button>' : '')
    });
    var draw = function () {
      var arch = ui.tab === 'arch', q = ui.q.trim().toLowerCase();
      var cars = S.cars(arch).filter(function (c) { return !q || (carName(c) + ' ' + (c.alias || '') + ' ' + (c.plate || '')).toLowerCase().indexOf(q) >= 0; });
      $('#cars').className = 'cars ' + (ui.compact ? 'compact' : '');
      $('#cars').innerHTML = cars.length ? cars.map(function (c) { return ui.compact ? carCard(c, true) : carRow(c); }).join('') :
        '<p class="empty">' + (arch ? 'Архів порожній' : q ? 'Нічого не знайдено' : 'У гаражі ще немає авто.<br>Натисніть «+ Додати авто»') + '</p>';
    };
    draw();
    setH({
      click: function (e) {
        var t = e.target, b;
        if ((b = t.closest('[data-tab]'))) { if (b.dataset.tab === 'add') return go('#/car/new'); ui.tab = b.dataset.tab; garage(); return; }
        if (t.closest('#view')) { ui.compact = !ui.compact; draw(); return; }
        if (t.closest('#add')) return addRecordMenu();
        if ((b = t.closest('[data-menu]'))) { e.stopPropagation(); carActions(S.car(b.dataset.menu)); return; }
        if ((b = t.closest('.car'))) go('#/car/' + b.dataset.id);
      },
      input: function (e) { if (e.target.id === 'q') { ui.q = e.target.value; draw(); } }
    });
  }
  function addRecordMenu() {
    var cars = S.cars(false);
    if (!cars.length) return go('#/car/new');
    if (cars.length === 1) return go('#/car/' + cars[0].id + '/record');
    sheet('Додати запис — оберіть авто', cars.map(function (c) { return { label: carName(c) + (c.alias ? ' · ' + c.alias : ''), icon: 'carfront', fn: function () { go('#/car/' + c.id + '/record'); } }; }));
  }
  function carActions(c) {
    sheet(carName(c), [
      { label: 'Редагувати', icon: 'edit', fn: function () { go('#/car/' + c.id + '/edit'); } },
      { label: c.archived ? 'Відновити з архіву' : 'В архів', icon: 'archive', fn: function () { c.archived = !c.archived; S.putCar(c); toast(c.archived ? 'Авто в архіві' : 'Авто відновлено'); go('#/garage'); render(); } },
      { label: 'Видалити', icon: 'trash', danger: 1, fn: function () { confirmDel('Видалити ' + carName(c) + ' та всі його записи?', 'Так, видалити', function () { S.delCar(c.id); toast('Авто видалено'); go('#/garage'); render(); }); } }
    ]);
  }

  /* ---------- Про авто ---------- */
  function about(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    var evs = S.events(id);
    page({
      title: 'Про авто', back: '#/garage', nav: 'garage', right: '<button class="link" id="acts">Дії з авто</button>',
      body: carCard(c, false) + '<a class="btn primary" style="margin-top:22px;height:62px" href="#/car/' + id + '/record">' + I('plus', 26) + ' Додати запис</a>' +
        '<h2 class="h2">Категорії подій</h2><div class="chips">' + M.CATS.map(function (k) { return '<a class="chip ' + k.cls + '" href="#/car/' + id + '/history/' + k.id + '">' + I(k.icon2 || k.icon, 22) + '<span>' + k.label + '</span></a>'; }).join('') + '</div>' +
        '<div class="rowh"><h2 class="h2">Історія подій</h2><a class="link" href="#/car/' + id + '/history">Дивитись все</a></div>' +
        (evs.length ? evs.slice(0, 5).map(evRow).join('') : '<p class="empty">Подій ще немає</p>')
    });
    setH({ click: function (e) { if (e.target.closest('#acts')) return carActions(c); var b = e.target.closest('[data-ev]'); if (b) showEvent(S.db.events.find(function (x) { return x.id === b.dataset.ev; })); } });
  }
  function history(id, cat) {
    var c = S.car(id); if (!c) return go('#/garage');
    var evs = S.events(id).filter(function (e) { return !cat || e.category === cat; });
    page({
      title: 'Історія подій', back: '#/car/' + id,
      body: '<div class="chips flt"><a class="chip all ' + (!cat ? 'on' : '') + '" href="#/car/' + id + '/history">Усі</a>' +
        M.CATS.map(function (k) { return '<a class="chip ' + k.cls + ' ' + (cat === k.id ? 'on' : '') + '" href="#/car/' + id + '/history/' + k.id + '">' + I(k.icon2 || k.icon, 18) + '<span>' + k.label + '</span></a>'; }).join('') + '</div>' +
        (evs.length ? evs.map(evRow).join('') : '<p class="empty">Подій ще немає</p>')
    });
    setH({ click: function (e) { var b = e.target.closest('[data-ev]'); if (b) showEvent(S.db.events.find(function (x) { return x.id === b.dataset.ev; })); } });
  }

  /* ---------- Форма авто ---------- */
  function bmy(c) {
    var brands = Object.keys(M.BRANDS).sort(), yr = new Date().getFullYear() + 1, years = [];
    for (var y = yr; y >= 1950; y--) years.push(String(y));
    var bIn = brands.indexOf(c.brand) >= 0, mIn = bIn && M.BRANDS[c.brand].indexOf(c.model) >= 0;
    return '<div class="fld" data-k="brand"><label class="lbl">Марка <i class="req">*</i></label>' + selectEl('brand', brands.concat(['Інша марка']), c.brand ? (bIn ? c.brand : 'Інша марка') : '', 'Оберіть марку') + '<input class="inp other ' + (c.brand && !bIn ? '' : 'hidden') + '" name="brandOther" placeholder="Введіть марку" value="' + esc(c.brand && !bIn ? c.brand : '') + '"></div>' +
      '<div class="fld" data-k="model"><label class="lbl">Модель <i class="req">*</i></label><div id="msel">' + selectEl('model', bIn ? M.BRANDS[c.brand].concat(['Інша модель']) : ['Інша модель'], c.model ? (mIn ? c.model : 'Інша модель') : '', 'Оберіть модель') + '</div><input class="inp other ' + (c.model && !mIn ? '' : 'hidden') + '" name="modelOther" placeholder="Введіть модель" value="' + esc(c.model && !mIn ? c.model : '') + '"></div>' +
      '<div class="fld" data-k="year"><label class="lbl">Рік <i class="req">*</i></label>' + selectEl('year', years, String(c.year || ''), 'Оберіть рік') + '</div>';
  }
  function bmyChange(t, f) {
    if (t.name === 'brand') {
      var other = t.value === 'Інша марка';
      f.querySelector('[name=brandOther]').classList.toggle('hidden', !other);
      var opts = other ? ['Інша модель'] : M.BRANDS[t.value].concat(['Інша модель']);
      $('#msel').innerHTML = selectEl('model', opts, other ? 'Інша модель' : '', 'Оберіть модель');
      f.querySelector('[name=modelOther]').classList.toggle('hidden', !other);
    }
    if (t.name === 'model') f.querySelector('[name=modelOther]').classList.toggle('hidden', t.value !== 'Інша модель');
  }
  function bmyRead(f) {
    var g = function (n) { return f.querySelector('[name=' + n + ']').value.trim(); };
    var brand = g('brand') === 'Інша марка' ? g('brandOther') : g('brand'), model = g('model') === 'Інша модель' ? g('modelOther') : g('model');
    var miss = [['brand', brand], ['model', model], ['year', g('year')]].filter(function (p) { return !p[1]; });
    ['brand', 'model', 'year'].forEach(function (k) { f.querySelector('[data-k=' + k + ']').classList.toggle('err', miss.some(function (p) { return p[0] === k; })); });
    return { ok: !miss.length, brand: brand, model: model, year: +g('year') };
  }
  function carForm(id) {
    var c = id ? S.car(id) : null; if (id && !c) return go('#/garage');
    c = c || { photos: [], unit: 'km', year: '' };
    var brands = Object.keys(M.BRANDS).sort(), yr = new Date().getFullYear() + 1, years = [];
    for (var y = yr; y >= 1950; y--) years.push(String(y));
    var bIn = brands.indexOf(c.brand) >= 0, mIn = bIn && M.BRANDS[c.brand].indexOf(c.model) >= 0;
    var body = '<form id="cf" class="rr" novalidate><div class="card att photos" data-att data-max="5"><div class="attl" style="font-size:22px;font-weight:600">Фото</div><div class="attg"><span class="thumbs" style="display:contents"></span><button type="button" class="addatt">' + I('plus', 38) + '</button></div><input type="file" hidden multiple accept="image/*"></div>' +
      '<h2 class="sub">Обов’язкові поля</h2>' +
      bmy(c) +
      '<div class="fld" data-k="body"><label class="lbl">Тип кузова <i class="req">*</i></label>' + selectEl('body', M.OPTS.body, c.body || '', 'Оберіть тип кузова') + '</div>' +
      '<h2 class="sub">Опційні поля</h2>' +
      fld({ k: 'alias', t: 'text', l: 'Псевдонім', ph: 'напр. Сімейне авто' }, c.alias) +
      '<div class="fld"><label class="lbl">Пробіг</label><div class="row2"><input class="inp" name="mileage" inputmode="numeric" data-num value="' + esc(c.mileage || 0) + '"><div class="units" id="units"><button type="button" data-u="km" class="' + (c.unit !== 'mi' ? 'on' : '') + '">km</button><button type="button" data-u="mi" class="' + (c.unit === 'mi' ? 'on' : '') + '">mi</button></div></div></div>' +
      fld({ k: 'plate', t: 'text', l: 'Номерний знак', ph: 'АН 2536 ПО' }, c.plate) +
      fld({ k: 'vin', t: 'text', l: 'VIN', ph: 'VIN' }, c.vin) +
      fld({ k: 'engine', t: 'money', l: 'Об’єм двигуна', ph: 'напр. 2.0' }, c.engine) +
      fld({ k: 'fuel', t: 'select', l: 'Тип палива', opts: M.OPTS.fuel }, c.fuel) +
      fld({ k: 'gear', t: 'select', l: 'КПП', opts: M.OPTS.gear }, c.gear) +
      fld({ k: 'color', t: 'select', l: 'Колір', opts: M.OPTS.color }, c.color) + '</form>';
    page({ title: id ? 'Редагувати авто' : 'Додати авто', back: id ? '#/car/' + id : '#/garage', body: body, footer: '<button class="btn primary" id="save">Зберегти</button>' });
    var box = $('[data-att]'); box._f = (c.photos || []).map(function (u, i) { return { name: 'photo' + i, type: 'image/jpeg', url: u }; }); drawThumbs(box);
    var unitV = c.unit === 'mi' ? 'mi' : 'km';
    setH({
      click: function (e) {
        var b = e.target.closest('[data-u]');
        if (b) { unitV = b.dataset.u; $$('#units button').forEach(function (x) { x.classList.toggle('on', x === b); }); return; }
        if (!e.target.closest('#save')) return;
        var f = $('#cf'), g = function (n) { return f.querySelector('[name=' + n + ']').value.trim(); };
        var brand = g('brand') === 'Інша марка' ? g('brandOther') : g('brand'), model = g('model') === 'Інша модель' ? g('modelOther') : g('model');
        var miss = [['brand', brand], ['model', model], ['year', g('year')], ['body', g('body')]].filter(function (p) { return !p[1]; });
        ['brand', 'model', 'year', 'body'].forEach(function (k) { f.querySelector('[data-k=' + k + ']').classList.toggle('err', miss.some(function (p) { return p[0] === k; })); });
        if (miss.length) return toast('Заповніть обов’язкові поля');
        var n = {
          id: c.id || S.uid(), brand: brand, model: model, year: +g('year'), body: g('body'), alias: g('alias'), unit: unitV,
          mileage: parseInt(g('mileage'), 10) || 0, plate: g('plate'), vin: g('vin'), engine: g('engine'), fuel: g('fuel'), gear: g('gear'), color: g('color'),
          photos: filesOf(box).map(function (x) { return x.url; }), archived: !!c.archived, createdAt: c.createdAt || Date.now()
        };
        if (!S.putCar(n)) return toast('Не вдалося зберегти: закінчилося місце. Зменште кількість фото');
        toast('Збережено'); go('#/car/' + n.id);
      },
      change: function (e) { bmyChange(e.target, $('#cf')); }
    });
  }

  /* ---------- Створити запис ---------- */
  function recordPick(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    var sel = '';
    page({
      title: 'Створити запис', back: '#/car/' + id, dark: 1, right: '',
      body: '<div class="card carmini">' + I('carfront', 56) + '<div><b>' + esc(carName(c)) + '</b><small>' + c.year + ' • ' + fmtN(S.curMileage(id)) + ' ' + unit(c) + '</small></div></div>' +
        '<label class="lbl rr" style="margin-top:28px">Категорія <i class="req">*</i></label><div class="chips pick">' + M.CATS.map(function (k) { return '<button class="chip" data-cat="' + k.id + '">' + I(k.icon, 22) + '<span>' + k.label + '</span></button>'; }).join('') + '</div>',
      footer: '<button class="btn primary" id="go" disabled>Продовжити</button>'
    });
    setH({
      click: function (e) {
        var b = e.target.closest('[data-cat]');
        if (b) { sel = b.dataset.cat; $$('.chip').forEach(function (x) { x.classList.toggle('picked', x === b); }); $('#go').disabled = false; return; }
        if (e.target.closest('#go') && sel) go('#/car/' + id + '/record/' + sel);
      }
    });
  }

  /* ---------- Форми записів ---------- */
  function workFields(cat) {
    var o = M.SCHEMAS[cat].opts, sel = { k: 'cat', t: 'select', l: 'Категорія/Тип', req: 1, ph: 'Оберіть категорію', opts: o };
    if (cat === 'diag') return [sel, { k: 'cost', t: 'money', l: 'Вартість ₴' }, { k: 'result', t: 'textarea', l: 'Результат / Що діагностували', ph: 'Опишіть результати діагностики...' }, { k: 'note', t: 'textarea', l: 'Примітки (опціонально)', ph: 'Додаткові примітки...' }];
    return [sel, { k: 'desc', t: 'textarea', l: 'Опис', ph: 'Детальний опис роботи...' }, { k: 'cost', t: 'money', l: 'Вартість ₴' }];
  }
  function workCard(cat, n) {
    var fs = workFields(cat), diag = cat === 'diag', h = '<section class="card work" data-work>';
    h += diag ? '<div class="wtop"><h3 class="wname wtitle" data-t="Діагностика" style="flex:1">Діагностика ' + n + '</h3>' + (n > 1 ? '<button type="button" class="rmw" aria-label="Видалити">' + I('x', 18) + '</button>' : '') + '</div>'
      : '<div class="wtop"><input class="wname" name="name" placeholder="Назва" autocomplete="off" style="flex:1">' + (n > 1 ? '<button type="button" class="rmw" aria-label="Видалити">' + I('x', 18) + '</button>' : '') + '</div>';
    h += fs.map(function (f) { return fld(f); }).join('');
    if (!diag) {
      h += '<div class="fld" data-k="remDate"><label class="lbl">Нагадування</label>' + dateInp('remDate', '', true) + '</div><div class="fld kmw" data-k="remKm">' + I('gauge', 26) + '<input class="inp" name="remKm" inputmode="numeric" data-num placeholder="Через N км" autocomplete="off"></div><p class="hint">Нагадування потрапить у \'Майбутні події\' та \'Сповіщення\'</p>';
    }
    h += attBox('Вкладення на всю подію');
    if (!diag) h += '<button type="button" class="exp">Розширена інформація ' + I('down', 22) + '</button><div class="expbody hidden">' + fld({ k: 'parts', t: 'text', l: 'Запчастини / матеріали', ph: 'Назва, артикул' }) + fld({ k: 'warranty', t: 'num', l: 'Гарантія (міс.)', ph: 'напр. 12' }) + '</div>';
    return h + '</section>';
  }
  function readWork(card, cat) {
    var w = {}; workFields(cat).forEach(function (f) { w[f.k] = rd(card, f); });
    if (cat !== 'diag') {
      w.name = card.querySelector('[name=name]').value.trim();
      w.remDate = parseD(card.querySelector('[name=remDate]').value);
      w.remKm = parseInt(card.querySelector('[name=remKm]').value, 10) || 0;
      w.parts = card.querySelector('[name=parts]').value.trim();
      w.warranty = parseInt(card.querySelector('[name=warranty]').value, 10) || 0;
    }
    w.files = filesOf(card.querySelector('[data-att]'));
    return w;
  }
  function recordForm(id, cat) {
    var c = S.car(id); if (!c) return go('#/garage');
    var k = M.cat(cat), sch = M.SCHEMAS[cat], body = '';
    if (sch.kind === 'works') {
      body = sch.head.map(function (f) { return fld(f); }).join('') + '<div id="works">' + workCard(cat, 1) + '</div>' +
        '<section class="card sumcard"><div class="fld" data-k="note"><label class="lbl">Нотатка</label><textarea class="inp" name="note" placeholder="Нотатка на всю подію"></textarea></div>' +
        '<div class="fld" data-k="total"><label class="lbl">Загальна сума ₴</label><input class="inp" name="total" inputmode="decimal" data-dec placeholder="0.00" autocomplete="off"></div>' + attBox('Вкладення на всю подію', 'final') + '</section>' +
        '<button type="button" class="btn outline" id="addw" style="margin-top:22px">' + I('plus', 22) + ' ' + sch.addLabel + '</button>';
    } else if (cat === 'mileage') {
      body = '<div class="infobox blue">' + I('info', 30) + '<div><b>Запис пробігу</b>Фіксуйте поточний пробіг автомобіля для точного відстеження історії обслуговування та планування майбутніх подій.</div></div>' +
        '<div class="mcard"><small>Поточний пробіг</small><b>' + (S.curMileage(id) ? fmtN(S.curMileage(id)) : '—') + ' КМ</b></div>' + sch.fields.map(function (f) { return fld(f); }).join('') + attBox('Вкладення на всю подію');
    } else {
      body = (sch.info ? '<div class="infobox">' + I('info', 28) + '<span>' + esc(sch.info) + '</span></div>' : '') + sch.fields.map(function (f) { return fld(f); }).join('') + (sch.att === false ? '' : attBox('Вкладення на всю подію'));
    }
    page({ title: k.label + ' (' + carName(c) + ')', back: '#/car/' + id, body: '<form id="f" data-cat="' + cat + '" novalidate>' + body + '</form>', footer: '<button class="btn primary" id="save" type="button">Зберегти</button>' });
    setH({
      click: function (e) {
        if (e.target.closest('#addw')) {
          var n = $$('[data-work]').length + 1, d = document.createElement('div'); d.innerHTML = workCard(cat, n);
          $('#works').appendChild(d.firstChild); $$('[data-work]')[n - 1].scrollIntoView({ behavior: 'smooth', block: 'start' }); return;
        }
        if (e.target.closest('#tyedit')) return tyreSheet($('#f'));
        if (e.target.closest('#save')) saveRecord(id, cat);
      },
      change: function (e) {
        if (e.target.name !== 'bought') return;
        var f = $('#f');
        if (e.target.checked) return tyreSheet(f);
        f.querySelector('[name=tyreName]').value = ''; f.querySelector('[name=tyreCost]').value = ''; f.querySelector('.tyinfo').classList.add('hidden');
      }
    });
  }
  function tyreSheet(f) {
    var nm = f.querySelector('[name=tyreName]'), co = f.querySelector('[name=tyreCost]'), cb = f.querySelector('[name=bought]'), info = f.querySelector('.tyinfo');
    layer.innerHTML = '<div class="ov"><div class="sheet"><div class="grab"></div><h4>Які шини купили?</h4><div class="rr">' +
      fld({ k: 'ty_name', t: 'text', l: 'Шини (марка, розмір)', req: 1, ph: 'напр. Michelin 205/55 R16' }, nm.value) +
      fld({ k: 'ty_cost', t: 'money', l: 'Сума ₴', req: 1 }, co.value) +
      '</div><button class="btn primary" id="tys" style="margin-top:20px">Зберегти</button><button class="si cancel">Скасувати</button></div></div>';
    var L = function (n) { return layer.querySelector('[name=' + n + ']'); };
    setTimeout(function () { L('ty_name').focus(); }, 50);
    layer.oninput = function (e) {
      var t = e.target;
      if (t.hasAttribute('data-dec')) t.value = t.value.replace(',', '.').replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
      t.closest('.fld').classList.remove('err');
    };
    layer.onclick = function (e) {
      if (e.target.closest('#tys')) {
        var n = L('ty_name').value.trim(), c = parseFloat(L('ty_cost').value);
        L('ty_name').closest('.fld').classList.toggle('err', !n); L('ty_cost').closest('.fld').classList.toggle('err', !(c >= 0));
        if (!n || !(c >= 0)) return;
        nm.value = n; co.value = c; cb.checked = true;
        info.firstChild.textContent = n + ' · ' + money(c); info.classList.remove('hidden');
        return closeLayer();
      }
      if (e.target.classList.contains('ov') || e.target.closest('.cancel')) { if (!nm.value) cb.checked = false; closeLayer(); }
    };
  }
  function done(id, ev, rems) {
    if (!S.putEvent(ev)) return toast('Не вдалося зберегти: закінчилося місце. Видаліть частину вкладень');
    rems.forEach(function (r) { r.id = S.uid(); r.carId = id; r.eventId = ev.id; S.putReminder(r); });
    toast('Збережено'); go('#/car/' + id);
  }
  function saveRecord(id, cat) {
    var form = $('#f'), sch = M.SCHEMAS[cat], k = M.cat(cat), rems = [];
    var ev = { id: S.uid(), carId: id, category: cat, date: '', mileage: 0, data: {}, files: [], createdAt: Date.now() };
    if (sch.kind === 'works') {
      var ok = validate(form, sch.head), cards = $$('[data-work]', form);
      var works = cards.map(function (card) {
        if (!validate(card, workFields(cat))) ok = false;
        var rdI = card.querySelector('[name=remDate]');
        if (rdI && rdI.value && !parseD(rdI.value)) { ok = false; rdI.closest('.fld').classList.add('err'); }
        return readWork(card, cat);
      });
      if (!ok) return toast('Заповніть обов’язкові поля');
      sch.head.forEach(function (f) { var v = rd(form, f); if (f.k === 'date') ev.date = v; else if (f.k === 'mileage') ev.mileage = v || 0; else ev.data[f.k] = v; });
      ev.data.works = works; ev.data.note = form.querySelector('[name=note]').value.trim();
      var tot = form.querySelector('[name=total]').value; ev.data.total = tot === '' ? '' : parseFloat(tot) || 0;
      ev.files = filesOf(form.querySelector('.final[data-att]'));
      works.forEach(function (w) {
        if (w.remDate || w.remKm) rems.push({ title: w.name || (k.label + (w.cat ? ': ' + w.cat : '')), date: w.remDate, km: w.remKm, base: ev.mileage || S.curMileage(id), manual: false });
      });
    } else {
      if (!validate(form, sch.fields)) return toast('Заповніть обов’язкові поля');
      sch.fields.forEach(function (f) {
        var v = rd(form, f);
        if (f.k === 'date' && f.core) ev.date = v; else if (f.k === 'mileage' && f.core) ev.mileage = v || 0; else ev.data[f.k] = v;
      });
      var box = form.querySelector('[data-att]'); ev.files = filesOf(box);
      if (cat === 'mileage') {
        var cur = S.curMileage(id);
        if (ev.data.newMileage < cur) { form.querySelector('[data-k=newMileage]').classList.add('err'); return toast('Новий пробіг не може бути меншим за поточний (' + fmtN(cur) + ')'); }
        ev.mileage = ev.data.newMileage;
      }
      if (cat === 'tire') {
        ev.data.tyreName = form.querySelector('[name=tyreName]').value;
        ev.data.tyreCost = ev.data.bought ? (parseFloat(form.querySelector('[name=tyreCost]').value) || 0) : 0;
        if (!ev.data.bought) ev.data.tyreName = '';
        if (ev.data.remDate || ev.data.remKm) rems.push({ title: 'Шиномонтаж: ' + (ev.data.tyType || 'нагадування'), date: ev.data.remDate || '', km: ev.data.remKm || 0, base: ev.mileage || S.curMileage(id), manual: false });
      }
      if (cat === 'insurance') {
        ev.date = ev.data.start || today();
        rems.push({ title: 'Продовження страховки', date: ev.data.end, km: 0, base: 0, manual: false, auto: true });
      }
    }
    done(id, ev, rems);
  }

  /* ---------- Майбутні події ---------- */
  function upcoming() {
    var cars = S.cars(false);
    if (!cars.length) {
      page({ title: 'Майбутні події', left: true, nav: 'upcoming', body: '<div class="noev">' + I('calcheck', 64) + '<span>Спочатку додайте авто</span></div><a class="btn primary" href="#/car/new">' + I('plus', 24) + ' Додати авто</a>' });
      return setH({});
    }
    if (!cars.some(function (c) { return c.id === ui.upCar; })) ui.upCar = cars[0].id;
    var i = cars.findIndex(function (c) { return c.id === ui.upCar; }), c = cars[i];
    var rs = S.reminders(c.id).filter(function (r) { return ui.upTab === 'mine' ? r.manual : ui.upTab === 'date' ? !!r.date : !!r.km; });
    rs.sort(function (a, b) { return (a.date || '9').localeCompare(b.date || '9'); });
    var soon = [];
    S.db.reminders.forEach(function (r) {
      var cc = S.car(r.carId); if (!cc || cc.archived) return;
      if (r.date) soon.push({ d: r.date, r: r, c: cc });
      else if (r.km) soon.push({ d: '9999', r: r, c: cc });
    });
    soon.sort(function (a, b) { return a.d.localeCompare(b.d); });
    var soonHtml = soon.length ? '<h2 class="h2" style="margin-top:6px">Нагадування</h2>' + soon.map(function (x) {
      var r = x.r, dd = r.date ? days(r.date) : null, late = dd !== null && dd < 0, sub;
      if (r.date) sub = (dd < 0 ? 'прострочено на ' + (-dd) + ' дн.' : dd === 0 ? 'сьогодні' : 'через ' + dd + ' дн.');
      else { var lf = (r.base || 0) + r.km - S.curMileage(x.c.id); sub = lf < 0 ? 'перевищено на ' + fmtN(-lf) + ' ' + unit(x.c) : 'до ' + fmtN((r.base || 0) + r.km) + ' ' + unit(x.c); late = lf < 0; }
      var badge = r.date ? '<b>' + r.date.slice(8) + '</b><small>' + M.MONTHS[+r.date.slice(5, 7) - 1] + '</small>' : '<b>' + I('gauge', 22) + '</b><small>км</small>';
      return '<div class="rem dl"><span class="dbadge ' + (late ? 'late' : '') + '">' + badge + '</span><div class="evm"><b>' + esc(r.title) + '</b><small class="' + (late ? 'late' : '') + '">' + esc(carName(x.c) + ' · ' + (r.date ? fmtD(r.date) + ' · ' : '') + sub) + '</small></div></div>';
    }).join('') + '<h2 class="h2">Керування по авто</h2>' : '';
    var tabs = [['mine', 'Створені мною'], ['date', 'Заплановані за датою'], ['km', 'Заплановані за пробігом']];
    page({
      title: 'Майбутні події', left: true, nav: 'upcoming',
      body: soonHtml + '<div class="upcar"><button id="prev" aria-label="Попереднє">' + I('left', 26) + '</button><div class="uci">' + I('carfront', 40) + '</div><div style="flex:1"><b>' + esc(carName(c)) + '</b><small>' + c.year + '</small></div><button id="next" aria-label="Наступне">' + I('right', 26) + '</button></div>' +
        '<div class="pills">' + tabs.map(function (t) { return '<button data-t="' + t[0] + '" class="' + (ui.upTab === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div>' +
        (rs.length ? rs.map(function (r) {
          var sub = '', late = false;
          if (r.date) { var d = days(r.date); late = d < 0; sub = fmtD(r.date) + ' · ' + (d < 0 ? 'прострочено на ' + (-d) + ' дн.' : d === 0 ? 'сьогодні' : 'через ' + d + ' дн.'); }
          if (r.km) { var left = (r.base || 0) + r.km - S.curMileage(c.id); sub += (sub ? ' · ' : '') + 'до ' + fmtN((r.base || 0) + r.km) + ' ' + unit(c) + (left < 0 ? ' (перевищено)' : ' (ще ' + fmtN(left) + ')'); late = late || left < 0; }
          return '<div class="rem"><span class="evi">' + I('calcheck', 22) + '</span><div class="evm"><b>' + esc(r.title) + '</b><small class="' + (late ? 'late' : '') + '">' + esc(sub) + '</small></div><button class="x" data-del="' + r.id + '" aria-label="Видалити">' + I('x', 22) + '</button></div>';
        }).join('') : '<div class="noev">' + I('calcheck', 64) + '<span>Планових подій ще немає</span></div>') +
        '<a class="btn primary" style="margin-top:26px;height:62px" href="#/car/' + c.id + '/plan">' + I('plus', 24) + ' Запланувати подію</a><a class="btn outline" href="#/car/' + c.id + '/record">Додати виконану роботу</a>'
    });
    setH({
      click: function (e) {
        var t = e.target, b;
        if (t.closest('#prev')) { ui.upCar = cars[(i - 1 + cars.length) % cars.length].id; return upcoming(); }
        if (t.closest('#next')) { ui.upCar = cars[(i + 1) % cars.length].id; return upcoming(); }
        if ((b = t.closest('[data-t]'))) { ui.upTab = b.dataset.t; return upcoming(); }
        if ((b = t.closest('[data-del]'))) confirmDel('Видалити нагадування?', 'Так, видалити', function () { S.delReminder(b.dataset.del); upcoming(); });
      }
    });
  }
  function planForm(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    page({
      title: 'Запланувати подію', back: '#/upcoming',
      body: '<form id="f" novalidate>' + fld({ k: 'title', t: 'text', l: 'Назва', req: 1, ph: 'напр. Заміна масла' }) +
        '<div class="fld" data-k="date"><label class="lbl">Дата</label>' + dateInp('date', '', true) + '</div><div class="fld kmw" data-k="km" style="margin-top:14px">' + I('gauge', 26) + '<input class="inp" name="km" inputmode="numeric" data-num placeholder="Через N км" autocomplete="off"></div>' +
        '<p class="hint">Вкажіть дату, пробіг або обидва параметри. Нагадування потрапить у \'Майбутні події\' та \'Сповіщення\'</p>' + fld({ k: 'note', t: 'textarea', l: 'Примітка', ph: 'Примітка' }) + '</form>',
      footer: '<button class="btn primary" id="save">Зберегти</button>'
    });
    setH({
      click: function (e) {
        if (!e.target.closest('#save')) return;
        var f = $('#f'), title = f.querySelector('[name=title]').value.trim(), dtx = f.querySelector('[name=date]').value, date = parseD(dtx), km = parseInt(f.querySelector('[name=km]').value, 10) || 0;
        f.querySelector('[data-k=title]').classList.toggle('err', !title);
        f.querySelector('[data-k=date]').classList.toggle('err', !!dtx && !date);
        if (!title || (dtx && !date)) return toast('Перевірте заповнені поля');
        if (!date && !km) return toast('Вкажіть дату або пробіг');
        S.putReminder({ id: S.uid(), carId: id, eventId: '', title: title, date: date, km: km, base: S.curMileage(id), note: f.querySelector('[name=note]').value.trim(), manual: true });
        ui.upCar = id; ui.upTab = 'mine'; toast('Подію заплановано'); go('#/upcoming');
      }
    });
  }

  /* ---------- Послуги / Аналітика ---------- */
  function services() {
    page({
      title: 'Послуги', left: true, nav: 'services',
      body: '<button class="svc" data-go="#/analytics"><span class="evi">' + I('chart', 24) + '</span><div><b>Аналітика</b><small>Витрати по місяцях і статистика пробігу</small></div></button>' +
        '<button class="svc" data-go="#/notifications"><span class="evi">' + I('bell', 24) + '</span><div><b>Сповіщення</b><small>Нагадування та терміни</small></div></button>' +
        '<button class="svc" data-pro><span class="evi">' + I('download', 24) + '</span><div><b>Експорт PDF (Pro)</b><small>Звіт з історією обслуговування</small></div></button>'
    });
    setH({ click: function (e) { var b = e.target.closest('[data-go]'); if (b) return go(b.dataset.go); if (e.target.closest('[data-pro]')) toast('Експорт PDF буде доступний у Pro'); } });
  }
  function analytics() {
    var ids = S.cars(false).map(function (c) { return c.id; }), evs = S.db.events.filter(function (e) { return ids.indexOf(e.carId) >= 0; });
    var now = new Date(), months = [];
    for (var i = 5; i >= 0; i--) { var d = new Date(now.getFullYear(), now.getMonth() - i, 1); months.push({ key: d.getFullYear() + '-' + pad(d.getMonth() + 1), label: M.MONTHS[d.getMonth()], sum: 0 }); }
    evs.forEach(function (e) { var m = months.find(function (x) { return (e.date || '').indexOf(x.key) === 0; }); if (m) m.sum += S.costOf(e); });
    var first = months.findIndex(function (m) { return m.sum > 0; }); if (first < 0) first = months.length - 1;
    var shown = months.slice(first), max = Math.max.apply(null, shown.map(function (m) { return m.sum; }).concat([1]));
    var mag = Math.pow(10, Math.floor(Math.log10(max))), nice = Math.ceil(max / mag) * mag;
    var W = 340, H = 230, L = 58, B = 36, T = 14, ch = H - B - T, bw = Math.min(44, (W - L - 10) / shown.length * 0.55), svg = '';
    for (var g = 0; g <= 3; g++) {
      var y = T + ch - ch * g / 3, v = Math.round(nice * g / 3);
      svg += '<line x1="' + L + '" x2="' + (W - 6) + '" y1="' + y + '" y2="' + y + '" stroke="#ececf2"/><text x="' + (L - 10) + '" y="' + (y + 4) + '" text-anchor="end">' + v + '</text>';
    }
    shown.forEach(function (m, j) {
      var slot = (W - L - 6) / shown.length, x = L + slot * j + slot / 2, h = ch * m.sum / nice;
      svg += (m.sum ? '<rect x="' + (x - bw / 2) + '" y="' + (T + ch - h) + '" width="' + bw + '" height="' + h + '" rx="8" fill="#8b5cf6"/><text x="' + x + '" y="' + (T + ch - h - 6) + '" text-anchor="middle" style="fill:#6d3fe0;font-weight:600">' + Math.round(m.sum) + '</text>' : '') + '<text x="' + x + '" y="' + (H - 10) + '" text-anchor="middle">' + m.label + '</text>';
    });
    var cur = 0, reads = [];
    ids.forEach(function (id) { cur = Math.max(cur, S.curMileage(id)); });
    evs.forEach(function (e) { if (e.mileage) reads.push(e.mileage); });
    var span = reads.length > 1 ? Math.max.apply(null, reads) - Math.min.apply(null, reads) : 0;
    var dts = evs.filter(function (e) { return e.mileage && e.date; }).map(function (e) { return e.date; }).sort();
    var mo = dts.length > 1 ? Math.max(1, (new Date(dts[dts.length - 1]) - new Date(dts[0])) / 2629800000) : 1;
    page({
      title: 'Аналітика', back: '#/services', nav: 'services',
      body: '<section class="card"><h3 class="cardt">Витрати по місяцях</h3><svg class="chart" viewBox="0 0 ' + W + ' ' + H + '">' + svg + '</svg></section>' +
        '<section class="card" style="margin-top:26px"><h3 class="cardt">Статистика пробігу</h3><div class="stats"><div class="stat"><small>Поточний пробіг</small><b>' + fmtN(cur) + ' km</b></div><div class="stat"><small>Пробіг за період</small><b>' + fmtN(span) + ' km</b></div><div class="stat wide"><small>Середній пробіг за місяць</small><b>' + fmtN(span / mo) + ' km</b></div></div></section>' +
        '<button class="btn outline" id="pdf" style="margin-top:26px;width:92%;margin-left:4%">' + I('download', 22) + ' Експорт PDF (Pro)</button>'
    });
    setH({ click: function (e) { if (e.target.closest('#pdf')) toast('Експорт PDF буде доступний у Pro'); } });
  }

  /* ---------- Сповіщення / Профіль ---------- */
  function notifications() {
    var a = alerts();
    page({
      title: 'Сповіщення', back: '#/garage', right: '',
      body: a.length ? a.map(function (x) { return '<div class="al ' + (x.late ? 'late' : '') + '"><span class="evi">' + I('bell', 22) + '</span><div><b>' + esc(x.title) + '</b><small>' + esc(x.sub) + '</small></div></div>'; }).join('') : '<div class="noev">' + I('bell', 64) + '<span>Сповіщень немає</span></div>'
    });
    setH({});
  }
  function profile() {
    var cl = window.Cloud, user = cl && cl.user;
    var mine = ''; try { mine = localStorage.getItem('mycar.avatar') || ''; } catch (er) {}
    var pic = mine || (user && user.photoURL) || '';
    page({
      title: 'Профіль', left: true, nav: 'profile',
      body: '<button class="ava" id="ava" aria-label="Змінити фото профілю">' + (pic ? '<img src="' + esc(pic) + '" alt="" referrerpolicy="no-referrer">' : I('user', 46)) + '<span class="avac">' + I('edit', 16) + '</span></button><input type="file" id="avaf" hidden accept="image/*"><div class="pc"><b>' + esc(user ? (user.displayName || user.email || 'Користувач') : 'Гість') + '</b><small>' + (user ? esc(user.email || '') : (cl && cl.ready ? 'Увійдіть, щоб зберігати дані в хмарі' : 'Дані зберігаються на цьому пристрої')) + '</small></div>' +
        (cl && cl.ready ? (user ? '<button class="svc" id="out"><span class="evi">' + I('x', 22) + '</span><div><b>Вийти</b><small>Дані залишаться в хмарі</small></div></button>' : '<button class="btn primary" id="in" style="margin:18px 0 8px">Увійти через Google</button>') : '') +
        '<button class="svc" id="exp"><span class="evi">' + I('download', 22) + '</span><div><b>Резервна копія</b><small>Зберегти дані у файл JSON</small></div></button>' +
        '<button class="svc" id="imp"><span class="evi">' + I('upload', 22) + '</span><div><b>Відновити з копії</b><small>Замінить поточні дані</small></div></button><input type="file" id="impf" hidden accept="application/json,.json">' +
        '<p class="hint" style="text-align:center;margin-top:26px">My CAR v' + VERSION + ' · ' + S.db.cars.length + ' авто · ' + S.db.events.length + ' записів</p>'
    });
    setH({
      click: function (e) {
        var t = e.target;
        if (t.closest('#ava')) return $('#avaf').click();
        if (t.closest('#in')) return cl.signIn().catch(function (er) { toast('Не вдалося увійти: ' + (er.code || er.message)); });
        if (t.closest('#out')) { try { localStorage.removeItem('mycar.guest'); localStorage.removeItem('mycar.avatar'); } catch (er) {} return cl.signOut(); }
        if (t.closest('#imp')) return $('#impf').click();
        if (t.closest('#exp')) {
          var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([S.exportJSON()], { type: 'application/json' })); a.download = 'my-car-backup-' + today() + '.json'; a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
        }
      },
      change: function (e) {
        if (e.target.id === 'avaf' && e.target.files[0]) {
          return shrinkSquare(e.target.files[0], 256, 0.85).then(function (u) { try { localStorage.setItem('mycar.avatar', u); } catch (er) { return toast('Не вдалося зберегти фото'); } toast('Фото профілю оновлено'); profile(); }, function (er) { toast(er.message); });
        }
        if (e.target.id !== 'impf' || !e.target.files[0]) return;
        var r = new FileReader();
        r.onload = function () {
          confirmDel('Замінити поточні дані копією з файлу?', 'Так, відновити', function () {
            try { S.importJSON(r.result); toast('Дані відновлено'); go('#/garage'); render(); } catch (er) { toast('Файл не схожий на резервну копію'); }
          });
        };
        r.readAsText(e.target.files[0]);
      }
    });
  }


  /* ---------- вхід, реєстрація, перші запитання про авто ---------- */
  var isGuest = function () { try { return localStorage.getItem('mycar.guest') === '1'; } catch (e) { return false; } };
  function guard(h) {
    var C = window.Cloud || {};
    if (C.pending && !C.authChecked) return 'splash';
    if (!C.user && !isGuest()) return h === '#/login' ? '' : '#/login';
    if (C.active && !C.synced) return 'splash';
    if (h === '#/login') return '#/garage';
    if (h === '#/garage' && !S.db.cars.length && !ui.skipOb) return '#/welcome';
    if (h === '#/welcome' && S.db.cars.length && !ui.obBusy) return '#/garage';
    return '';
  }
  function splash() { app.innerHTML = '<div class="lg"><img src="icon.svg" alt="My CAR"><p class="wsub">Завантаження…</p></div>'; app.onclick = app.oninput = app.onchange = null; }
  var GLOGO = '<svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
  function login() {
    var C = window.Cloud || {};
    app.innerHTML = '<div class="lg"><img src="icon.svg" alt="My CAR"><h1>My CAR</h1><p class="wsub">Облік обслуговування, ремонтів, пального, страховок і штрафів вашого авто — в одному місці</p>' +
      '<button class="gbtn" id="gin">' + GLOGO + '<span>Увійти через Gmail</span></button>' +
      '<p class="hint" style="max-width:320px;text-align:center">Реєстрація відбувається автоматично під час першого входу з вашим акаунтом Google</p>' +
      (C.ready ? '' : '<button class="link" id="guest" style="font-size:17px;margin-top:6px">Продовжити без входу</button>') + '<p class="hint">Версія ' + VERSION + '</p></div>';
    setH({
      click: function (e) {
        if (e.target.closest('#guest')) { try { localStorage.setItem('mycar.guest', '1'); } catch (er) {} return render(); }
        if (!e.target.closest('#gin')) return;
        if (!C.ready) return toast('Вхід через Google стане доступним після підключення Firebase. Поки що можна працювати без входу');
        C.signIn().catch(function (er) {
          if (er.code === 'auth/popup-closed-by-user' || er.code === 'auth/cancelled-popup-request') return;
          toast(er.code === 'auth/unauthorized-domain' ? 'Домен сайту не додано в Firebase → Authentication → Authorized domains' : 'Не вдалося увійти: ' + (er.code || er.message));
        });
      }
    });
  }
  function welcome() {
    var ob = ui.ob = ui.ob || { step: 1, d: {} }, d = ob.d, st = ob.step, b = '';
    var Q = ['Яке у вас авто?', 'Кузов і пальне', 'Пробіг та інші дані'], SUB = ['Оберіть марку, модель і рік випуску', 'Ці дані допоможуть точніше вести облік витрат', 'Усі поля необов’язкові — їх можна заповнити пізніше'];
    if (st === 1) b = '<div class="rr">' + bmy(d) + '</div>';
    else if (st === 2) b = '<div class="rr"><div class="fld" data-k="body"><label class="lbl">Тип кузова <i class="req">*</i></label>' + selectEl('body', M.OPTS.body, d.body || '', 'Оберіть тип кузова') + '</div></div>' +
      fld({ k: 'fuel', t: 'select', l: 'Тип палива', opts: M.OPTS.fuel }, d.fuel) + fld({ k: 'gear', t: 'select', l: 'КПП', opts: M.OPTS.gear }, d.gear) + fld({ k: 'engine', t: 'money', l: 'Об’єм двигуна', ph: 'напр. 2.0' }, d.engine);
    else b = '<div class="fld"><label class="lbl">Пробіг</label><div class="row2"><input class="inp" name="mileage" inputmode="numeric" data-num value="' + esc(d.mileage || '') + '" placeholder="0"><div class="units" id="units"><button type="button" data-u="km" class="' + (d.unit !== 'mi' ? 'on' : '') + '">km</button><button type="button" data-u="mi" class="' + (d.unit === 'mi' ? 'on' : '') + '">mi</button></div></div></div>' +
      fld({ k: 'plate', t: 'text', l: 'Номерний знак', ph: 'АН 2536 ПО' }, d.plate) + fld({ k: 'vin', t: 'text', l: 'VIN', ph: 'VIN' }, d.vin) + fld({ k: 'alias', t: 'text', l: 'Псевдонім', ph: 'напр. Сімейне авто' }, d.alias) + fld({ k: 'color', t: 'select', l: 'Колір', opts: M.OPTS.color }, d.color);
    page({
      title: 'Крок ' + st + ' з 3', back: '', right: '',
      body: '<div class="steps">' + [1, 2, 3].map(function (n) { return '<i class="' + (n <= st ? 'on' : '') + '"></i>'; }).join('') + '</div><h2 class="wq">' + Q[st - 1] + '</h2><p class="wsub" style="text-align:left">' + SUB[st - 1] + '</p><form id="ob" novalidate>' + b + '</form>' +
        (st === 1 ? '<p style="text-align:center;margin-top:26px"><button class="link" id="later" style="font-size:18px">Додам пізніше</button></p>' : ''),
      footer: '<button class="btn primary" id="next">' + (st === 3 ? 'Готово' : 'Далі') + '</button>' + (st > 1 ? '<button class="btn outline" id="back">Назад</button>' : '')
    });
    var f = function () { return $('#ob'); }, g = function (n) { var el = f().querySelector('[name=' + n + ']'); return el ? el.value.trim() : ''; };
    function keep() {
      if (st === 1) { var r = bmyRead(f()); d.brand = r.brand; d.model = r.model; d.year = r.year || ''; return r.ok; }
      if (st === 2) { d.body = g('body'); d.fuel = g('fuel'); d.gear = g('gear'); d.engine = g('engine'); f().querySelector('[data-k=body]').classList.toggle('err', !d.body); return !!d.body; }
      d.mileage = parseInt(g('mileage'), 10) || 0; d.plate = g('plate'); d.vin = g('vin'); d.alias = g('alias'); d.color = g('color'); return true;
    }
    setH({
      click: function (e) {
        var t = e.target, u = t.closest('[data-u]');
        if (u) { d.unit = u.dataset.u; $$('#units button').forEach(function (x) { x.classList.toggle('on', x === u); }); return; }
        if (t.closest('#later')) { ui.skipOb = true; ui.ob = null; return go('#/garage'); }
        if (t.closest('#back')) { keep(); ob.step--; return welcome(); }
        if (!t.closest('#next')) return;
        if (!keep()) return toast('Заповніть обов’язкові поля');
        if (st < 3) { ob.step++; return welcome(); }
        var car = { id: S.uid(), brand: d.brand, model: d.model, year: +d.year, body: d.body, alias: d.alias || '', unit: d.unit || 'km', mileage: d.mileage || 0, plate: d.plate || '', vin: d.vin || '', engine: d.engine || '', fuel: d.fuel || '', gear: d.gear || '', color: d.color || '', photos: [], archived: false, createdAt: Date.now() };
        ui.obBusy = true;
        if (!S.putCar(car)) { ui.obBusy = false; return toast('Не вдалося зберегти авто'); }
        ui.ob = null; ui.obBusy = false; toast('Авто додано'); go('#/garage');
      },
      change: function (e) { bmyChange(e.target, f()); }
    });
  }

  /* ---------- маршрути ---------- */
  var R = [
    [/^#\/login$/, login], [/^#\/welcome$/, welcome], [/^#\/garage$/, garage], [/^#\/car\/new$/, function () { carForm(); }],
    [/^#\/car\/([^/]+)\/edit$/, carForm], [/^#\/car\/([^/]+)\/record$/, recordPick],
    [/^#\/car\/([^/]+)\/record\/([a-z]+)$/, function (id, cat) { if (!M.SCHEMAS[cat]) return go('#/car/' + id + '/record'); recordForm(id, cat); }],
    [/^#\/car\/([^/]+)\/history(?:\/([a-z]+))?$/, history], [/^#\/car\/([^/]+)\/plan$/, planForm],
    [/^#\/car\/([^/]+)$/, about], [/^#\/upcoming$/, upcoming], [/^#\/services$/, services],
    [/^#\/analytics$/, analytics], [/^#\/notifications$/, notifications], [/^#\/profile$/, profile]
  ];
  function render() {
    closeLayer();
    var h = location.hash || '#/garage';
    for (var n = 0; n < 3; n++) {
      var gd = guard(h);
      if (gd === 'splash') return splash();
      if (!gd || gd === h) break;
      window.history.replaceState(null, '', gd); h = gd;
    }
    try {
      for (var i = 0; i < R.length; i++) { var m = h.match(R[i][0]); if (m) return R[i][1].apply(null, m.slice(1)); }
      go('#/garage');
    } catch (err) {
      console.error(err);
      app.innerHTML = '<div class="body"><p class="empty">Сталася помилка.<br><a class="link" href="#/garage">До гаражу</a></p></div>';
    }
  }
  window.addEventListener('hashchange', render);
  window.addEventListener('mycar:data', function () { if (!$('#f') && !$('#cf') && !$('#ob') && !layer.firstChild) render(); });
  window.addEventListener('mycar:cloud-error', function () { toast('Не вдалося синхронізувати з хмарою. Дані збережено на пристрої'); });
  window.MyCarApp = { render: render, today: today };
  render();
})();
