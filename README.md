# My CAR

Версія: див. CHANGELOG.md

Версія: див. CHANGELOG.md

Мобільний вебзастосунок для обліку авто (ТО, ремонти, пальне, страховки, штрафи, нагадування).
Хостинг — GitHub Pages, база даних і вхід через Gmail — Firebase (Auth + Firestore).

## Запуск на GitHub Pages
1. Створіть репозиторій на GitHub і завантажте ВСІ файли з цього архіву в корінь (Add file → Upload files).
2. Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, папка `/ (root)` → Save.
3. Сайт буде за адресою `https://<ваш-логін>.github.io/<репозиторій>/`.

## Підключення Firebase (вхід через Gmail + хмарна база)
1. console.firebase.google.com → Add project → "My CAR".
2. Build → Authentication → Get started → Sign-in method → Google → Enable.
3. Authentication → Settings → Authorized domains → додайте `<ваш-логін>.github.io`.
4. Build → Firestore Database → Create database → Rules: вставте вміст `firestore.rules` → Publish.
5. Project settings → Your apps → Web (`</>`) → скопіюйте конфіг у файл `firebase-config.js` (замість `null`).
6. Закомітьте зміни — вхід через Gmail запрацює.

Поки `firebase-config.js` містить `null`, застосунок працює локально: екран входу пропонує «Продовжити без входу».

## Файли
index.html · styles.css · app.js (UI і дані) · cloud.js (Firebase) · firebase-config.js · manifest.webmanifest · icon.svg · firestore.rules
