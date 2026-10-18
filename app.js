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
    refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',
    chart: '<path d="M3 3v18h18M7 15v3M12 10v8M17 6v12"/>'
  };
  window.I = function (n, s, cls) {
    s = s || 24;
    return '<svg class="ic ' + (cls || '') + '" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || '') + '</svg>';
  };
})();
/* Сховище даних. Дані зберігаються в localStorage (кеш), а коли підключено Firebase і користувач увійшов —
   кожна зміна дзеркалиться в Firestore (див. cloud.js). Публічний інтерфейс window.Store синхронний. */
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
    { id: 'diag', label: 'Диагностика', icon: 'search', icon2: 'laptop', cls: 'c-diag' },
    { id: 'mileage', label: 'Пробег', icon: 'gauge', cls: 'c-mile' },
    { id: 'insurance', label: 'Страховка', icon: 'shield', cls: 'c-ins' },
    { id: 'fuel', label: 'Заправка', icon: 'fuel', cls: 'c-fuel' },
    { id: 'wash', label: 'Мойка', icon: 'wash', cls: 'c-wash' },
    { id: 'tire', label: 'Шиномонтаж', icon: 'tire', cls: 'c-tire' },
    { id: 'charge', label: 'Зарядка', icon: 'charge', icon2: 'bolt', cls: 'c-charge' },
    { id: 'fine', label: 'Штраф', icon: 'doc', icon2: 'gavel', cls: 'c-fine' },
    { id: 'other', label: 'Другое', icon: 'more', icon2: 'car', cls: 'c-other' }
  ];
  var cat = function (id) { return CATS.find(function (c) { return c.id === id; }) || CATS[CATS.length - 1]; };

  var OPTS = {
    repair: ['Двигатель', 'Трансмиссия', 'Подвеска', 'Тормозная система', 'Рулевое управление', 'Электрика', 'Кузов', 'Салон', 'Выхлопная система', 'Охлаждение', 'Кондиционер', 'Другое'],
    to: ['Замена масла', 'Масляный фильтр', 'Воздушный фильтр', 'Салонный фильтр', 'Топливный фильтр', 'Свечи зажигания', 'Тормозные колодки', 'Тормозная жидкость', 'Антифриз', 'Ремень/цепь ГРМ', 'Регламентное ТО', 'Другое'],
    diag: ['Компьютерная', 'Ходовая часть', 'Двигатель', 'Электрика', 'Кузов / геометрия', 'Тормоза', 'Другое'],
    tire: ['Сезонная замена шин', 'Балансировка', 'Ремонт прокола', 'Замена дисков', 'Развал-схождение', 'Другое'],
    fuel: ['Бензин', 'Дизель', 'Газ', 'Газ/Бензин', 'Гибрид', 'Электро'],
    grade: {
      'Бензин': ['92', '95', '95 Premium', '95 Mustang', '98', '100', '100 Mustang'],
      'Дизель': ['ДТ', 'ДТ Premium', 'Mustang Diesel'],
      'Газ': ['Пропан-бутан (LPG)', 'Метан (CNG)'],
      'Газ/Бензин': ['Газ (пропан-бутан)', '92', '95', '95 Premium', '98'],
      'Гибрид': ['95', '95 Premium', '98', '100']
    },
    wash: ['Бесконтактная', 'Ручная', 'Комплексная', 'Химчистка салона', 'Самообслуживание', 'Другое'],
    body: ['Седан', 'Хэтчбек', 'Универсал', 'Лифтбек', 'Кросовер', 'Внедорожник', 'Купе', 'Кабриолет', 'Минивэн', 'Пикап', 'Фургон'],
    gear: ['Механическая', 'Автомат', 'Робот', 'Вариатор'],
    color: ['Белый', 'Чёрный', 'Серый', 'Серебристый', 'Синий', 'Красный', 'Зелёный', 'Жёлтый', 'Оранжевый', 'Коричневый', 'Бежевый', 'Фиолетовый', 'Другой']
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
  var MILE = { k: 'mileage', t: 'num', l: 'Пробег (км)', ph: 'напр. 125 000', core: 1 };

  var SCHEMAS = {
    repair: { kind: 'works', head: [DATE, MILE, { k: 'sto', t: 'text', l: 'СТО / Мастер', ph: 'СТО / Мастер' }], opts: OPTS.repair, addLabel: 'Добавить работу' },
    to: { kind: 'works', head: [DATE, MILE, { k: 'sto', t: 'text', l: 'СТО / Мастер', ph: 'СТО / Мастер' }], opts: OPTS.to, addLabel: 'Добавить работу' },
    diag: { kind: 'works', head: [DATE, MILE], opts: OPTS.diag, addLabel: 'Добавить диагностику' },
    fuel: { att: false, fields: [DATE, MILE,
      { k: 'liters', t: 'money', l: 'Литры', req: 1, ph: 'напр. 40' },
      { k: 'ppl', t: 'money', l: 'Цена за литр ₴' },
      { k: 'cost', t: 'money', l: 'Стоимость ₴', req: 1 },
      { k: 'fuelType', t: 'select', l: 'Тип топлива', req: 1, ph: 'Выберите тип топлива', opts: OPTS.fuel },
      { k: 'fuelGrade', t: 'grade', l: 'Марка топлива' },
      { k: 'station', t: 'text', l: 'АЗС', ph: 'Название АЗС' }] },
    tire: { fields: [DATE, MILE,
      { k: 'tyType', t: 'select', l: 'Вид работ', req: 1, ph: 'Выберите вид работ', opts: OPTS.tire },
      { k: 'amount', t: 'money', l: 'Стоимость шиномонтажа ₴' },
      { k: 'bought', t: 'bought' },
      { k: 'remDate', t: 'date', l: 'Напоминание (дата)', slash: true },
      { k: 'remKm', t: 'num', l: 'Напоминание (через N км)', ph: 'напр. 6 000' },
      { k: 'note', t: 'textarea', l: 'Примечание', ph: 'Примечание' }] },
    charge: { att: false, fields: [DATE, MILE,
      { k: 'kwh', t: 'money', l: 'кВт·ч', req: 1, ph: 'напр. 30' },
      { k: 'ppl', t: 'money', l: 'Цена за кВт·ч ₴' },
      { k: 'cost', t: 'money', l: 'Стоимость ₴', req: 1 },
      { k: 'station', t: 'text', l: 'Станция', ph: 'Название станции' }] },
    wash: { fields: [DATE, MILE,
      { k: 'amount', t: 'money', l: 'Сумма ₴', req: 1 },
      { k: 'washType', t: 'select', l: 'Тип мойки', req: 1, ph: 'Выберите тип мойки', opts: OPTS.wash },
      { k: 'note', t: 'textarea', l: 'Примечание', ph: 'Примечание' }] },
    fine: { fields: [DATE, MILE,
      { k: 'amount', t: 'money', l: 'Сумма штрафа', req: 1 },
      { k: 'paid', t: 'paid', l: 'Оплачено' },
      { k: 'discountUntil', t: 'date', l: 'Скидка до' },
      { k: 'violation', t: 'text', l: 'Тип нарушения', ph: 'Тип нарушения' },
      { k: 'place', t: 'text', l: 'Место', ph: 'Место' },
      { k: 'docNo', t: 'text', l: 'Номер документа', ph: 'Номер документа' },
      { k: 'issuer', t: 'text', l: 'Орган, выписавший штраф', ph: 'Орган, выписавший штраф' }] },
    other: { fields: [
      { k: 'name', t: 'text', ph: 'Название' }, DATE, MILE,
      { k: 'cost', t: 'money', l: 'Стоимость ₴' },
      { k: 'note', t: 'textarea', l: 'Примечание', ph: 'Примечание' }] },
    insurance: { info: 'После сохранения автоматически создаётся напоминание о продлении страховки (→ Будущие события)', fields: [
      { k: 'company', t: 'text', l: 'Страховая компания', req: 1 },
      { k: 'policy', t: 'text', l: 'Номер полиса' },
      { k: 'start', t: 'date', l: 'Дата начала' },
      { k: 'end', t: 'date', l: 'Дата окончания', req: 1 },
      { k: 'amount', t: 'money', l: 'Сумма ₴', req: 1 }] },
    mileage: { fields: [DATE, { k: 'newMileage', t: 'num', l: 'Новый пробег (км)', req: 1, ph: 'напр. 125 000' },
      { k: 'note', t: 'textarea', l: 'Примечание', ph: 'Примечание' }] }
  };

  window.MC = {
    CATS: CATS, cat: cat, OPTS: OPTS, BRANDS: BRANDS, SCHEMAS: SCHEMAS,
    MONTHS: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
  };
})();
(function () {
  'use strict';
  var VERSION = '2.0.7';
  window.APP_VERSION = VERSION;
  var S = window.Store, I = window.I, M = window.MC;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var app = $('#app'), layer = $('#layer');
  var ui = { tab: 'my', compact: false, q: '', upCar: null, upTab: 'mine', latest: null, cloudErr: false, lastSync: null };

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
  /* ---------- версія, оновлення, статуси ---------- */
  function newer(a, b) {
    var x = String(a).split('.').map(Number), y = String(b).split('.').map(Number);
    for (var i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0); }
    return false;
  }
  var hasNew = function () { return !!ui.latest && newer(ui.latest, VERSION); };
  function checkVersion() {
    return fetch('version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (j) {
      ui.latest = j.version || null; ui.verFail = false;
    }, function () { ui.verFail = true; }).then(function () { refreshStatus(); });
  }
  function doUpdate() {
    toast('Обновление…');
    var done = function () { location.replace(location.pathname + '?u=' + Date.now() + location.hash); };
    try { if (window.caches) caches.keys().then(function (k) { return Promise.all(k.map(function (x) { return caches.delete(x); })); }).then(done, done); else done(); } catch (e) { done(); }
  }
  function sRow(label, st, text) { return '<div class="srow"><span>' + label + '</span><b class="s-' + st + '"><i></i>' + esc(text) + '</b></div>'; }
  function statusHtml() {
    var C = window.Cloud || {}, cfg = window.FIREBASE_CONFIG, rows = '';
    rows += sRow('Интернет', navigator.onLine ? 'ok' : 'bad', navigator.onLine ? 'Онлайн' : 'Офлайн');
    rows += cfg && cfg.apiKey ? (C.ready ? sRow('Облако Firebase', 'ok', 'Подключено') : C.pending ? sRow('Облако Firebase', 'warn', 'Подключение…') : sRow('Облако Firebase', 'bad', 'Ошибка подключения')) : sRow('Облако Firebase', 'warn', 'Не настроено');
    rows += sRow('Аккаунт Google', C.user ? 'ok' : 'warn', C.user ? (C.user.email || 'Вошли') : 'Гость');
    var sy = !C.ready || !C.user ? ['warn', 'Только на устройстве'] : ui.cloudErr ? ['bad', 'Ошибка синхронизации'] : C.synced ? ['ok', 'Синхронизировано' + (ui.lastSync ? ' · ' + ui.lastSync : '')] : ['warn', 'Синхронизация…'];
    rows += sRow('Данные', sy[0], sy[1]);
    rows += ui.verFail && !ui.latest ? sRow('Версия', 'warn', 'v' + VERSION + ' · не удалось проверить') : hasNew() ? sRow('Версия', 'warn', 'v' + VERSION + ' → доступна v' + ui.latest) : sRow('Версия', 'ok', 'v' + VERSION + (ui.latest ? ' · последняя' : ''));
    return rows;
  }
  function refreshStatus() {
    var el = $('#stbox'); if (el) el.innerHTML = statusHtml();
    var u = $('#updsub'); if (u) u.textContent = hasNew() ? 'Доступна новая версия v' + ui.latest : 'У вас последняя версия v' + VERSION + ' (нажмите, чтобы перезагрузить)';
    var g = $('#cars');
    if (g && !$('#updbanner') && hasNew()) { var b = $('.body'); if (b) b.insertAdjacentHTML('afterbegin', banner()); }
  }
  function banner() { return '<button class="upbanner" id="updbanner" data-upd>' + I('refresh', 22) + '<span><b>Доступна новая версия v' + esc(ui.latest) + '</b><small>Нажмите, чтобы обновить (сейчас v' + VERSION + ')</small></span></button>'; }
  /* просмотр вложений и фото внутри приложения */
  function viewer(list, idx) {
    var v = document.getElementById('viewer'); if (v) v.remove();
    list = (list || []).filter(function (f) { return f && f.url; }); if (!list.length) return;
    var i = Math.max(0, Math.min(idx || 0, list.length - 1)), z = false;
    v = document.createElement('div'); v.id = 'viewer'; document.body.appendChild(v);
    function close() { document.removeEventListener('keydown', key); v.remove(); }
    function key(e) { if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') go1(1); else if (e.key === 'ArrowLeft') go1(-1); }
    function go1(d) { var n = i + d; if (n < 0 || n >= list.length) return; i = n; z = false; draw(); }
    function draw() {
      var f = list[i], img = (f.type || '').indexOf('image') === 0;
      v.innerHTML = '<div class="vtop"><span>' + (list.length > 1 ? (i + 1) + ' / ' + list.length : '') + '</span><button class="vx" aria-label="Закрыть">' + I('x', 26) + '</button></div>' +
        '<div class="vst">' + (img ? '<img src="' + f.url + '" alt="">' : '<div class="vfile">' + I('doc', 56) + '<b>' + esc(f.name || 'Файл') + '</b><a class="btn primary" href="' + f.url + '" download="' + esc(f.name || 'file') + '" style="width:auto;padding:0 28px">Скачать</a></div>') + '</div>' +
        (list.length > 1 ? '<button class="vn vp" ' + (i ? '' : 'disabled') + '>‹</button><button class="vn vnx" ' + (i < list.length - 1 ? '' : 'disabled') + '>›</button>' : '');
    }
    draw();
    var sx = 0;
    v.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    v.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (!z && Math.abs(dx) > 60) go1(dx < 0 ? 1 : -1); }, { passive: true });
    v.addEventListener('click', function (e) {
      if (e.target.closest('.vx')) return close();
      if (e.target.closest('.vp')) return go1(-1);
      if (e.target.closest('.vnx')) return go1(1);
      var im = e.target.closest('.vst img');
      if (im) { z = !z; var r = im.getBoundingClientRect(); im.style.transformOrigin = ((e.clientX - r.left) / r.width * 100) + '% ' + ((e.clientY - r.top) / r.height * 100) + '%'; im.classList.toggle('zm', z); return; }
      if (e.target.closest('.vst') && !e.target.closest('a')) close();
    });
    document.addEventListener('keydown', key);
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('.vw'); if (!el || el.closest('#viewer')) return;
    var cont = el.closest('.dthumbs'), list = null;
    if (cont) list = cont._vwl; else { var box = el.closest('[data-att]'); if (box) list = box._f; }
    if (list) { e.preventDefault(); e.stopPropagation(); viewer(list, +el.dataset.i || 0); }
  }, true);
  function closeLayer() { layer.innerHTML = ''; layer.onclick = null; }

  /* ---------- шаблон сторінки ---------- */
  function alerts() {
    var out = [], t = today();
    S.db.reminders.forEach(function (r) {
      var c = S.car(r.carId); if (!c || c.archived) return;
      if (r.date) {
        var d = days(r.date);
        if (d <= 30) out.push({ late: d < 0, when: d, title: r.title, sub: carName(c) + ' · ' + fmtD(r.date) + ' · ' + (d < 0 ? 'просрочено на ' + (-d) + ' дн.' : d === 0 ? 'сегодня' : 'через ' + d + ' дн.') });
      }
      if (r.km) {
        var left = (r.base || 0) + r.km - S.curMileage(c.id);
        if (left <= 1000) out.push({ late: left < 0, when: left / 100, title: r.title, sub: carName(c) + ' · ' + (left < 0 ? 'превышено на ' + fmtN(-left) : 'осталось ' + fmtN(left)) + ' ' + unit(c) });
      }
    });
    S.db.events.forEach(function (e) {
      var c = S.car(e.carId); if (!c || c.archived || e.category !== 'fine') return;
      var d = e.data || {};
      if (!d.paid && d.discountUntil && days(d.discountUntil) >= 0 && days(d.discountUntil) <= 14)
        out.push({ late: false, when: days(d.discountUntil), title: 'Скидка на штраф до ' + fmtD(d.discountUntil), sub: carName(c) + ' · ' + money(d.amount) });
    });
    return out.sort(function (a, b) { return a.when - b.when; });
  }
  /* ---------- Тема и язык ---------- */
  var pref = function (k, d) { try { return localStorage.getItem('mycar.' + k) || d; } catch (e) { return d; } };
  var setPref = function (k, v) { try { localStorage.setItem('mycar.' + k, v); } catch (e) {} };
  function applyTheme() {
    var t = pref('theme', 'auto'), dark = t === 'dark' || (t === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    var m = document.querySelector('meta[name=theme-color]'); if (m) m.setAttribute('content', dark ? '#0d1612' : '#edf7f2');
  }
  try { if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme); } catch (e) {}
  function setupHtml() {
    var th = pref('theme', 'auto'), lg = pref('lang', 'ru');
    var o1 = [['light', '☀️', 'Светлая'], ['dark', '🌙', 'Тёмная'], ['auto', '📱', 'Системная']], o2 = [['en', '🇬🇧', 'English'], ['ru', '🇷🇺', 'Русский'], ['uk', '🇺🇦', 'Українська']];
    return '<h2 class="h2" style="font-size:21px;margin:24px 0 8px">Оформление</h2><div class="card"><div class="stl">Тема</div><div class="opt">' +
      o1.map(function (o) { return '<button data-theme="' + o[0] + '" class="' + (th === o[0] ? 'on' : '') + '"><i>' + o[1] + '</i>' + o[2] + '</button>'; }).join('') +
      '</div><p class="hint" style="margin-top:8px">«Системная» подстраивается под настройку iPhone или Android</p></div>' +
      '<div class="card" style="margin-top:12px"><div class="stl">Язык</div><div class="opt">' + o2.map(function (o) { return '<button data-lang="' + o[0] + '" class="' + (lg === o[0] ? 'on' : '') + '"><i>' + o[1] + '</i>' + o[2] + '</button>'; }).join('') + '</div></div>';
  }
  function tabbar(a) {
    var T = [['garage', 'Гараж', 'carfront'], ['upcoming', 'Будущие события', 'calcheck'], ['analytics', 'Аналитика', 'chart'], ['profile', 'Профиль', 'user']];
    return '<nav class="tabbar">' + T.map(function (t) { return '<a class="tab ' + (a === t[0] ? 'on' : '') + '" href="#/' + t[0] + '">' + I(t[2], 24) + '<span>' + t[1] + '</span></a>'; }).join('') + '</nav>';
  }
  function page(o) {
    var right = o.right !== undefined ? o.right : '';
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
      '<button class="si cancel">Отмена</button></div></div>';
    layer.onclick = function (e) {
      var b = e.target.closest('[data-i]');
      if (b) { var it = items[+b.dataset.i]; closeLayer(); if (it.fn) it.fn(); return; }
      if (e.target.classList.contains('ov') || e.target.closest('.cancel')) closeLayer();
    };
  }
  function confirmDel(text, label, fn) { sheet(text, [{ label: label, icon: 'trash', danger: 1, fn: fn }]); }

  /* ---------- спільні обробники (маски, вкладення) ---------- */
  function syncNative(e) {
    var n = e.target; if (!n || !n.classList || !n.classList.contains('native')) return;
    var txt = n.parentNode.querySelector('.dt'); if (txt) n.value = parseD(txt.value) || '';
  }
  document.addEventListener('touchstart', syncNative, true); document.addEventListener('mousedown', syncNative, true); document.addEventListener('focusin', syncNative, true);
  function common(e, type) {
    var t = e.target, b;
    if (type === 'click') {
      if (t.closest('[data-upd]')) { doUpdate(); return true; }
      if ((b = t.closest('.datew .cal'))) {
        var dw = b.closest('.datew'), nat = dw.querySelector('.native'), txt = dw.querySelector('.dt');
        nat.value = parseD(txt.value) || '';
        try { if (nat.showPicker) nat.showPicker(); else { nat.focus(); nat.click(); } } catch (er) { try { nat.focus(); nat.click(); } catch (er2) {} }
        return true;
      }
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
      if (t.name === 'paid') { var tx = t.parentNode.querySelector('b'); tx.textContent = t.checked ? 'Оплачено' : 'Не оплачено'; return true; }
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
      if (f.size > max) return rej(new Error('Файл слишком большой (макс. ' + Math.round(max / 1000) + ' КБ)'));
      var r = new FileReader(); r.onerror = function () { rej(new Error('Не удалось прочитать файл')); }; r.onload = function () { res(r.result); }; r.readAsDataURL(f);
    });
  }
  function shrink(file, max, q) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onerror = function () { rej(new Error('Не удалось прочитать файл')); };
      r.onload = function () {
        var im = new Image();
        im.onerror = function () { rej(new Error('Неверный формат изображения')); };
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
      r.onerror = function () { rej(new Error('Не удалось прочитать файл')); };
      r.onload = function () {
        var im = new Image();
        im.onerror = function () { rej(new Error('Неверный формат изображения')); };
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
        if (box._f.length >= max) { toast('Максимум файлов: ' + max); return; }
        var job = /^image\//.test(f.type) ? shrink(f, 1000, 0.7) : readURL(f, 400000);
        return job.then(function (url) { box._f.push({ name: f.name, type: /^image\//.test(f.type) ? 'image/jpeg' : f.type, url: url }); }, function (er) { toast(er.message); });
      });
    }, Promise.resolve()).then(function () { drawThumbs(box); });
  }
  function drawThumbs(box) {
    var th = box.querySelector('.thumbs');
    th.innerHTML = (box._f || []).map(function (f, i) {
      return '<div class="th">' + (f.type.indexOf('image') === 0 ? '<img class="vw" data-i="' + i + '" src="' + f.url + '" alt="">' : '<span>' + esc(f.name.slice(0, 16)) + '</span>') + '<button type="button" data-rm="' + i + '">' + I('x', 16) + '</button></div>';
    }).join('');
  }
  function attBox(label, cls, max) {
    return '<div class="card att ' + (cls || '') + '" data-att data-max="' + (max || 8) + '"><div class="attl">' + esc(label) + '</div><div class="attg"><span class="thumbs" style="display:contents"></span><button type="button" class="addatt" aria-label="Добавить файл">' + I('plus', 38) + '</button></div><input type="file" hidden multiple accept="image/*,application/pdf"></div>';
  }
  var filesOf = function (box) { return box && box._f ? box._f.slice() : []; };

  /* ---------- поля форм ---------- */
  function dateInp(k, v, slash) {
    var sep = slash ? '/' : '.';
    return '<div class="datew"><input class="inp dt" name="' + k + '" inputmode="numeric" maxlength="10" autocomplete="off" placeholder="' + (slash ? '__/__/____' : '__.__.____') + '" value="' + (v ? fmtD(v).replace(/\./g, sep) : '') + '" data-mask="' + sep + '"><span class="cal">' + I('calendar', 30) + '</span><input type="date" class="native" tabindex="-1" aria-label="Выбрать дату"></div>';
  }
  function selectEl(name, opts, v, ph) {
    if (v && opts.indexOf(v) < 0) opts = opts.concat([v]);
    return '<div class="sel"><select class="inp ' + (v ? '' : 'empty') + '" name="' + name + '"><option value="" ' + (v ? '' : 'selected') + (ph ? ' disabled hidden' : '') + '>' + esc(ph || '') + '</option>' +
      opts.map(function (o) { return '<option ' + (o === v ? 'selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>' + I('down', 24) + '</div>';
  }
  function gradesFor(type) { return (M.OPTS.grade[type] || M.OPTS.grade['Бензин']).concat(['Другое']); }
  function fld(f, v) {
    v = v == null ? '' : v;
    var lab = f.l ? '<label class="lbl">' + esc(f.l) + (f.req ? ' <i class="req">*</i>' : '') + '</label>' : '', inp = '';
    switch (f.t) {
      case 'date': inp = dateInp(f.k, (v === '' && (f.k === 'date' || f.k === 'start')) ? today() : v, f.slash); break;
      case 'num': inp = '<input class="inp" name="' + f.k + '" inputmode="numeric" data-num autocomplete="off" placeholder="' + esc(f.ph || '') + '" value="' + esc(v) + '">'; break;
      case 'money': inp = '<input class="inp" name="' + f.k + '" inputmode="decimal" data-dec autocomplete="off" placeholder="' + esc(f.ph || '0.00') + '" value="' + esc(v) + '">'; break;
      case 'text': inp = '<input class="inp" name="' + f.k + '" autocomplete="off" placeholder="' + esc(f.ph || '') + '" value="' + esc(v) + '">'; break;
      case 'textarea': inp = '<textarea class="inp" name="' + f.k + '" placeholder="' + esc(f.ph || '') + '">' + esc(v) + '</textarea>'; break;
      case 'select': inp = selectEl(f.k, f.opts, v, f.ph); break;
      case 'grade': inp = '<div id="gsel">' + selectEl('fuelGrade', gradesFor(''), v, 'Выберите марку топлива') + '</div><input class="inp other ' + (v && gradesFor('').indexOf(v) < 0 ? '' : 'hidden') + '" name="gradeOther" placeholder="Укажите марку топлива">'; break;
      case 'bought': inp = '<label class="chk neu"><input type="checkbox" name="bought"><span class="box">' + I('check', 22) + '</span><b>Покупал шины</b></label><input type="hidden" name="tyreName"><input type="hidden" name="tyreCost"><div class="tyinfo hidden"><span></span><button type="button" class="link" id="tyedit">Изменить</button></div>'; break;
      case 'paid': inp = '<label class="chk"><input type="checkbox" name="' + f.k + '"><span class="box">' + I('check', 22) + '</span><b>Не оплачено</b></label>'; break;
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
  var EMO = { repair: '🔧', to: '⚙️', diag: '🔍', mileage: '🧭', insurance: '🛡️', fuel: '⛽', wash: '🚿', tire: '🛞', charge: '🔋', fine: '🚨', other: '📌' };
  var PKC = { repair: '#ef4444', to: '#3b82f6', diag: '#a855f7', mileage: '#6b7280', insurance: '#f59e0b', fuel: '#22c55e', wash: '#06b6d4', tire: '#f97316', charge: '#16a34a', fine: '#e11d48', other: '#6b7280' };
  var catI = function (k, sz) { return '<span class="emo" style="font-size:' + (sz || 22) + 'px">' + (EMO[k.id] || '📌') + '</span>'; };
  var EMB = ['#0e9f6e', '#0ea5e9', '#ef4444', '#16a34a', '#f59e0b', '#0f172a', '#db2777', '#0d9488'];
  function emblem(c) {
    var b = String(c.brand || '?'), h = 0; for (var i = 0; i < b.length; i++) h = (h * 31 + b.charCodeAt(i)) % 997;
    return '<span class="emb" style="--ec:' + EMB[h % EMB.length] + '"><i>' + esc(b.charAt(0).toUpperCase()) + '</i></span>';
  }

  /* ---------- Расходы за период (неделя / месяц / год / всё) ---------- */
  var PERS = [['week', 'Неделя'], ['month', 'Месяц'], ['year', 'Год'], ['all', 'Всё'], ['custom', 'Свой']];
  var PERN = { week: 'за неделю', month: 'за месяц', year: 'за год', all: 'за всё время', custom: 'за период' };
  var PERD = { week: 7, month: 30, year: 365 };
  var gper = function () { var p = pref('gp', 'year'); return PERD[p] || p === 'all' || p === 'custom' ? p : 'year'; };
  function grange(per) { return per === 'custom' ? { from: pref('gpf', dayStr(30)), to: pref('gpt', today()) } : { from: PERD[per] ? dayStr(PERD[per]) : '', to: today() }; }
  function dayStr(n) { var d = new Date(); d.setDate(d.getDate() - n); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function spendIn(ids, per) {
    var gr = grange(per), t = gr.to, n = PERD[per], from = gr.from, pf = n ? dayStr(n * 2) : '', r = { sum: 0, prev: 0, n: 0, cats: {}, from: from, to: t };
    S.db.events.forEach(function (e) {
      if (ids.indexOf(e.carId) < 0 || !e.date || e.category === 'mileage') return;
      var c = S.costOf(e);
      if (e.date <= t && (!from || e.date >= from)) { r.sum += c; r.n++; r.cats[e.category] = (r.cats[e.category] || 0) + c; }
      else if (n && e.date >= pf && e.date < from) r.prev += c;
    });
    r.delta = n && r.prev > 0 ? Math.round((r.sum - r.prev) / r.prev * 100) : null;
    return r;
  }
  function distIn(ids, from, to) {
    var t = to || today(), v = [];
    S.db.events.forEach(function (e) { if (ids.indexOf(e.carId) >= 0 && e.mileage > 0 && e.date && e.date <= t && (!from || e.date >= from)) v.push(+e.mileage); });
    return v.length > 1 ? Math.max.apply(null, v) - Math.min.apply(null, v) : 0;
  }
  function fuelAvg(id) {
    var fe = S.events(id).filter(function (e) { return e.category === 'fuel' && +(e.data || {}).liters > 0 && e.mileage > 0; }).sort(function (a, b) { return a.mileage - b.mileage; });
    if (fe.length < 2) return null;
    var d = fe[fe.length - 1].mileage - fe[0].mileage, l = 0; fe.slice(1).forEach(function (e) { l += +e.data.liters; });
    return d > 0 ? l / d * 100 : null;
  }
  var CCOL = { repair: '#ef4444', to: '#3b82f6', diag: '#a855f7', insurance: '#f59e0b', fuel: '#22c55e', charge: '#14b8a6', wash: '#06b6d4', tire: '#f97316', fine: '#be123c', other: '#9ca3af' };
  function perSeg(per, cls) {
    var g = grange('custom');
    return '<div class="mini ' + (cls || '') + '" data-gps>' + PERS.map(function (p) { return '<button data-gp="' + p[0] + '" class="' + (per === p[0] ? 'on' : '') + '">' + p[1] + '</button>'; }).join('') + '</div>' +
      (per === 'custom' ? '<div class="rng gpr" data-gps><label>С<input type="date" class="inp" data-gpd="gpf" value="' + g.from + '" max="' + today() + '"></label><label>По<input type="date" class="inp" data-gpd="gpt" value="' + g.to + '" max="' + today() + '"></label></div>' : '');
  }
  function catBar(r) {
    var ks = M.CATS.filter(function (k) { return r.cats[k.id] > 0; }).sort(function (a, b) { return r.cats[b.id] - r.cats[a.id]; });
    if (!ks.length || !r.sum) return '';
    return '<div class="bars">' + ks.map(function (k) { return '<i style="width:' + (r.cats[k.id] / r.sum * 100) + '%;background:' + CCOL[k.id] + '"></i>'; }).join('') + '</div><div class="lgx">' +
      ks.slice(0, 5).map(function (k) { return '<span><i style="background:' + CCOL[k.id] + '"></i>' + catI(k, 14) + ' ' + Math.round(r.cats[k.id] / r.sum * 100) + '%</span>'; }).join('') + '</div>';
  }
  function deltaHtml(r) {
    if (r.delta === null) return '';
    return '<em class="' + (r.delta > 0 ? 'up' : 'dn') + '">' + (r.delta > 0 ? '▲ ' : r.delta < 0 ? '▼ ' : '') + Math.abs(r.delta) + '%</em>';
  }
  function nextRem(id) {
    var best = null;
    S.db.reminders.forEach(function (r) {
      if (r.carId !== id) return;
      var w = null, txt = '';
      if (r.date) { var d = days(r.date); w = d; txt = d < 0 ? 'просрочено на ' + (-d) + ' дн.' : d === 0 ? 'сегодня' : 'через ' + d + ' дн.'; }
      else if (r.km) { var left = (r.base || 0) + r.km - S.curMileage(id); w = left / 100; txt = left < 0 ? 'превышено на ' + fmtN(-left) + ' км' : 'осталось ' + fmtN(left) + ' км'; }
      if (w !== null && (!best || w < best.w)) best = { w: w, title: r.title, txt: txt, late: w < 0 };
    });
    return best;
  }
  function carBig(c) {
    var per = gper(), r = spendIn([c.id], per), evs = S.events(c.id), photo = c.photos && c.photos[0];
    var dist = distIn([c.id], r.from, r.to), fa = fuelAvg(c.id), nr = nextRem(c.id);
    var lastTo = evs.filter(function (e) { return e.category === 'to'; }).sort(function (a, b) { return b.date.localeCompare(a.date); })[0];
    var ins = evs.filter(function (e) { return e.category === 'insurance' && (e.data || {}).end; }).sort(function (a, b) { return b.data.end.localeCompare(a.data.end); })[0];
    var cell = function (ic, l, v, bad) { return '<div class="cell' + (bad ? ' bad' : '') + '"><small>' + ic + ' ' + l + '</small><b>' + v + '</b></div>'; };
    var sub = [c.alias, c.plate, c.body, c.color].filter(Boolean).join(' · ');
    var eg = [c.engine ? c.engine + ' л' : '', c.gear].filter(Boolean).join(' · ');
    return '<article class="car big" data-id="' + c.id + '"><div class="bph' + (photo ? ' hasp' : '') + '">' + (photo ? '<img src="' + photo + '" alt="">' : '<span class="hdeco">' + I('carfront', 190) + '</span>') +
      '<div class="btop">' + '<span class="hyr">' + esc(c.year) + '</span>' + (c.fuel ? '<span class="hyr">⛽ ' + esc(c.fuel) + '</span>' : '') + '<button class="kebab" data-menu="' + c.id + '" aria-label="Меню">' + I('more', 22) + '</button></div>' +
      '<div class="bnm"><h3>' + esc(carName(c)) + '</h3><p>' + esc(sub || 'Ваш автомобиль') + '</p></div></div>' +
      '<div class="bbd"><div class="sp"><div><small>Расходы ' + PERN[per] + '</small><b>' + money(r.sum).replace('.00', '') + '</b></div>' + deltaHtml(r) + '</div>' + perSeg(per) + catBar(r) +
      '<div class="grid">' + cell('🧭', 'Пробег', fmtN(S.curMileage(c.id)) + ' ' + unit(c)) + cell('⛽', 'Средний расход', fa ? fa.toFixed(1).replace('.', ',') + ' л/100 км' : '—') +
      cell('⚙️', 'Двигатель · КПП', esc(eg) || '—') + cell('💰', 'Стоимость 1 км', dist > 0 && r.sum ? money(r.sum / dist) : '—') +
      cell('🛠️', 'Последнее ТО', lastTo ? fmtD(lastTo.date) : '—') + cell('📅', nr ? esc(nr.title.length > 18 ? nr.title.slice(0, 17) + '…' : nr.title) : 'Следующее', nr ? nr.txt : '—', nr && nr.late) +
      cell('🛡️', 'Страховка до', ins ? fmtD(ins.data.end) : '—', ins && ins.data.end < today()) + cell('🧾', 'Записей', evs.length) + '</div>' +
      '</div></article>';
  }
  function carRow2(c, per) {
    var r = spendIn([c.id], per), photo = c.photos && c.photos[0], tags = [c.body, c.fuel, c.gear].filter(Boolean);
    return '<article class="car row2" data-id="' + c.id + '"><div class="rph"' + (photo ? '' : ' style="--a:' + EMB[(c.brand || '?').charCodeAt(0) % EMB.length] + '"') + '>' + (photo ? '<img src="' + photo + '" alt="">' : I('carfront', 46)) + '</div>' +
      '<div class="rin"><div class="rt"><h3>' + esc(carName(c)) + '</h3><button class="kebab k2" data-menu="' + c.id + '" aria-label="Меню">' + I('more', 20) + '</button></div><p>' + esc([c.plate, c.year].filter(Boolean).join(' · ')) + '</p>' +
      (tags.length ? '<div class="rtg">' + tags.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>' : '') +
      '<div class="rst"><div><small>Пробег</small><b>' + fmtN(S.curMileage(c.id)) + ' ' + unit(c) + '</b></div><div><small>Расходы ' + PERN[per] + '</small><b>' + fmtN(r.sum) + ' ₴</b></div></div></div></article>';
  }
  function sumCard(cars, per) {
    var r = spendIn(cars.map(function (c) { return c.id; }), per);
    return '<div class="sumc"><small>Расходы по всем авто · ' + PERN[per] + '</small><div class="srw"><b>' + money(r.sum).replace('.00', '') + '</b>' + deltaHtml(r) + '</div>' + perSeg(per, 'inv') + catBar(r) + '</div>';
  }
  function carHero(c, noMenu) {
    var per = gper(), r = spendIn([c.id], per), evs = S.events(c.id);
    var photo = c.photos && c.photos[0], tags = [c.body, c.fuel, c.gear, c.engine ? c.engine + ' л' : '', c.color].filter(Boolean);
    return '<article class="car hero' + (photo ? ' hasp' : '') + '" data-id="' + c.id + '"><div class="hbg">' + (photo ? '<img src="' + photo + '" alt="">' : '<span class="hdeco">' + I('carfront', 190) + '</span>') + '</div>' +
      '<div class="htop">' + '<span class="hyr">' + esc(c.year) + '</span>' + (noMenu ? '' : '<button class="kebab" data-menu="' + c.id + '" aria-label="Меню">' + I('more', 22) + '</button>') + '</div>' +
      '<div class="hbody"><h3>' + esc(carName(c)) + '</h3><p>' + esc([c.alias, c.plate].filter(Boolean).join(' · ') || 'Ваш автомобиль') + '</p>' + (tags.length ? '<div class="htags">' + tags.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>' : '') + '</div>' +
      '<div class="hstats"><div><small>Пробег</small><b>' + fmtN(S.curMileage(c.id)) + ' ' + unit(c) + '</b></div><div><small>Расходы ' + PERN[per] + '</small><b>' + fmtN(r.sum) + ' ₴</b></div><div><small>Записей</small><b>' + r.n + '</b></div></div></article>';
  }
  function garageAlerts() {
    var al = alerts(); if (!al.length) return '';
    return '<h2 class="h2" style="margin:8px 0 2px;font-size:21px">По графику у вас</h2>' + al.slice(0, 3).map(function (a) {
      return '<a class="al ' + (a.late ? 'late' : '') + '" href="#/upcoming"><span class="evi">' + I('calcheck', 22) + '</span><div><b>' + esc(a.title) + '</b><small>' + esc(a.sub) + '</small></div></a>';
    }).join('') + (al.length > 3 ? '<a class="link" href="#/upcoming" style="display:block;text-align:center;font-size:17px">Ещё напоминаний: ' + (al.length - 3) + '</a>' : '');
  }
  function carRow(c) {
    return '<article class="car row" data-id="' + c.id + '"><div class="rimg">' + (c.photos && c.photos[0] ? '<img src="' + c.photos[0] + '" alt="">' : I('carfront', 40)) + '</div><div class="rinfo"><h3>' + esc(carName(c)) + '</h3><p>' + esc([c.body, c.alias, c.plate].filter(Boolean).join(' · ')) + '</p><div class="tags"><span>' + I('calendar', 15) + c.year + '</span><span>' + I('gauge', 15) + fmtN(S.curMileage(c.id)) + ' ' + unit(c) + '</span></div></div><button class="kebab" data-menu="' + c.id + '" aria-label="Меню">' + I('more', 22) + '</button></article>';
  }
  function evTitle(e) {
    var d = e.data || {}, k = M.cat(e.category), w = (d.works || [])[0];
    switch (e.category) {
      case 'repair': case 'to': return k.label + (w && (w.name || w.cat) ? ' — ' + (w.name || w.cat) : '');
      case 'diag': return k.label + (w && w.cat ? ' — ' + w.cat : '');
      case 'fuel': return k.label + (d.station ? ' — ' + d.station : '') + (d.liters ? ' · ' + d.liters + ' л' : '') + (d.fuelGrade ? ' · ' + d.fuelGrade : '');
      case 'charge': return k.label + (d.station ? ' — ' + d.station : '');
      case 'tire': return k.label + (d.tyType ? ' — ' + d.tyType : '');
      case 'insurance': return k.label + ' — ' + (d.company || '');
      case 'fine': return k.label + (d.paid ? ' (оплачено)' : ' (не оплачено)');
      case 'mileage': return 'Пробег — ' + fmtN(e.mileage) + ' км';
      case 'other': return d.name || 'Другое';
      default: return k.label;
    }
  }
  function evRow(e) {
    var k = M.cat(e.category), c = S.costOf(e);
    return '<div class="ev" data-ev="' + e.id + '"><span class="evi ' + k.cls + '">' + catI(k, 22) + '</span><div class="evm"><b>' + esc(evTitle(e)) + '</b><small>' + fmtD(e.date) + (e.mileage && e.category !== 'mileage' ? ' · ' + fmtN(e.mileage) + ' км' : '') + '</small></div><span class="evs">' + (c ? money(c) : '') + '</span></div>';
  }
  function eventLines(e) {
    var d = e.data || {}, L = [], sch = M.SCHEMAS[e.category];
    L.push(['Дата', fmtD(e.date)]);
    if (e.mileage && e.category !== 'mileage') L.push(['Пробег', fmtN(e.mileage) + ' км']);
    if (sch.kind === 'works') {
      if (d.sto) L.push(['СТО / Мастер', d.sto]);
      (d.works || []).forEach(function (w, i) {
        L.push([e.category === 'diag' ? 'Диагностика ' + (i + 1) : (w.name || 'Работа ' + (i + 1)), null]);
        if (w.cat) L.push(['Категория', w.cat]);
        if (w.desc) L.push(['Описание', w.desc]);
        if (w.result) L.push(['Результат', w.result]);
        if (w.note) L.push(['Примечания', w.note]);
        if (w.parts) L.push(['Запчасти', w.parts]);
        if (w.warranty) L.push(['Гарантия', w.warranty + ' мес.']);
        if (w.cost) L.push(['Стоимость', money(w.cost)]);
        if (w.remDate) L.push(['Напоминание', fmtD(w.remDate)]);
        if (w.remKm) L.push(['Напоминание', 'через ' + fmtN(w.remKm) + ' км']);
      });
      if (d.note) L.push(['Заметка', d.note]);
      L.push(['Общая сумма', money(S.costOf(e))]);
    } else {
      sch.fields.forEach(function (f) {
        if (f.core) return;
        if (f.t === 'bought') { if (d.bought) L.push(['Шины куплены', (d.tyreName || '') + (d.tyreCost ? ' · ' + money(d.tyreCost) : '')]); return; }
        var v = d[f.k]; if (v === '' || v == null || (v === false && f.t !== 'paid')) return;
        var s = f.t === 'money' ? ((f.k === 'liters' || f.k === 'kwh') ? v : money(v)) : f.t === 'date' ? fmtD(v) : f.t === 'paid' ? (v ? 'Оплачено' : 'Не оплачено') : f.k === 'newMileage' ? fmtN(v) + ' км' : v;
        L.push([f.l || 'Название', String(s)]);
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
      (fl.length ? '<div class="dthumbs">' + fl.map(function (f, i) { return '<a href="' + f.url + '" class="vw" data-i="' + i + '">' + (f.type.indexOf('image') === 0 ? '<img src="' + f.url + '" alt="">' : esc(f.name.slice(0, 14))) + '</a>'; }).join('') + '</div>' : '') +
      '<button class="si danger" data-del>' + I('trash', 22) + '<span>Удалить запись</span></button><button class="si cancel">Закрыть</button></div></div>';
    var dt = layer.querySelector('.dthumbs'); if (dt) dt._vwl = fl;
    layer.onclick = function (ev) {
      if (ev.target.closest('.vw')) { ev.preventDefault(); return; }
      if (ev.target.closest('[data-del]')) { closeLayer(); confirmDel('Удалить эту запись?', 'Да, удалить', function () { S.delEvent(e.id); toast('Запись удалена'); render(); }); return; }
      if (ev.target.classList.contains('ov') || ev.target.closest('.cancel')) closeLayer();
    };
  }

  /* ---------- Гараж ---------- */
  function garage() {
    var seg = [['my', 'Мои авто'], ['add', '+ Добавить авто'], ['arch', 'Архив']];
    page({
      title: 'Мой гараж', left: true, nav: 'garage',
      body: (hasNew() ? banner() : '') + garageAlerts() + '<div class="seg">' + seg.map(function (s) { return '<button data-tab="' + s[0] + '" class="' + (ui.tab === s[0] ? 'on' : '') + '">' + s[1] + '</button>'; }).join('') + '</div>' +
        '<div class="searchrow"><label class="search">' + I('search', 28) + '<input id="q" placeholder="Поиск авто" value="' + esc(ui.q) + '" autocomplete="off"></label><button class="sq" id="view" aria-label="Вид">' + I('grid', 26) + '</button></div><div id="cars"></div>' +
        (ui.tab === 'my' ? '<button class="fab" id="add" aria-label="Добавить запись">' + I('plus', 34) + '</button>' : '')
    });
    var draw = function () {
      var arch = ui.tab === 'arch', q = ui.q.trim().toLowerCase();
      var cars = S.cars(arch).filter(function (c) { return !q || (carName(c) + ' ' + (c.alias || '') + ' ' + (c.plate || '')).toLowerCase().indexOf(q) >= 0; });
      $('#cars').className = 'cars ' + (ui.compact ? 'compact' : '');
      $('#cars').innerHTML = cars.length ? (cars.length > 1 && !arch && !ui.compact ? sumCard(cars, gper()) : '') + cars.map(function (c) { return ui.compact ? carCard(c, true) : (arch || q ? carRow(c) : cars.length === 1 ? carBig(c) : carRow2(c, gper())); }).join('') :
        '<p class="empty">' + (arch ? 'Архив пуст' : q ? 'Ничего не найдено' : 'В гараже пока нет авто.<br>Нажмите «+ Добавить авто»') + '</p>';
    };
    draw();
    setH({
      click: function (e) {
        var t = e.target, b;
        if ((b = t.closest('[data-tab]'))) { if (b.dataset.tab === 'add') return go('#/car/new'); ui.tab = b.dataset.tab; garage(); return; }
        if (t.closest('#view')) { ui.compact = !ui.compact; draw(); return; }
        if ((b = t.closest('[data-gp]'))) { e.stopPropagation(); setPref('gp', b.dataset.gp); draw(); return; }
        if ((b = t.closest('[data-rep]'))) { e.stopPropagation(); return reportSheet(b.dataset.rep); }
        if (t.closest('[data-gps]')) return;
        if (t.closest('#add')) return addRecordMenu();
        if ((b = t.closest('[data-menu]'))) { e.stopPropagation(); carActions(S.car(b.dataset.menu)); return; }
        if ((b = t.closest('.car'))) go('#/car/' + b.dataset.id);
      },
      input: function (e) { if (e.target.id === 'q') { ui.q = e.target.value; draw(); } },
      change: function (e) { var d = e.target.dataset && e.target.dataset.gpd; if (d && e.target.value) { var o = grange('custom'); o[d === 'gpf' ? 'from' : 'to'] = e.target.value; if (o.from > o.to) { var x = o.from; o.from = o.to; o.to = x; } setPref('gpf', o.from); setPref('gpt', o.to); draw(); } }
    });
  }
  function addRecordMenu() {
    var cars = S.cars(false);
    if (!cars.length) return go('#/car/new');
    if (cars.length === 1) return go('#/car/' + cars[0].id + '/record');
    sheet('Добавить запись — выберите авто', cars.map(function (c) { return { label: carName(c) + (c.alias ? ' · ' + c.alias : ''), icon: 'carfront', fn: function () { go('#/car/' + c.id + '/record'); } }; }));
  }
  function carActions(c) {
    sheet(carName(c), [
      { label: 'Редактировать', icon: 'edit', fn: function () { go('#/car/' + c.id + '/edit'); } },
      { label: c.archived ? 'Восстановить из архива' : 'В архив', icon: 'archive', fn: function () { c.archived = !c.archived; S.putCar(c); toast(c.archived ? 'Авто в архиве' : 'Авто восстановлено'); go('#/garage'); render(); } },
      { label: 'Удалить', icon: 'trash', danger: 1, fn: function () { confirmDel('Удалить ' + carName(c) + ' и все его записи?', 'Да, удалить', function () { S.delCar(c.id); toast('Авто удалено'); go('#/garage'); render(); }); } }
    ]);
  }

  /* ---------- Об авто ---------- */
  function totalBar(evs, label) {
    var sum = 0; evs.forEach(function (e) { sum += S.costOf(e); });
    return evs.length ? '<div class="tot"><div><b>Итого' + (label ? ' · ' + label : '') + '</b><small>записей: ' + evs.length + '</small></div><span>' + money(sum) + '</span></div>' : '';
  }
  function about(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    var per = gper(), gr = grange(per), evs = S.events(id).filter(function (e) { return (!gr.from || e.date >= gr.from) && e.date <= gr.to; });
    page({
      title: 'Об авто', back: '#/garage', nav: 'garage', right: '<button class="link" id="acts">Действия с авто</button>',
      body: carHero(c, true).replace('class="car hero', 'class="car hero static') + perSeg(per) + '<a class="btn primary" style="margin-top:8px;height:62px" href="#/car/' + id + '/record">' + I('plus', 26) + ' Добавить запись</a>' +
        '<h2 class="h2">Категории событий</h2><div class="chips">' + M.CATS.map(function (k) { return '<a class="chip ' + k.cls + '" href="#/car/' + id + '/history/' + k.id + '">' + catI(k, 22) + '<span>' + k.label + '</span></a>'; }).join('') + '</div>' +
        '<div class="rowh"><h2 class="h2">История событий</h2><a class="link" href="#/car/' + id + '/history">Смотреть все</a></div>' +
        (evs.length ? evs.slice(0, 5).map(evRow).join('') : '<p class="empty">Событий пока нет</p>') + totalBar(evs, PERN[per])
    });
    setH({ change: function (e) { var d = e.target.dataset && e.target.dataset.gpd; if (d && e.target.value) { var o = grange('custom'); o[d === 'gpf' ? 'from' : 'to'] = e.target.value; if (o.from > o.to) { var x = o.from; o.from = o.to; o.to = x; } setPref('gpf', o.from); setPref('gpt', o.to); about(id); } }, click: function (e) { var g = e.target.closest('[data-gp]'); if (g) { setPref('gp', g.dataset.gp); return about(id); } if (e.target.closest('[data-gps]')) return; if (e.target.closest('#acts')) return carActions(c); var b = e.target.closest('[data-ev]'); if (b) showEvent(S.db.events.find(function (x) { return x.id === b.dataset.ev; })); } });
  }
  function history(id, cat) {
    var c = S.car(id); if (!c) return go('#/garage');
    var evs = S.events(id).filter(function (e) { return !cat || e.category === cat; });
    page({
      title: 'История событий', back: '#/car/' + id,
      body: '<div class="chips flt"><a class="chip all ' + (!cat ? 'on' : '') + '" href="#/car/' + id + '/history">Все</a>' +
        M.CATS.map(function (k) { return '<a class="chip ' + k.cls + ' ' + (cat === k.id ? 'on' : '') + '" href="#/car/' + id + '/history/' + k.id + '">' + catI(k, 18) + '<span>' + k.label + '</span></a>'; }).join('') + '</div>' +
        (evs.length ? evs.map(evRow).join('') : '<p class="empty">Событий пока нет</p>') + totalBar(evs, cat ? M.cat(cat).label : 'все события')
    });
    setH({ click: function (e) { var b = e.target.closest('[data-ev]'); if (b) showEvent(S.db.events.find(function (x) { return x.id === b.dataset.ev; })); } });
  }

  /* ---------- Форма авто ---------- */
  function bmy(c) {
    var brands = Object.keys(M.BRANDS).sort(), yr = new Date().getFullYear() + 1, years = [];
    for (var y = yr; y >= 1950; y--) years.push(String(y));
    var bIn = brands.indexOf(c.brand) >= 0, mIn = bIn && M.BRANDS[c.brand].indexOf(c.model) >= 0;
    return '<div class="fld" data-k="brand"><label class="lbl">Марка <i class="req">*</i></label>' + selectEl('brand', brands.concat(['Другая марка']), c.brand ? (bIn ? c.brand : 'Другая марка') : '', 'Выберите марку') + '<input class="inp other ' + (c.brand && !bIn ? '' : 'hidden') + '" name="brandOther" placeholder="Введите марку" value="' + esc(c.brand && !bIn ? c.brand : '') + '"></div>' +
      '<div class="fld" data-k="model"><label class="lbl">Модель <i class="req">*</i></label><div id="msel">' + selectEl('model', bIn ? M.BRANDS[c.brand].concat(['Другая модель']) : ['Другая модель'], c.model ? (mIn ? c.model : 'Другая модель') : '', 'Выберите модель') + '</div><input class="inp other ' + (c.model && !mIn ? '' : 'hidden') + '" name="modelOther" placeholder="Введите модель" value="' + esc(c.model && !mIn ? c.model : '') + '"></div>' +
      '<div class="fld" data-k="year"><label class="lbl">Год <i class="req">*</i></label>' + selectEl('year', years, String(c.year || ''), 'Выберите год') + '</div>';
  }
  function bmyChange(t, f) {
    if (t.name === 'brand') {
      var other = t.value === 'Другая марка';
      f.querySelector('[name=brandOther]').classList.toggle('hidden', !other);
      var opts = other ? ['Другая модель'] : M.BRANDS[t.value].concat(['Другая модель']);
      $('#msel').innerHTML = selectEl('model', opts, other ? 'Другая модель' : '', 'Выберите модель');
      f.querySelector('[name=modelOther]').classList.toggle('hidden', !other);
    }
    if (t.name === 'model') f.querySelector('[name=modelOther]').classList.toggle('hidden', t.value !== 'Другая модель');
  }
  function bmyRead(f) {
    var g = function (n) { return f.querySelector('[name=' + n + ']').value.trim(); };
    var brand = g('brand') === 'Другая марка' ? g('brandOther') : g('brand'), model = g('model') === 'Другая модель' ? g('modelOther') : g('model');
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
      '<h2 class="sub">Обязательные поля</h2>' +
      bmy(c) +
      '<div class="fld" data-k="body"><label class="lbl">Тип кузова <i class="req">*</i></label>' + selectEl('body', M.OPTS.body, c.body || '', 'Выберите тип кузова') + '</div>' +
      '<h2 class="sub">Необязательные поля</h2>' +
      fld({ k: 'alias', t: 'text', l: 'Псевдоним', ph: 'напр. Семейное авто' }, c.alias) +
      '<div class="fld"><label class="lbl">Пробег</label><div class="row2"><input class="inp" name="mileage" inputmode="numeric" data-num value="' + esc(c.mileage || 0) + '"><div class="units" id="units"><button type="button" data-u="km" class="' + (c.unit !== 'mi' ? 'on' : '') + '">km</button><button type="button" data-u="mi" class="' + (c.unit === 'mi' ? 'on' : '') + '">mi</button></div></div></div>' +
      fld({ k: 'plate', t: 'text', l: 'Номерной знак', ph: 'АН 2536 ПО' }, c.plate) +
      fld({ k: 'vin', t: 'text', l: 'VIN', ph: 'VIN' }, c.vin) +
      fld({ k: 'engine', t: 'money', l: 'Объём двигателя', ph: 'напр. 2.0' }, c.engine) +
      fld({ k: 'fuel', t: 'select', l: 'Тип топлива', opts: M.OPTS.fuel }, c.fuel) +
      fld({ k: 'gear', t: 'select', l: 'КПП', opts: M.OPTS.gear }, c.gear) +
      fld({ k: 'color', t: 'select', l: 'Цвет', opts: M.OPTS.color }, c.color) + '</form>';
    page({ title: id ? 'Редактировать авто' : 'Добавить авто', back: id ? '#/car/' + id : '#/garage', body: body, footer: '<button class="btn primary" id="save">Сохранить</button>' });
    var box = $('[data-att]'); box._f = (c.photos || []).map(function (u, i) { return { name: 'photo' + i, type: 'image/jpeg', url: u }; }); drawThumbs(box);
    var unitV = c.unit === 'mi' ? 'mi' : 'km';
    setH({
      click: function (e) {
        var b = e.target.closest('[data-u]');
        if (b) { unitV = b.dataset.u; $$('#units button').forEach(function (x) { x.classList.toggle('on', x === b); }); return; }
        if (!e.target.closest('#save')) return;
        var f = $('#cf'), g = function (n) { return f.querySelector('[name=' + n + ']').value.trim(); };
        var brand = g('brand') === 'Другая марка' ? g('brandOther') : g('brand'), model = g('model') === 'Другая модель' ? g('modelOther') : g('model');
        var miss = [['brand', brand], ['model', model], ['year', g('year')], ['body', g('body')]].filter(function (p) { return !p[1]; });
        ['brand', 'model', 'year', 'body'].forEach(function (k) { f.querySelector('[data-k=' + k + ']').classList.toggle('err', miss.some(function (p) { return p[0] === k; })); });
        if (miss.length) return toast('Заполните обязательные поля');
        var n = {
          id: c.id || S.uid(), brand: brand, model: model, year: +g('year'), body: g('body'), alias: g('alias'), unit: unitV,
          mileage: parseInt(g('mileage'), 10) || 0, plate: g('plate'), vin: g('vin'), engine: g('engine'), fuel: g('fuel'), gear: g('gear'), color: g('color'),
          photos: filesOf(box).map(function (x) { return x.url; }), archived: !!c.archived, createdAt: c.createdAt || Date.now()
        };
        if (!S.putCar(n)) return toast('Не удалось сохранить: закончилось место. Уменьшите количество фото');
        toast('Сохранено'); go('#/car/' + n.id);
      },
      change: function (e) { bmyChange(e.target, $('#cf')); }
    });
  }

  /* ---------- Создать запись ---------- */
  function recordPick(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    var sel = '';
    page({
      title: 'Создать запись', back: '#/car/' + id, dark: 1, right: '',
      body: '<div class="rhero' + (c.photos && c.photos[0] ? ' hasp' : '') + '">' + (c.photos && c.photos[0] ? '<img src="' + c.photos[0] + '" alt="">' : '<span class="hdeco">' + I('carfront', 150) + '</span>') +
        '<div class="rh-in">' + emblem(c) + '<div><b>' + esc(carName(c)) + '</b><small>' + c.year + ' · ' + fmtN(S.curMileage(id)) + ' ' + unit(c) + (c.plate ? ' · ' + esc(c.plate) : '') + '</small></div></div></div>' +
        '<h2 class="pk-t">Что записываем?</h2><div class="pk">' + M.CATS.map(function (k) { return '<button class="pkt" data-cat="' + k.id + '" style="--c:' + PKC[k.id] + '"><span class="pke">' + (EMO[k.id] || '📌') + '</span><span>' + k.label + '</span></button>'; }).join('') + '</div>',
      footer: '<button class="btn primary" id="go" disabled>Продолжить</button>'
    });
    setH({
      click: function (e) {
        var b = e.target.closest('[data-cat]');
        if (b) { sel = b.dataset.cat; $$('.pkt').forEach(function (x) { x.classList.toggle('picked', x === b); }); $('#go').disabled = false; return; }
        if (e.target.closest('#go') && sel) go('#/car/' + id + '/record/' + sel);
      }
    });
  }

  /* ---------- Форми записів ---------- */
  function workFields(cat) {
    var o = M.SCHEMAS[cat].opts, sel = { k: 'cat', t: 'select', l: 'Категория/Тип', req: 1, ph: 'Выберите категорию', opts: o };
    if (cat === 'diag') return [sel, { k: 'cost', t: 'money', l: 'Стоимость ₴' }, { k: 'result', t: 'textarea', l: 'Результат / Что диагностировали', ph: 'Опишите результаты диагностики...' }, { k: 'note', t: 'textarea', l: 'Примечания (необязательно)', ph: 'Дополнительные примечания...' }];
    return [sel, { k: 'desc', t: 'textarea', l: 'Описание', ph: 'Подробное описание работы...' }, { k: 'cost', t: 'money', l: 'Стоимость ₴' }];
  }
  function workCard(cat, n) {
    var fs = workFields(cat), diag = cat === 'diag', h = '<section class="card work" data-work>';
    h += diag ? '<div class="wtop"><h3 class="wname wtitle" data-t="Диагностика" style="flex:1">Диагностика ' + n + '</h3>' + (n > 1 ? '<button type="button" class="rmw" aria-label="Удалить">' + I('x', 18) + '</button>' : '') + '</div>'
      : '<div class="wtop"><input class="wname" name="name" placeholder="Название" autocomplete="off" style="flex:1">' + (n > 1 ? '<button type="button" class="rmw" aria-label="Удалить">' + I('x', 18) + '</button>' : '') + '</div>';
    h += fs.map(function (f) { return fld(f); }).join('');
    if (!diag) {
      h += '<div class="fld" data-k="remDate"><label class="lbl">Напоминание</label>' + dateInp('remDate', '', true) + '</div><div class="fld kmw" data-k="remKm">' + I('gauge', 26) + '<input class="inp" name="remKm" inputmode="numeric" data-num placeholder="Через N км" autocomplete="off"></div><p class="hint">Напоминание попадёт в \'Будущие события\'</p>';
    }
    h += attBox('Вложения ко всему событию');
    if (!diag) h += '<button type="button" class="exp">Расширенная информация ' + I('down', 22) + '</button><div class="expbody hidden">' + fld({ k: 'parts', t: 'text', l: 'Запчасти / материалы', ph: 'Название, артикул' }) + fld({ k: 'warranty', t: 'num', l: 'Гарантия (мес.)', ph: 'напр. 12' }) + '</div>';
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
        '<section class="card sumcard"><div class="fld" data-k="note"><label class="lbl">Заметка</label><textarea class="inp" name="note" placeholder="Заметка ко всему событию"></textarea></div>' +
        '<div class="fld" data-k="total"><label class="lbl">Общая сумма ₴</label><input class="inp" name="total" inputmode="decimal" data-dec placeholder="0.00" autocomplete="off"></div>' + attBox('Вложения ко всему событию', 'final') + '</section>' +
        '<button type="button" class="btn outline" id="addw" style="margin-top:22px">' + I('plus', 22) + ' ' + sch.addLabel + '</button>';
    } else if (cat === 'mileage') {
      body = '<div class="infobox blue">' + I('info', 30) + '<div><b>Запись пробега</b>Фиксируйте текущий пробег автомобиля для точного отслеживания истории обслуживания и планирования будущих событий.</div></div>' +
        '<div class="mcard"><small>Текущий пробег</small><b>' + (S.curMileage(id) ? fmtN(S.curMileage(id)) : '—') + ' КМ</b></div>' + sch.fields.map(function (f) { return fld(f); }).join('') + attBox('Вложения ко всему событию');
    } else {
      body = (sch.info ? '<div class="infobox">' + I('info', 28) + '<span>' + esc(sch.info) + '</span></div>' : '') + sch.fields.map(function (f) { return fld(f); }).join('') + (sch.att === false ? '' : attBox('Вложения ко всему событию'));
    }
    page({ title: k.label + ' (' + carName(c) + ')', back: '#/car/' + id, body: '<form id="f" data-cat="' + cat + '" novalidate>' + body + '</form>', footer: '<button class="btn primary" id="save" type="button">Сохранить</button>' });
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
        var nm = e.target.name, ff = $('#f');
        if (nm === 'fuelType') {
          var box = ff.querySelector('[data-k=fuelGrade]'), none = e.target.value === 'Электро';
          box.classList.toggle('hidden', none);
          $('#gsel').innerHTML = selectEl('fuelGrade', gradesFor(e.target.value), '', 'Выберите марку топлива');
          ff.querySelector('[name=gradeOther]').classList.add('hidden'); return;
        }
        if (nm === 'fuelGrade') { ff.querySelector('[name=gradeOther]').classList.toggle('hidden', e.target.value !== 'Другое'); return; }
        if (nm !== 'bought') return;
        var f = $('#f');
        if (e.target.checked) return tyreSheet(f);
        f.querySelector('[name=tyreName]').value = ''; f.querySelector('[name=tyreCost]').value = ''; f.querySelector('.tyinfo').classList.add('hidden');
      }
    });
  }
  function tyreSheet(f) {
    var nm = f.querySelector('[name=tyreName]'), co = f.querySelector('[name=tyreCost]'), cb = f.querySelector('[name=bought]'), info = f.querySelector('.tyinfo');
    layer.innerHTML = '<div class="ov"><div class="sheet"><div class="grab"></div><h4>Какие шины купили?</h4><div class="rr">' +
      fld({ k: 'ty_name', t: 'text', l: 'Шины (марка, размер)', req: 1, ph: 'напр. Michelin 205/55 R16' }, nm.value) +
      fld({ k: 'ty_cost', t: 'money', l: 'Сумма ₴', req: 1 }, co.value) +
      '</div><button class="btn primary" id="tys" style="margin-top:20px">Сохранить</button><button class="si cancel">Отмена</button></div></div>';
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
    if (!S.putEvent(ev)) return toast('Не удалось сохранить: закончилось место. Удалите часть вложений');
    rems.forEach(function (r) { r.id = S.uid(); r.carId = id; r.eventId = ev.id; S.putReminder(r); });
    toast('Сохранено'); go('#/car/' + id);
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
      if (!ok) return toast('Заполните обязательные поля');
      sch.head.forEach(function (f) { var v = rd(form, f); if (f.k === 'date') ev.date = v; else if (f.k === 'mileage') ev.mileage = v || 0; else ev.data[f.k] = v; });
      ev.data.works = works; ev.data.note = form.querySelector('[name=note]').value.trim();
      var tot = form.querySelector('[name=total]').value; ev.data.total = tot === '' ? '' : parseFloat(tot) || 0;
      ev.files = filesOf(form.querySelector('.final[data-att]'));
      works.forEach(function (w) {
        if (w.remDate || w.remKm) rems.push({ title: w.name || (k.label + (w.cat ? ': ' + w.cat : '')), date: w.remDate, km: w.remKm, base: ev.mileage || S.curMileage(id), manual: false });
      });
    } else {
      if (!validate(form, sch.fields)) return toast('Заполните обязательные поля');
      sch.fields.forEach(function (f) {
        var v = rd(form, f);
        if (f.k === 'date' && f.core) ev.date = v; else if (f.k === 'mileage' && f.core) ev.mileage = v || 0; else ev.data[f.k] = v;
      });
      var box = form.querySelector('[data-att]'); ev.files = filesOf(box);
      if (cat === 'mileage') {
        var cur = S.curMileage(id);
        if (ev.data.newMileage < cur) { form.querySelector('[data-k=newMileage]').classList.add('err'); return toast('Новый пробег не может быть меньше текущего (' + fmtN(cur) + ')'); }
        ev.mileage = ev.data.newMileage;
      }
      if (cat === 'fuel') {
        if (ev.data.fuelGrade === 'Другое') ev.data.fuelGrade = form.querySelector('[name=gradeOther]').value.trim();
        if (ev.data.fuelType === 'Электро') ev.data.fuelGrade = '';
      }
      if (cat === 'tire') {
        ev.data.tyreName = form.querySelector('[name=tyreName]').value;
        ev.data.tyreCost = ev.data.bought ? (parseFloat(form.querySelector('[name=tyreCost]').value) || 0) : 0;
        if (!ev.data.bought) ev.data.tyreName = '';
        if (ev.data.remDate || ev.data.remKm) rems.push({ title: 'Шиномонтаж: ' + (ev.data.tyType || 'напоминание'), date: ev.data.remDate || '', km: ev.data.remKm || 0, base: ev.mileage || S.curMileage(id), manual: false });
      }
      if (cat === 'insurance') {
        ev.date = ev.data.start || today();
        rems.push({ title: 'Продление страховки', date: ev.data.end, km: 0, base: 0, manual: false, auto: true });
      }
    }
    done(id, ev, rems);
  }

  /* ---------- Будущие события ---------- */
  function upCard(c) {
    var photo = c.photos && c.photos[0];
    return '<article class="car row upc"><div class="rimg">' + (photo ? '<img src="' + photo + '" alt="">' : I('carfront', 40)) + '</div><div class="rinfo"><h3>' + esc(carName(c)) + '</h3><p>' + esc([c.body, c.alias, c.plate].filter(Boolean).join(' · ')) + '</p><div class="tags"><span>' + I('calendar', 15) + c.year + '</span><span>' + I('gauge', 15) + fmtN(S.curMileage(c.id)) + ' ' + unit(c) + '</span></div></div></article>';
  }
  function upcoming() {
    var cars = S.cars(false);
    if (!cars.length) {
      page({ title: 'Будущие события', left: true, nav: 'upcoming', body: '<div class="noev">' + I('calcheck', 64) + '<span>Сначала добавьте авто</span></div><a class="btn primary" href="#/car/new">' + I('plus', 24) + ' Добавить авто</a>' });
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
    var soonHtml = soon.length ? '<h2 class="h2" style="margin-top:6px">Напоминание</h2>' + soon.map(function (x) {
      var r = x.r, dd = r.date ? days(r.date) : null, late = dd !== null && dd < 0, sub;
      if (r.date) sub = (dd < 0 ? 'просрочено на ' + (-dd) + ' дн.' : dd === 0 ? 'сегодня' : 'через ' + dd + ' дн.');
      else { var lf = (r.base || 0) + r.km - S.curMileage(x.c.id); sub = lf < 0 ? 'превышено на ' + fmtN(-lf) + ' ' + unit(x.c) : 'до ' + fmtN((r.base || 0) + r.km) + ' ' + unit(x.c); late = lf < 0; }
      var badge = r.date ? '<b>' + r.date.slice(8) + '</b><small>' + M.MONTHS[+r.date.slice(5, 7) - 1] + '</small>' : '<b>' + I('gauge', 22) + '</b><small>км</small>';
      return '<div class="rem dl"><span class="dbadge ' + (late ? 'late' : '') + '">' + badge + '</span><div class="evm"><b>' + esc(r.title) + '</b><small class="' + (late ? 'late' : '') + '">' + esc(carName(x.c) + ' · ' + (r.date ? fmtD(r.date) + ' · ' : '') + sub) + '</small></div></div>';
    }).join('') + '<h2 class="h2">Управление по авто</h2>' : '';
    var tabs = [['mine', 'Созданные мной'], ['date', 'Запланированные по дате'], ['km', 'Запланированные по пробегу']];
    page({
      title: 'Будущие события', left: true, nav: 'upcoming',
      body: soonHtml + '<div class="upcar">' + (cars.length > 1 ? '<button id="prev" aria-label="Предыдущее">' + I('left', 26) + '</button>' : '') + upCard(c) + (cars.length > 1 ? '<button id="next" aria-label="Следующее">' + I('right', 26) + '</button>' : '') + '</div>' +
        '<div class="pills">' + tabs.map(function (t) { return '<button data-t="' + t[0] + '" class="' + (ui.upTab === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div>' +
        (rs.length ? rs.map(function (r) {
          var sub = '', late = false;
          if (r.date) { var d = days(r.date); late = d < 0; sub = fmtD(r.date) + ' · ' + (d < 0 ? 'просрочено на ' + (-d) + ' дн.' : d === 0 ? 'сегодня' : 'через ' + d + ' дн.'); }
          if (r.km) { var left = (r.base || 0) + r.km - S.curMileage(c.id); sub += (sub ? ' · ' : '') + 'до ' + fmtN((r.base || 0) + r.km) + ' ' + unit(c) + (left < 0 ? ' (превышено)' : ' (ещё ' + fmtN(left) + ')'); late = late || left < 0; }
          return '<div class="rem"><span class="evi">' + I('calcheck', 22) + '</span><div class="evm"><b>' + esc(r.title) + '</b><small class="' + (late ? 'late' : '') + '">' + esc(sub) + '</small></div><button class="x" data-del="' + r.id + '" aria-label="Удалить">' + I('x', 22) + '</button></div>';
        }).join('') : '<div class="noev">' + I('calcheck', 64) + '<span>Запланированных событий пока нет</span></div>') +
        '<a class="btn primary" style="margin-top:26px;height:62px" href="#/car/' + c.id + '/plan">' + I('plus', 24) + ' Запланировать событие</a><a class="btn outline" href="#/car/' + c.id + '/record">Добавить выполненную работу</a>'
    });
    setH({
      click: function (e) {
        var t = e.target, b;
        if (t.closest('#prev')) { ui.upCar = cars[(i - 1 + cars.length) % cars.length].id; return upcoming(); }
        if (t.closest('#next')) { ui.upCar = cars[(i + 1) % cars.length].id; return upcoming(); }
        if ((b = t.closest('[data-t]'))) { ui.upTab = b.dataset.t; return upcoming(); }
        if ((b = t.closest('[data-del]'))) confirmDel('Удалить напоминание?', 'Да, удалить', function () { S.delReminder(b.dataset.del); upcoming(); });
      }
    });
  }
  function planForm(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    page({
      title: 'Запланировать событие', back: '#/upcoming',
      body: '<form id="f" novalidate>' + fld({ k: 'title', t: 'text', l: 'Название', req: 1, ph: 'напр. Замена масла' }) +
        '<div class="fld" data-k="date"><label class="lbl">Дата</label>' + dateInp('date', '', true) + '</div><div class="fld kmw" data-k="km" style="margin-top:14px">' + I('gauge', 26) + '<input class="inp" name="km" inputmode="numeric" data-num placeholder="Через N км" autocomplete="off"></div>' +
        '<p class="hint">Укажите дату, пробег или оба параметра. Напоминание попадёт в \'Будущие события\'</p>' + fld({ k: 'note', t: 'textarea', l: 'Примечание', ph: 'Примечание' }) + '</form>',
      footer: '<button class="btn primary" id="save">Сохранить</button>'
    });
    setH({
      click: function (e) {
        if (!e.target.closest('#save')) return;
        var f = $('#f'), title = f.querySelector('[name=title]').value.trim(), dtx = f.querySelector('[name=date]').value, date = parseD(dtx), km = parseInt(f.querySelector('[name=km]').value, 10) || 0;
        f.querySelector('[data-k=title]').classList.toggle('err', !title);
        f.querySelector('[data-k=date]').classList.toggle('err', !!dtx && !date);
        if (!title || (dtx && !date)) return toast('Проверьте заполненные поля');
        if (!date && !km) return toast('Укажите дату или пробег');
        S.putReminder({ id: S.uid(), carId: id, eventId: '', title: title, date: date, km: km, base: S.curMileage(id), note: f.querySelector('[name=note]').value.trim(), manual: true });
        ui.upCar = id; ui.upTab = 'mine'; toast('Событие запланировано'); go('#/upcoming');
      }
    });
  }

  /* ---------- Услуги / Аналитика ---------- */
  function analytics() {
    var CC = { repair: '#ef4444', to: '#3b82f6', diag: '#a855f7', insurance: '#f59e0b', fuel: '#22c55e', charge: '#14b8a6', wash: '#06b6d4', tire: '#f97316', fine: '#be123c', other: '#9ca3af' };
    var cars = S.cars(false);
    if (!cars.length) {
      page({ title: 'Аналитика', left: true, nav: 'analytics', body: '<div class="noev">' + I('chart', 64) + '<span>Сначала добавьте авто</span></div><a class="btn primary" href="#/car/new">' + I('plus', 24) + ' Добавить авто</a>' });
      return setH({});
    }
    if (!ui.anCar || (ui.anCar !== 'all' && !S.car(ui.anCar))) ui.anCar = 'all';
    ui.anPer = ui.anPer || 'year';
    var ids = ui.anCar === 'all' ? cars.map(function (c) { return c.id; }) : [ui.anCar], per = ui.anPer, t = today();
    if (per === 'custom') {
      if (!ui.anFrom) { var d1 = new Date(); d1.setDate(d1.getDate() - 30); ui.anFrom = d1.getFullYear() + '-' + pad(d1.getMonth() + 1) + '-' + pad(d1.getDate()); }
      if (!ui.anTo) ui.anTo = t;
      if (ui.anFrom > ui.anTo) { var sw = ui.anFrom; ui.anFrom = ui.anTo; ui.anTo = sw; }
    }
    var end = per === 'custom' ? ui.anTo : t;
    var all = S.db.events.filter(function (e) { return ids.indexOf(e.carId) >= 0 && e.date; });
    var back = { month: 30, quarter: 90, year: 365 }[per], from = '';
    if (per === 'custom') from = ui.anFrom;
    if (back) { var d0 = new Date(); d0.setDate(d0.getDate() - back); from = d0.getFullYear() + '-' + pad(d0.getMonth() + 1) + '-' + pad(d0.getDate()); }
    var inPer = function (e) { return e.date <= end && (!from || e.date >= from); };
    var evs = all.filter(function (e) { return e.category !== 'mileage' && inPer(e); });
    var total = 0, byCat = {};
    evs.forEach(function (e) { var c = S.costOf(e); total += c; var o = byCat[e.category] = byCat[e.category] || { sum: 0, n: 0 }; o.sum += c; o.n++; });
    var first = per === 'custom' ? ui.anFrom : evs.length ? evs.map(function (e) { return e.date; }).sort()[0] : t;
    var spanM = per === 'custom' ? Math.max(1, Math.round((new Date(end) - new Date(first)) / 2629800000)) : per === 'month' ? 1 : per === 'quarter' ? 3 : per === 'year' ? 12 : Math.max(1, Math.round((new Date(end) - new Date(first)) / 2629800000));
    var avg = total / spanM;
    var reads = all.filter(function (e) { return e.mileage > 0 && inPer(e); }).map(function (e) { return e.mileage; });
    var dist = reads.length > 1 ? Math.max.apply(null, reads) - Math.min.apply(null, reads) : 0;
    var curM = 0; ids.forEach(function (id) { curM = Math.max(curM, S.curMileage(id)); });
    var kpi = function (l, v, w) { return '<div class="stat ' + (w ? 'wide' : '') + '"><small>' + l + '</small><b>' + v + '</b></div>'; };
    var nm = { month: 'за месяц', quarter: 'за 3 месяца', year: 'за год', all: 'за всё время', custom: 'за период' }[per];
    var nM = (per === 'all' || per === 'custom') ? Math.min(24, Math.max(6, spanM + 1)) : per === 'year' ? 12 : 6, now = per === 'custom' ? new Date(end + 'T12:00:00') : new Date(), months = [];
    for (var i = nM - 1; i >= 0; i--) { var dm = new Date(now.getFullYear(), now.getMonth() - i, 1); months.push({ key: dm.getFullYear() + '-' + pad(dm.getMonth() + 1), label: M.MONTHS[dm.getMonth()], parts: {}, sum: 0 }); }
    all.forEach(function (e) { if (e.category === 'mileage') return; var m = months.find(function (x) { return e.date.indexOf(x.key) === 0; }); var c = S.costOf(e); if (m && c) { m.parts[e.category] = (m.parts[e.category] || 0) + c; m.sum += c; } });
    var max = Math.max.apply(null, months.map(function (m) { return m.sum; }).concat([1])), mag = Math.pow(10, Math.floor(Math.log10(max))), nice = Math.ceil(max / mag) * mag;
    var W = 340, H = 230, L = 52, B = 34, T = 14, ch = H - B - T, slot = (W - L - 6) / months.length, bw = Math.min(30, slot * 0.62), svg = '';
    for (var g = 0; g <= 3; g++) { var y = T + ch - ch * g / 3, v = nice * g / 3; svg += '<line x1="' + L + '" x2="' + (W - 6) + '" y1="' + y + '" y2="' + y + '" stroke="#ececf2"/><text x="' + (L - 8) + '" y="' + (y + 4) + '" text-anchor="end">' + (v >= 1000 ? Math.round(v / 100) / 10 + 'к' : Math.round(v)) + '</text>'; }
    months.forEach(function (m, j) {
      var x = L + slot * j + slot / 2, yb = T + ch;
      M.CATS.forEach(function (k) { var p = m.parts[k.id]; if (!p) return; var h = ch * p / nice; yb -= h; svg += '<rect x="' + (x - bw / 2) + '" y="' + yb + '" width="' + bw + '" height="' + Math.max(h, 1) + '" fill="' + (CC[k.id] || '#999') + '"/>'; });
      svg += '<text x="' + x + '" y="' + (H - 10) + '" text-anchor="middle">' + m.label + '</text>';
    });
    var cats = M.CATS.filter(function (k) { return byCat[k.id] && byCat[k.id].sum > 0; }).sort(function (a, b) { return byCat[b.id].sum - byCat[a.id].sum; });
    var legend = '<div class="lgd">' + cats.map(function (k) { return '<span><i style="background:' + CC[k.id] + '"></i>' + k.label + '</span>'; }).join('') + '</div>';
    var catHtml = cats.length ? cats.map(function (k) {
      var o = byCat[k.id], pc = total ? o.sum / total * 100 : 0;
      return '<div class="cbr"><span class="cbi" style="background:' + CC[k.id] + '1f;color:' + CC[k.id] + '">' + catI(k, 22) + '</span><div class="cbm"><div class="cbt"><b>' + k.label + '</b><span>' + money(o.sum) + '</span></div><div class="track"><i style="width:' + Math.max(pc, 2) + '%;background:' + CC[k.id] + '"></i></div><small>' + Math.round(pc) + '% · записей: ' + o.n + ' · в среднем ' + money(o.sum / o.n) + '</small></div></div>';
    }).join('') : '<p class="empty" style="padding:18px 0">Расходов за этот период нет</p>';
    var fe = evs.filter(function (e) { return e.category === 'fuel' && +e.data.liters > 0; }), fuelHtml = '';
    if (fe.length) {
      var lit = 0, fc = 0; fe.forEach(function (e) { lit += +e.data.liters; fc += S.costOf(e); });
      var srt = fe.filter(function (e) { return e.mileage > 0; }).sort(function (a, b) { return a.mileage - b.mileage; }), l100 = null, c100 = null;
      if (srt.length > 1) { var dd = srt[srt.length - 1].mileage - srt[0].mileage, used2 = 0, cu = 0; srt.slice(1).forEach(function (e) { used2 += +e.data.liters; cu += S.costOf(e); }); if (dd > 0) { l100 = used2 / dd * 100; c100 = cu / dd * 100; } }
      fuelHtml = '<section class="card" style="margin-top:22px"><h3 class="cardt">Топливо</h3><div class="stats">' + kpi('Заправок', fe.length) + kpi('Литров всего', lit.toFixed(1).replace(/\.0$/, '')) + kpi('Средняя цена литра', money(fc / lit)) + kpi('Потрачено на топливо', money(fc)) +
        (l100 ? kpi('Расход, л/100 км', l100.toFixed(1)) + kpi('Топливо на 100 км', money(c100)) : '<div class="stat wide"><small>Расход на 100 км</small><b style="font-size:16px;color:var(--mut)">нужно минимум 2 заправки с пробегом</b></div>') + '</div></section>';
    }
    var pts = []; if (ids.length === 1) { pts = all.filter(function (e) { return e.mileage > 0; }).map(function (e) { return { d: e.date, m: e.mileage }; }).sort(function (a, b) { return a.d.localeCompare(b.d); }); }
    var mileChart = '';
    if (pts.length > 1) {
      var mn = Math.min.apply(null, pts.map(function (p) { return p.m; })), mx = Math.max.apply(null, pts.map(function (p) { return p.m; })), t0 = new Date(pts[0].d).getTime(), t1 = new Date(pts[pts.length - 1].d).getTime() || 1, W2 = 340, H2 = 140, pl = 10, pr = 10, pt = 14, pb = 26;
      var px = function (p) { return pl + (t1 === t0 ? 0 : (new Date(p.d).getTime() - t0) / (t1 - t0)) * (W2 - pl - pr); }, py = function (p) { return pt + (H2 - pt - pb) * (1 - (mx === mn ? 0.5 : (p.m - mn) / (mx - mn))); };
      var pathD = pts.map(function (p, i) { return (i ? 'L' : 'M') + px(p).toFixed(1) + ' ' + py(p).toFixed(1); }).join(' ');
      mileChart = '<svg class="chart" viewBox="0 0 ' + W2 + ' ' + H2 + '"><path d="' + pathD + ' L' + px(pts[pts.length - 1]).toFixed(1) + ' ' + (H2 - pb) + ' L' + px(pts[0]).toFixed(1) + ' ' + (H2 - pb) + 'Z" fill="#0e9f6e" opacity=".12"/><path d="' + pathD + '" fill="none" stroke="#0e9f6e" stroke-width="3" stroke-linejoin="round"/>' + pts.map(function (p) { return '<circle cx="' + px(p).toFixed(1) + '" cy="' + py(p).toFixed(1) + '" r="3.5" fill="#0e9f6e"/>'; }).join('') +
        '<text x="' + pl + '" y="' + (H2 - 6) + '">' + fmtD(pts[0].d) + ' · ' + fmtN(pts[0].m) + '</text><text x="' + (W2 - pr) + '" y="' + (H2 - 6) + '" text-anchor="end">' + fmtD(pts[pts.length - 1].d) + ' · ' + fmtN(pts[pts.length - 1].m) + '</text></svg>';
    }
    var top = evs.filter(function (e) { return S.costOf(e) > 0; }).sort(function (a, b) { return S.costOf(b) - S.costOf(a); }).slice(0, 5);
    var carSel = '<div class="sel"><select class="inp" id="ancar"><option value="all"' + (ui.anCar === 'all' ? ' selected' : '') + '>Все авто</option>' + cars.map(function (c) { return '<option value="' + c.id + '"' + (ui.anCar === c.id ? ' selected' : '') + '>' + esc(carName(c) + (c.plate ? ' · ' + c.plate : '')) + '</option>'; }).join('') + '</select>' + I('down', 24) + '</div>';
    var pers = [['month', 'Месяц'], ['quarter', '3 мес.'], ['year', 'Год'], ['all', 'Всё'], ['custom', 'Свой']];
    page({
      title: 'Аналитика', left: true, nav: 'analytics',
      body: carSel + '<div class="seg" style="margin-top:14px">' + pers.map(function (p) { return '<button data-per="' + p[0] + '" class="' + (per === p[0] ? 'on' : '') + '">' + p[1] + '</button>'; }).join('') + '</div>' +
        (per === 'custom' ? '<div class="rng"><label>С<input type="date" id="anfrom" class="inp" value="' + ui.anFrom + '" max="' + t + '"></label><label>По<input type="date" id="anto" class="inp" value="' + ui.anTo + '" max="' + t + '"></label></div>' : '') +
        '<div class="stats" style="margin-top:18px">' + kpi('Потрачено ' + nm, money(total), 1) + kpi('В среднем в месяц', money(avg)) + kpi('Записей', evs.length) + kpi('Пробег ' + nm, dist ? fmtN(dist) + ' км' : '—') + kpi('Стоимость 1 км', dist > 0 && total ? money(total / dist) : '—') + '</div><p class="hint">Стоимость 1 км = все расходы за период ÷ пройденный за него путь (разница между наибольшим и наименьшим пробегом из ваших записей). Нужно минимум 2 записи с пробегом в периоде.</p>' +
        '<section class="card" style="margin-top:22px"><h3 class="cardt">Расходы по месяцам</h3><svg class="chart" viewBox="0 0 ' + W + ' ' + H + '">' + svg + '</svg>' + legend + '</section>' +
        '<section class="card" style="margin-top:22px"><h3 class="cardt">На что уходят деньги</h3>' + catHtml + '</section>' + fuelHtml +
        '<section class="card" style="margin-top:22px"><h3 class="cardt">Пробег</h3><div class="stats">' + kpi('Текущий пробег', fmtN(curM) + ' км', 1) + kpi('Пробег ' + nm, dist ? fmtN(dist) + ' км' : '—') + kpi('Км в месяц', dist ? fmtN(dist / spanM) : '—') + '</div>' + (mileChart ? '<div style="margin-top:14px">' + mileChart + '</div>' : (ids.length > 1 ? '<p class="hint">Выберите одно авто, чтобы увидеть график пробега</p>' : '<p class="hint">График появится, когда будет минимум 2 записи с пробегом</p>')) + '</section>' +
        (top.length ? '<h2 class="h2">Самые крупные расходы</h2>' + top.map(evRow).join('') : '')
    });
    setH({
      click: function (e) {
        var b = e.target.closest('[data-per]'); if (b) { ui.anPer = b.dataset.per; return analytics(); }
        b = e.target.closest('[data-ev]'); if (b) showEvent(S.db.events.find(function (x) { return x.id === b.dataset.ev; }));
      },
      change: function (e) { var id = e.target.id; if (id === 'ancar') { ui.anCar = e.target.value; analytics(); } else if ((id === 'anfrom' || id === 'anto') && e.target.value) { ui[id === 'anfrom' ? 'anFrom' : 'anTo'] = e.target.value; analytics(); } }
    });
  }

  function profile() {
    var cl = window.Cloud, user = cl && cl.user;
    var mine = ''; try { mine = localStorage.getItem('mycar.avatar') || ''; } catch (er) {}
    var pic = mine || (user && user.photoURL) || '';
    page({
      title: 'Профиль', left: true, nav: 'profile',
      body: '<button class="ava" id="ava" aria-label="Сменить фото профиля">' + (pic ? '<img src="' + esc(pic) + '" alt="" referrerpolicy="no-referrer">' : I('user', 46)) + '<span class="avac">' + I('edit', 16) + '</span></button><input type="file" id="avaf" hidden accept="image/*"><div class="pc"><b>' + esc(user ? (user.displayName || user.email || 'Пользователь') : 'Гость') + '</b><small>' + (user ? esc(user.email || '') : (cl && cl.ready ? 'Войдите, чтобы хранить данные в облаке' : 'Данные хранятся на этом устройстве')) + '</small></div>' +
        (cl && cl.ready ? (user ? '<button class="svc" id="out"><span class="evi">' + I('x', 22) + '</span><div><b>Выйти</b><small>Данные останутся в облаке</small></div></button>' : '<button class="btn primary" id="in" style="margin:18px 0 8px">Войти через Google</button>') : '') +
        setupHtml() + '<button class="svc" id="rep" style="margin-top:12px"><span class="evi">' + I('chart', 22) + '</span><div><b>Отчёт по авто</b><small>Скачать в PDF или Excel</small></div></button>' +
        '<h2 class="h2" style="font-size:21px;margin:24px 0 8px">Подключения</h2><div class="card" id="stbox">' + statusHtml() + '</div>' +
        '<button class="svc' + (hasNew() ? ' hot' : '') + '" data-upd><span class="evi">' + I('refresh', 22) + '</span><div><b>Обновить до текущей версии</b><small id="updsub">' + (hasNew() ? 'Доступна новая версия v' + esc(ui.latest) : 'У вас последняя версия v' + VERSION + ' (нажмите, чтобы перезагрузить)') + '</small></div></button>' +
        '<button class="svc" id="exp"><span class="evi">' + I('download', 22) + '</span><div><b>Резервная копия</b><small>Сохранить данные в файл JSON</small></div></button>' +
        '<button class="svc" id="imp"><span class="evi">' + I('upload', 22) + '</span><div><b>Восстановить из копии</b><small>Заменит текущие данные</small></div></button><input type="file" id="impf" hidden accept="application/json,.json">' +
        '<p class="hint" style="text-align:center;margin-top:26px">My CAR v' + VERSION + ' · ' + S.db.cars.length + ' авто · ' + S.db.events.length + ' записей</p>'
    });
    setH({
      click: function (e) {
        var t = e.target;
        var tb = t.closest('button[data-theme]'); if (tb) { setPref('theme', tb.dataset.theme); applyTheme(); return profile(); }
        var lb = t.closest('[data-lang]'); if (lb) { setPref('lang', lb.dataset.lang); if (window.I18N) I18N.set(lb.dataset.lang); return profile(); }
        if (t.closest('#rep')) return reportSheet();
        if (t.closest('#ava')) return $('#avaf').click();
        if (t.closest('#in')) return cl.signIn().catch(function (er) { toast('Не удалось войти: ' + (er.code || er.message)); });
        if (t.closest('#out')) { try { localStorage.removeItem('mycar.guest'); localStorage.removeItem('mycar.avatar'); } catch (er) {} return cl.signOut(); }
        if (t.closest('#imp')) return $('#impf').click();
        if (t.closest('#exp')) {
          var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([S.exportJSON()], { type: 'application/json' })); a.download = 'my-car-backup-' + today() + '.json'; a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
        }
      },
      change: function (e) {
        if (e.target.id === 'avaf' && e.target.files[0]) {
          return shrinkSquare(e.target.files[0], 256, 0.85).then(function (u) { try { localStorage.setItem('mycar.avatar', u); } catch (er) { return toast('Не удалось сохранить фото'); } toast('Фото профиля обновлено'); profile(); }, function (er) { toast(er.message); });
        }
        if (e.target.id !== 'impf' || !e.target.files[0]) return;
        var r = new FileReader();
        r.onload = function () {
          confirmDel('Заменить текущие данные копией из файла?', 'Да, восстановить', function () {
            try { S.importJSON(r.result); toast('Данные восстановлены'); go('#/garage'); render(); } catch (er) { toast('Файл не похож на резервную копию'); }
          });
        };
        r.readAsText(e.target.files[0]);
      }
    });
  }


  /* ---------- вхід, реєстрація, перші запитання про авто ---------- */
  var isGuest = function () { try { return localStorage.getItem('mycar.guest') === '1'; } catch (e) { return false; } };
  var hint = function () { try { return localStorage.getItem('mycar.hint') === '1'; } catch (e) { return false; } };
  function guard(h) {
    var C = window.Cloud || {};
    var warm = hint() && S.db.cars.length; /* уже входили на этом устройстве — открываем сразу из локальных данных */
    if (C.pending && !C.authChecked && !warm) return 'splash';
    if (!C.user && !isGuest() && !(warm && !C.authChecked)) return h === '#/login' ? '' : '#/login';
    if (C.active && !C.synced && !warm) return 'splash';
    if (h === '#/login') return '#/garage';
    if (h === '#/garage' && !S.db.cars.length && !ui.skipOb) return '#/welcome';
    if (h === '#/welcome' && S.db.cars.length && !ui.obBusy) return '#/garage';
    return '';
  }
  function splash() { app.innerHTML = '<div class="lg"><img src="logo.png" alt="My CAR"><p class="wsub">Загрузка…</p></div>'; app.onclick = app.oninput = app.onchange = null; }
  var GLOGO = '<svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
  function login() {
    var C = window.Cloud || {};
    app.innerHTML = '<div class="lg"><img src="logo.png" alt="My CAR" class="biglogo"><p class="wsub">Учёт обслуживания, ремонтов, топлива, страховок и штрафов вашего авто — в одном месте</p>' +
      '<button class="gbtn" id="gin">' + GLOGO + '<span>Войти через Gmail</span></button>' +
      '<p class="hint" style="max-width:320px;text-align:center">Регистрация происходит автоматически при первом входе с вашим аккаунтом Google</p>' +
      (C.ready ? '' : '<button class="link" id="guest" style="font-size:17px;margin-top:6px">Продолжить без входа</button>') + '<p class="hint">Версия ' + VERSION + '</p></div>';
    setH({
      click: function (e) {
        if (e.target.closest('#guest')) { try { localStorage.setItem('mycar.guest', '1'); } catch (er) {} return render(); }
        if (!e.target.closest('#gin')) return;
        if (!C.ready) return toast('Вход через Google станет доступен после подключения Firebase. Пока можно работать без входа');
        C.signIn().catch(function (er) {
          if (er.code === 'auth/popup-closed-by-user' || er.code === 'auth/cancelled-popup-request') return;
          toast(er.code === 'auth/unauthorized-domain' ? 'Домен сайта не добавлен в Firebase → Authentication → Authorized domains' : 'Не удалось войти: ' + (er.code || er.message));
        });
      }
    });
  }
  function welcome() {
    var ob = ui.ob = ui.ob || { step: 1, d: {} }, d = ob.d, st = ob.step, b = '';
    var Q = ['Какое у вас авто?', 'Кузов и топливо', 'Пробег и другие данные'], SUB = ['Выберите марку, модель и год выпуска', 'Эти данные помогут точнее вести учёт расходов', 'Все поля необязательны — их можно заполнить позже'];
    if (st === 1) b = '<div class="rr">' + bmy(d) + '</div>';
    else if (st === 2) b = '<div class="rr"><div class="fld" data-k="body"><label class="lbl">Тип кузова <i class="req">*</i></label>' + selectEl('body', M.OPTS.body, d.body || '', 'Выберите тип кузова') + '</div></div>' +
      fld({ k: 'fuel', t: 'select', l: 'Тип топлива', opts: M.OPTS.fuel }, d.fuel) + fld({ k: 'gear', t: 'select', l: 'КПП', opts: M.OPTS.gear }, d.gear) + fld({ k: 'engine', t: 'money', l: 'Объём двигателя', ph: 'напр. 2.0' }, d.engine);
    else b = '<div class="fld"><label class="lbl">Пробег</label><div class="row2"><input class="inp" name="mileage" inputmode="numeric" data-num value="' + esc(d.mileage || '') + '" placeholder="0"><div class="units" id="units"><button type="button" data-u="km" class="' + (d.unit !== 'mi' ? 'on' : '') + '">km</button><button type="button" data-u="mi" class="' + (d.unit === 'mi' ? 'on' : '') + '">mi</button></div></div></div>' +
      fld({ k: 'plate', t: 'text', l: 'Номерной знак', ph: 'АН 2536 ПО' }, d.plate) + fld({ k: 'vin', t: 'text', l: 'VIN', ph: 'VIN' }, d.vin) + fld({ k: 'alias', t: 'text', l: 'Псевдоним', ph: 'напр. Семейное авто' }, d.alias) + fld({ k: 'color', t: 'select', l: 'Цвет', opts: M.OPTS.color }, d.color);
    page({
      title: 'Шаг ' + st + ' из 3', back: '', right: '',
      body: '<div class="steps">' + [1, 2, 3].map(function (n) { return '<i class="' + (n <= st ? 'on' : '') + '"></i>'; }).join('') + '</div><h2 class="wq">' + Q[st - 1] + '</h2><p class="wsub" style="text-align:left">' + SUB[st - 1] + '</p><form id="ob" novalidate>' + b + '</form>' +
        (st === 1 ? '<p style="text-align:center;margin-top:26px"><button class="link" id="later" style="font-size:18px">Добавлю позже</button></p>' : ''),
      footer: '<button class="btn primary" id="next">' + (st === 3 ? 'Готово' : 'Далее') + '</button>' + (st > 1 ? '<button class="btn outline" id="back">Назад</button>' : '')
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
        if (!keep()) return toast('Заполните обязательные поля');
        if (st < 3) { ob.step++; return welcome(); }
        var car = { id: S.uid(), brand: d.brand, model: d.model, year: +d.year, body: d.body, alias: d.alias || '', unit: d.unit || 'km', mileage: d.mileage || 0, plate: d.plate || '', vin: d.vin || '', engine: d.engine || '', fuel: d.fuel || '', gear: d.gear || '', color: d.color || '', photos: [], archived: false, createdAt: Date.now() };
        ui.obBusy = true;
        if (!S.putCar(car)) { ui.obBusy = false; return toast('Не удалось сохранить авто'); }
        ui.ob = null; ui.obBusy = false; toast('Авто добавлено'); go('#/garage');
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
    [/^#\/car\/([^/]+)$/, about], [/^#\/upcoming$/, upcoming], [/^#\/services$/, function () { go('#/analytics'); }],
    [/^#\/analytics$/, analytics], [/^#\/profile$/, profile]
  ];
  function reportSheet(id) { if (window.MCREP) MCREP.open(id); else toast('Отчёт загружается, попробуйте ещё раз'); }
  window.MCAPP = { S: S, M: M, money: money, fmtD: fmtD, fmtN: fmtN, today: today, days: days, esc: esc, carName: carName, unit: unit, EMO: EMO, CCOL: CCOL, evTitle: evTitle, eventLines: eventLines, allFiles: allFiles, toast: toast, closeLayer: closeLayer, layer: layer, pad: pad, VERSION: VERSION, spendIn: spendIn, fuelAvg: fuelAvg };
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
      app.innerHTML = '<div class="body"><p class="empty">Произошла ошибка.<br><a class="link" href="#/garage">В гараж</a></p></div>';
    }
  }
  window.addEventListener('hashchange', render);
  window.addEventListener('mycar:data', function () { if (!$('#f') && !$('#cf') && !$('#ob') && !layer.firstChild) render(); });
  window.addEventListener('mycar:cloud-error', function () { ui.cloudErr = true; refreshStatus(); });
  window.addEventListener('mycar:data', function () { var C = window.Cloud || {}; if (C.synced) { var d = new Date(); ui.lastSync = pad(d.getHours()) + ':' + pad(d.getMinutes()); } refreshStatus(); });
  window.addEventListener('online', function () { ui.cloudErr = false; refreshStatus(); checkVersion(); });
  window.addEventListener('offline', refreshStatus);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) checkVersion(); });
  window.addEventListener('mycar:cloud-error', function () { toast('Не удалось синхронизировать с облаком. Данные сохранены на устройстве'); });
  window.MyCarApp = { render: render, today: today };
  if (/[?&]u=/.test(location.search)) { try { window.history.replaceState(null, '', location.pathname + location.hash); } catch (e) {} }
  render();
  checkVersion();
  try { if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js?v=' + VERSION).catch(function () {}); } catch (e) {}
})();
