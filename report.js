/* My CAR — отчёт по авто: PDF и Excel (фото, графики, бублики, траты). Библиотеки подгружаются только при создании отчёта. */
(function () {
  var A = window.MCAPP;
  var T = function (s) { return window.I18N ? window.I18N.t(String(s)) : String(s); };
  var CDN = {
    h2c: 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
    pdf: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    xls: 'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js'
  };
  var loaded = {};
  function load(url) {
    return loaded[url] || (loaded[url] = new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = (window.MCLIBS && window.MCLIBS[url]) || url; s.onload = res; s.onerror = function () { loaded[url] = null; rej(new Error('lib')); }; document.head.appendChild(s);
    }));
  }
  var esc = function (s) { return A.esc(s); };
  var EM = '#0e9f6e';
  function monthLabel(key) { return T(A.M.MONTHS[+key.slice(5, 7) - 1]); }
  function pad(n) { return A.pad(n); }
  function ds(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  /* ---------- данные отчёта ---------- */
  function build(st) {
    var S = A.S, M = A.M, ids = st.car === 'all' ? S.cars(false).map(function (c) { return c.id; }) : [st.car], t = A.today();
    var from = '', to = t;
    if (st.per === 'month') { var d1 = new Date(); d1.setDate(d1.getDate() - 30); from = ds(d1); }
    else if (st.per === 'year') { var d2 = new Date(); d2.setDate(d2.getDate() - 365); from = ds(d2); }
    else if (st.per === 'custom') { from = st.from || ''; to = st.to || t; if (from && to && from > to) { var x = from; from = to; to = x; } }
    var cars = ids.map(function (id) { return S.car(id); }).filter(Boolean);
    var all = S.db.events.filter(function (e) { return ids.indexOf(e.carId) >= 0 && e.date && e.date <= to && (!from || e.date >= from); }).sort(function (a, b) { return b.date.localeCompare(a.date); });
    var evs = all.filter(function (e) { return e.category !== 'mileage'; });
    var total = 0, byCat = {}, byCar = {};
    evs.forEach(function (e) { var c = S.costOf(e); total += c; var o = byCat[e.category] = byCat[e.category] || { sum: 0, n: 0 }; o.sum += c; o.n++; var q = byCar[e.carId] = byCar[e.carId] || { sum: 0, n: 0 }; q.sum += c; q.n++; });
    var first = from || (evs.length ? evs[evs.length - 1].date : t);
    var spanM = Math.max(1, Math.round((new Date(to) - new Date(first)) / 2629800000));
    var reads = all.filter(function (e) { return e.mileage > 0; }).map(function (e) { return +e.mileage; });
    var dist = reads.length > 1 ? Math.max.apply(null, reads) - Math.min.apply(null, reads) : 0;
    var curM = 0; ids.forEach(function (id) { curM = Math.max(curM, S.curMileage(id)); });
    // месяцы
    var end = new Date(to + 'T12:00:00'), nM = Math.min(24, Math.max(6, spanM + 1)), months = [];
    if (st.per === 'month') nM = 3;
    for (var i = nM - 1; i >= 0; i--) { var dm = new Date(end.getFullYear(), end.getMonth() - i, 1); months.push({ key: dm.getFullYear() + '-' + pad(dm.getMonth() + 1), parts: {}, sum: 0 }); }
    evs.forEach(function (e) { var c = S.costOf(e), m = months.find(function (q) { return e.date.indexOf(q.key) === 0; }); if (m && c) { m.parts[e.category] = (m.parts[e.category] || 0) + c; m.sum += c; } });
    // топливо
    var fe = evs.filter(function (e) { return e.category === 'fuel' && +(e.data || {}).liters > 0; }), fuel = null;
    if (fe.length) {
      var lit = 0, fc = 0; fe.forEach(function (e) { lit += +e.data.liters; fc += S.costOf(e); });
      var srt = fe.filter(function (e) { return e.mileage > 0; }).sort(function (a, b) { return a.mileage - b.mileage; }), l100 = null, c100 = null;
      if (srt.length > 1) { var dd = srt[srt.length - 1].mileage - srt[0].mileage, u2 = 0, cu = 0; srt.slice(1).forEach(function (e) { u2 += +e.data.liters; cu += S.costOf(e); }); if (dd > 0) { l100 = u2 / dd * 100; c100 = cu / dd * 100; } }
      fuel = { n: fe.length, liters: lit, cost: fc, price: fc / lit, l100: l100, c100: c100 };
    }
    var pts = [];
    if (ids.length === 1) pts = all.filter(function (e) { return e.mileage > 0; }).map(function (e) { return { d: e.date, m: +e.mileage }; }).sort(function (a, b) { return a.d.localeCompare(b.d); });
    var top = evs.filter(function (e) { return S.costOf(e) > 0; }).sort(function (a, b) { return S.costOf(b) - S.costOf(a); }).slice(0, 10);
    // фото
    var photos = [];
    all.forEach(function (e) { A.allFiles(e).forEach(function (f) { if (f && f.url && (f.type || '').indexOf('image') === 0) photos.push({ url: f.url, cap: A.fmtD(e.date) + ' · ' + A.evTitle(e) }); }); });
    return { ids: ids, cars: cars, from: from, to: to, per: st.per, all: all, evs: evs, total: total, byCat: byCat, byCar: byCar, spanM: spanM, avg: total / spanM, dist: dist, curM: curM, perKm: dist > 0 && total ? total / dist : null,
      months: months, fuel: fuel, pts: pts, top: top, photos: photos.slice(0, 24) };
  }
  function perLabel(R) {
    if (R.per === 'all') return T('за всё время');
    return (R.from ? A.fmtD(R.from) : '…') + ' — ' + A.fmtD(R.to);
  }
  function catList(R) {
    return A.M.CATS.filter(function (k) { return R.byCat[k.id] && R.byCat[k.id].sum > 0; }).sort(function (a, b) { return R.byCat[b.id].sum - R.byCat[a.id].sum; })
      .map(function (k) { var o = R.byCat[k.id]; return { id: k.id, label: T(k.label), emoji: A.EMO[k.id] || '📌', sum: o.sum, n: o.n, pct: R.total ? o.sum / R.total * 100 : 0, color: A.CCOL[k.id] || '#9ca3af' }; });
  }

  /* ---------- графики (SVG → PNG) ---------- */
  var FF = 'Inter,Segoe UI,Roboto,Arial,sans-serif';
  function money0(n) { return A.fmtN(n) + ' ₴'; }
  function svgBars(R, W, H) {
    var months = R.months, max = Math.max.apply(null, months.map(function (m) { return m.sum; }).concat([1])), mag = Math.pow(10, Math.floor(Math.log10(max / 4))), stp = [1, 2, 2.5, 5, 10].map(function (k) { return k * mag; }).find(function (v) { return v * 4 >= max; }), nice = stp * 4;
    var L = 64, B = 40, Tp = 16, ch = H - B - Tp, slot = (W - L - 8) / months.length, bw = Math.min(46, slot * 0.62), g = '';
    for (var i = 0; i <= 4; i++) { var y = Tp + ch - ch * i / 4, v = nice * i / 4; g += '<line x1="' + L + '" x2="' + (W - 8) + '" y1="' + y + '" y2="' + y + '" stroke="#e6efeb"/><text x="' + (L - 10) + '" y="' + (y + 5) + '" text-anchor="end" font-size="14" fill="#6b7f76">' + (v >= 1000 ? Math.round(v / 100) / 10 + 'k' : Math.round(v)) + '</text>'; }
    months.forEach(function (m, j) {
      var x = L + slot * j + slot / 2, yb = Tp + ch;
      A.M.CATS.forEach(function (k) { var p = m.parts[k.id]; if (!p) return; var h = ch * p / nice; yb -= h; g += '<rect x="' + (x - bw / 2) + '" y="' + yb + '" width="' + bw + '" height="' + Math.max(h, 1) + '" rx="3" fill="' + (A.CCOL[k.id] || '#999') + '"/>'; });
      g += '<text x="' + x + '" y="' + (H - 14) + '" text-anchor="middle" font-size="15" fill="#374151">' + monthLabel(m.key) + '</text>';
    });
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" font-family="' + FF + '"><rect width="' + W + '" height="' + H + '" fill="#fff"/>' + g + '</svg>';
  }
  function svgDonut(R, W, H) {
    var cats = catList(R), cx = 170, cy = H / 2, r = 108, sw = 52, g = '', a0 = -Math.PI / 2, C = 2 * Math.PI * r;
    if (!cats.length) { g = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#e6efeb" stroke-width="' + sw + '"/>'; }
    var off = 0;
    cats.forEach(function (c) { var len = C * c.sum / R.total; g += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + c.color + '" stroke-width="' + sw + '" stroke-dasharray="' + len + ' ' + (C - len) + '" stroke-dashoffset="' + (-off) + '" transform="rotate(-90 ' + cx + ' ' + cy + ')"/>'; off += len; });
    g += '<text x="' + cx + '" y="' + (cy - 2) + '" text-anchor="middle" font-size="30" font-weight="800" fill="#0f1f19">' + money0(R.total) + '</text><text x="' + cx + '" y="' + (cy + 24) + '" text-anchor="middle" font-size="15" fill="#6b7f76">' + T('Итого') + '</text>';
    var ly = Math.max(26, cy - cats.length * 17);
    cats.forEach(function (c, i) {
      var y = ly + i * 34;
      g += '<rect x="330" y="' + (y - 14) + '" width="16" height="16" rx="4" fill="' + c.color + '"/><text x="356" y="' + y + '" font-size="17" fill="#0f1f19">' + c.emoji + ' ' + esc(c.label) + '</text><text x="' + (W - 12) + '" y="' + y + '" text-anchor="end" font-size="17" font-weight="700" fill="#0f1f19">' + Math.round(c.pct) + '% · ' + money0(c.sum) + '</text>';
    });
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" font-family="' + FF + '"><rect width="' + W + '" height="' + H + '" fill="#fff"/>' + g + '</svg>';
  }
  function svgLine(R, W, H) {
    var pts = R.pts; if (pts.length < 2) return null;
    var mn = Math.min.apply(null, pts.map(function (p) { return p.m; })), mx = Math.max.apply(null, pts.map(function (p) { return p.m; })), t0 = new Date(pts[0].d).getTime(), t1 = new Date(pts[pts.length - 1].d).getTime() || 1, pl = 16, pr = 16, pt = 18, pb = 34;
    var px = function (p) { return pl + (t1 === t0 ? 0 : (new Date(p.d).getTime() - t0) / (t1 - t0)) * (W - pl - pr); }, py = function (p) { return pt + (H - pt - pb) * (1 - (mx === mn ? 0.5 : (p.m - mn) / (mx - mn))); };
    var d = pts.map(function (p, i) { return (i ? 'L' : 'M') + px(p).toFixed(1) + ' ' + py(p).toFixed(1); }).join(' ');
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" font-family="' + FF + '"><rect width="' + W + '" height="' + H + '" fill="#fff"/><path d="' + d + ' L' + px(pts[pts.length - 1]).toFixed(1) + ' ' + (H - pb) + ' L' + px(pts[0]).toFixed(1) + ' ' + (H - pb) + 'Z" fill="' + EM + '" opacity=".14"/><path d="' + d + '" fill="none" stroke="' + EM + '" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>' +
      pts.map(function (p) { return '<circle cx="' + px(p).toFixed(1) + '" cy="' + py(p).toFixed(1) + '" r="4.5" fill="' + EM + '"/>'; }).join('') +
      '<text x="' + pl + '" y="' + (H - 10) + '" font-size="14" fill="#374151">' + A.fmtD(pts[0].d) + ' · ' + A.fmtN(pts[0].m) + '</text><text x="' + (W - pr) + '" y="' + (H - 10) + '" text-anchor="end" font-size="14" fill="#374151">' + A.fmtD(pts[pts.length - 1].d) + ' · ' + A.fmtN(pts[pts.length - 1].m) + '</text></svg>';
  }
  function raster(svg, scale) {
    return new Promise(function (res, rej) {
      if (!svg) return res(null);
      var w = +/width="(\d+)"/.exec(svg)[1], h = +/height="(\d+)"/.exec(svg)[1], img = new Image();
      img.onload = function () { var c = document.createElement('canvas'); c.width = w * scale; c.height = h * scale; var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(img, 0, 0, c.width, c.height); res({ url: c.toDataURL('image/png'), w: w, h: h }); };
      img.onerror = function () { rej(new Error('svg')); };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
  }
  function shrink(url, max) {
    return new Promise(function (res) {
      var img = new Image();
      img.onload = function () { var k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); res({ url: c.toDataURL('image/jpeg', 0.85), w: c.width, h: c.height }); };
      img.onerror = function () { res(null); }; img.src = url;
    });
  }
  function charts(R) {
    return Promise.all([raster(svgBars(R, 720, 320), 2), raster(svgDonut(R, 720, 330), 2), raster(svgLine(R, 720, 240), 2)]).then(function (r) { return { bars: r[0], donut: r[1], line: r[2] }; });
  }
  function photosData(R) {
    var list = []; R.cars.forEach(function (c) { if (c.photos && c.photos[0]) list.push({ url: c.photos[0], cap: A.carName(c) }); });
    return Promise.all(list.map(function (p) { return shrink(p.url, 1000).then(function (r) { return r && { url: r.url, w: r.w, h: r.h, cap: p.cap }; }); })).then(function (carP) {
      return Promise.all(R.photos.map(function (p) { return shrink(p.url, 900).then(function (r) { return r && { url: r.url, w: r.w, h: r.h, cap: p.cap }; }); })).then(function (evP) {
        return { car: carP.filter(Boolean), ev: evP.filter(Boolean) };
      });
    });
  }
  function rows(R) {
    var S = A.S;
    return R.all.map(function (e) {
      var c = A.S.car(e.carId), k = A.M.cat(e.category), det = A.eventLines(e).filter(function (l) { return l[0] !== 'Дата' && l[0] !== 'Пробег' && l[0] !== 'Общая сумма' && l[1] !== null; }).map(function (l) { return T(l[0]) + ': ' + T(l[1]); }).join('; ');
      return { date: e.date, car: c ? A.carName(c) : '', emoji: A.EMO[e.category] || '📌', cat: T(k.label), title: T(A.evTitle(e)), km: e.mileage > 0 ? +e.mileage : null, cost: S.costOf(e), det: det };
    });
  }

  /* ---------- PDF ---------- */
  var CSS = '#rpt{position:fixed;left:-10000px;top:0;width:794px;background:#fff;color:#0f1f19;font-family:' + FF + ';font-size:15px}' +
    '#rpt *{box-sizing:border-box;margin:0}#rpt .rs{width:794px;padding:0 40px;background:#fff}' +
    '#rpt .hd{position:static;height:auto;top:auto;background:linear-gradient(135deg,#0b8a5f,#10b981);color:#fff;padding:30px 40px 26px;display:flex;gap:22px;align-items:center}' +
    '#rpt .hd img.rlg{height:92px;width:auto;border-radius:22px;box-shadow:0 6px 20px rgba(0,0,0,.25)}#rpt .hd h1{font-size:34px;font-weight:800;line-height:1.1}#rpt .hd p{opacity:.92;margin-top:6px;font-size:16px}' +
    '#rpt .h2{font-size:21px;font-weight:800;margin:22px 0 12px;color:#0b8a5f;display:flex;align-items:center;gap:8px}' +
    '#rpt .kp{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:20px}#rpt .kp div{background:#eef7f3;border-radius:16px;padding:14px 16px}#rpt .kp small{display:block;color:#6b7f76;font-size:12px}#rpt .kp b{display:block;font-size:22px;font-weight:800;color:#0b8a5f;margin-top:3px}' +
    '#rpt .cp{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:16px}#rpt .cp img{width:100%;height:170px;object-fit:cover;border-radius:16px}#rpt .cp.one{grid-template-columns:1fr}#rpt .cp.one img{height:330px}' +
    '#rpt .ig{display:grid;grid-template-columns:repeat(3,1fr);gap:8px 18px;margin-top:16px}#rpt .ig div{border-bottom:1px solid #e3eee9;padding:6px 0}#rpt .ig small{color:#6b7f76;font-size:12px;display:block}#rpt .ig b{font-size:15px}' +
    '#rpt .ch{border:1px solid #e3eee9;border-radius:18px;padding:12px;background:#fff}#rpt .ch img{width:100%;display:block}' +
    '#rpt table{width:100%;border-collapse:collapse;font-size:12.5px}#rpt th{background:#0b8a5f;color:#fff;text-align:left;padding:8px 8px;font-weight:700}#rpt td{padding:7px 8px;border-bottom:1px solid #e3eee9;vertical-align:top}#rpt tr:nth-child(even) td{background:#f3faf7}#rpt td.n,#rpt th.n{text-align:right;white-space:nowrap}' +
    '#rpt .ph{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}#rpt .ph figure{border:1px solid #e3eee9;border-radius:14px;overflow:hidden}#rpt .ph img{width:100%;height:165px;object-fit:cover;display:block}#rpt .ph figcaption{font-size:11.5px;padding:6px 8px;color:#374151}' +
    '#rpt .tt{display:flex;justify-content:space-between;align-items:center;background:#0b8a5f;color:#fff;border-radius:16px;padding:14px 18px;margin-top:12px;font-size:17px;font-weight:700}';
  function kp(l, v) { return '<div><small>' + esc(T(l)) + '</small><b>' + v + '</b></div>'; }
  function pdfBlocks(R, C, P, rowsData) {
    var B = [], c0 = R.cars[0], multi = R.cars.length > 1;
    var title = multi ? T('Все автомобили') : A.carName(c0) + (c0.plate ? ' · ' + c0.plate : '');
    B.push('<div class="hd"><img class="rlg" src="logo.png" alt=""><div><h1>' + esc(title) + '</h1><p>' + esc(T('Отчёт по автомобилю')) + ' · ' + esc(perLabel(R)) + '</p><p>' + esc(T('Создан')) + ' ' + A.fmtD(A.today()) + '</p></div></div>');
    var kpis = '<div class="kp">' + kp('Потрачено', money0(R.total)) + kp('В среднем в месяц', money0(R.avg)) + kp('Записей', R.evs.length) + kp('Стоимость 1 км', R.perKm ? A.money(R.perKm) : '—') + '</div>';
    var info = '';
    if (!multi) {
      var it = [['Год', c0.year], ['Кузов', c0.body], ['Топливо', c0.fuel], ['КПП', c0.gear], ['Двигатель', c0.engine ? c0.engine + ' л' : ''], ['Цвет', c0.color], ['Текущий пробег', A.fmtN(R.curM) + ' км'], ['Пробег за период', R.dist ? A.fmtN(R.dist) + ' км' : '—'], ['Номерной знак', c0.plate]];
      info = '<div class="ig">' + it.filter(function (x) { return x[1]; }).map(function (x) { return '<div><small>' + esc(T(x[0])) + '</small><b>' + esc(T(String(x[1]))) + '</b></div>'; }).join('') + '</div>';
    }
    var ph = P.car.length ? '<div class="cp' + (P.car.length === 1 ? ' one' : '') + '">' + P.car.slice(0, 3).map(function (p) { return '<img src="' + p.url + '" alt="">'; }).join('') + '</div>' : '';
    B.push('<div class="rs">' + ph + kpis + info + '</div>');
    B.push('<div class="rs"><div class="h2">📊 ' + esc(T('Расходы по месяцам')) + '</div><div class="ch"><img src="' + C.bars.url + '" alt=""></div></div>');
    B.push('<div class="rs"><div class="h2">🍩 ' + esc(T('На что уходят деньги')) + '</div><div class="ch"><img src="' + C.donut.url + '" alt=""></div></div>');
    if (multi) {
      B.push('<div class="rs"><div class="h2">🚗 ' + esc(T('По автомобилям')) + '</div><table><tr><th>' + esc(T('Авто')) + '</th><th class="n">' + esc(T('Записей')) + '</th><th class="n">' + esc(T('Потрачено')) + '</th></tr>' +
        R.cars.map(function (c) { var q = R.byCar[c.id] || { sum: 0, n: 0 }; return '<tr><td>' + esc(A.carName(c)) + '</td><td class="n">' + q.n + '</td><td class="n">' + money0(q.sum) + '</td></tr>'; }).join('') + '</table></div>');
    }
    if (R.fuel) {
      var f = R.fuel;
      B.push('<div class="rs"><div class="h2">⛽ ' + esc(T('Топливо')) + '</div><div class="kp">' + kp('Заправок', f.n) + kp('Литров всего', f.liters.toFixed(1).replace(/\.0$/, '')) + kp('Средняя цена литра', A.money(f.price)) + kp('Потрачено на топливо', money0(f.cost)) + '</div>' +
        (f.l100 ? '<div class="kp" style="grid-template-columns:1fr 1fr">' + kp('Расход, л/100 км', f.l100.toFixed(1)) + kp('Топливо на 100 км', A.money(f.c100)) + '</div>' : '') + '</div>');
    }
    if (C.line) B.push('<div class="rs"><div class="h2">🧭 ' + esc(T('Пробег')) + '</div><div class="ch"><img src="' + C.line.url + '" alt=""></div></div>');
    if (R.top.length) {
      B.push('<div class="rs"><div class="h2">🏆 ' + esc(T('Самые крупные расходы')) + '</div><table><tr><th>' + esc(T('Дата')) + '</th><th>' + esc(T('Событие')) + '</th><th class="n">' + esc(T('Стоимость')) + '</th></tr>' +
        R.top.map(function (e) { return '<tr><td>' + A.fmtD(e.date) + '</td><td>' + (A.EMO[e.category] || '') + ' ' + esc(T(A.evTitle(e))) + '</td><td class="n">' + A.money(A.S.costOf(e)) + '</td></tr>'; }).join('') + '</table></div>');
    }
    // таблица событий — кусками
    var per = 16;
    for (var i = 0; i < rowsData.length; i += per) {
      var chunk = rowsData.slice(i, i + per);
      B.push('<div class="rs">' + (i === 0 ? '<div class="h2">📋 ' + esc(T('История событий')) + '</div>' : '') + '<table><tr><th>' + esc(T('Дата')) + '</th>' + (multi ? '<th>' + esc(T('Авто')) + '</th>' : '') + '<th>' + esc(T('Событие')) + '</th><th class="n">' + esc(T('Пробег')) + '</th><th class="n">' + esc(T('Стоимость')) + '</th></tr>' +
        chunk.map(function (r) { return '<tr><td>' + A.fmtD(r.date) + '</td>' + (multi ? '<td>' + esc(r.car) + '</td>' : '') + '<td>' + r.emoji + ' <b>' + esc(r.title) + '</b>' + (r.det ? '<div style="color:#6b7f76;font-size:11px;margin-top:2px">' + esc(r.det.slice(0, 160)) + '</div>' : '') + '</td><td class="n">' + (r.km ? A.fmtN(r.km) : '') + '</td><td class="n">' + (r.cost ? A.money(r.cost) : '') + '</td></tr>'; }).join('') + '</table></div>');
    }
    B.push('<div class="rs"><div class="tt"><span>' + esc(T('Итого')) + ' · ' + R.evs.length + ' ' + esc(T('записей')) + '</span><span>' + A.money(R.total) + '</span></div></div>');
    // фото
    for (var j = 0; j < P.ev.length; j += 9) {
      B.push('<div class="rs">' + (j === 0 ? '<div class="h2">📷 ' + esc(T('Фото и вложения')) + '</div>' : '') + '<div class="ph">' + P.ev.slice(j, j + 9).map(function (p) { return '<figure><img src="' + p.url + '" alt=""><figcaption>' + esc(T(p.cap)) + '</figcaption></figure>'; }).join('') + '</div></div>');
    }
    return B;
  }
  function makePdf(R, C, P, rowsData, onProgress) {
    return Promise.all([load(CDN.h2c), load(CDN.pdf)]).then(function () {
      var host = document.createElement('div'); host.id = 'rpt'; var st = document.createElement('style'); st.textContent = CSS; host.appendChild(st);
      var blocks = pdfBlocks(R, C, P, rowsData);
      blocks.forEach(function (h) { var d = document.createElement('div'); d.className = 'blk'; d.innerHTML = h; host.appendChild(d); });
      document.body.appendChild(host);
      return new Promise(function (r) { setTimeout(r, 120); }).then(function () {
        var JS = window.jspdf.jsPDF, pdf = new JS({ unit: 'pt', format: 'a4', compress: true }), PW = 595.28, PH = 841.89, M = 0, y = 0, page = 1, nodes = [].slice.call(host.querySelectorAll('.blk'));
        var fullW = 794, k = PW / fullW, first = true, i = 0;
        function foot(p) { pdf.setFontSize(8); pdf.setTextColor(120); pdf.text('My CAR · v' + A.VERSION + ' · ' + A.fmtD(A.today()), 30, PH - 14); pdf.text(String(p), PW - 30, PH - 14, { align: 'right' }); }
        function step() {
          if (i >= nodes.length) { foot(page); return Promise.resolve(); }
          var n = nodes[i]; onProgress && onProgress(Math.round(i / nodes.length * 100));
          return window.html2canvas(n, { scale: 2, backgroundColor: '#ffffff', useCORS: true, logging: false }).then(function (cv) {
            var h = cv.height / 2 * k, isHd = n.firstChild && n.firstChild.className === 'hd';
            if (!first && y + h > PH - 34) { foot(page); pdf.addPage(); page++; y = 0; }
            if (first) { y = 0; first = false; }
            pdf.addImage(cv.toDataURL('image/jpeg', 0.92), 'JPEG', 0, y, PW, h, undefined, 'FAST');
            y += h + (isHd ? 6 : 8); i++;
            return step();
          });
        }
        return step().then(function () { document.body.removeChild(host); return pdf.output('blob'); });
      });
    }).catch(function (e) { var h = document.getElementById('rpt'); if (h) h.remove(); throw e; });
  }

  /* ---------- Excel ---------- */
  function b64(url) { return url.slice(url.indexOf(',') + 1); }
  function makeXlsx(R, C, P, rowsData) {
    return load(CDN.xls).then(function () {
      var X = window.ExcelJS, wb = new X.Workbook(); wb.creator = 'My CAR'; wb.created = new Date();
      var G = 'FF0B8A5F', G2 = 'FF10B981', LG = 'FFEEF7F3', LINE = 'FFD5E7DF', W = 'FFFFFFFF';
      var fill = function (c) { return { type: 'pattern', pattern: 'solid', fgColor: { argb: c } }; };
      var bd = { top: { style: 'thin', color: { argb: LINE } }, left: { style: 'thin', color: { argb: LINE } }, bottom: { style: 'thin', color: { argb: LINE } }, right: { style: 'thin', color: { argb: LINE } } };
      var multi = R.cars.length > 1, c0 = R.cars[0], cur = '#,##0.00" ₴"';
      var addImg = function (ws, im, col, row, wpx) { if (!im) return 0; var id = wb.addImage({ base64: b64(im.url), extension: im.url.indexOf('image/png') > 0 ? 'png' : 'jpeg' }), h = Math.round(im.h * wpx / im.w); ws.addImage(id, { tl: { col: col, row: row }, ext: { width: wpx, height: h } }); return h; };
      var hdr = function (ws, r, text, cols, size) { ws.mergeCells(r, 1, r, cols); var c = ws.getCell(r, 1); c.value = text; c.font = { name: 'Calibri', bold: true, size: size || 14, color: { argb: W } }; c.fill = fill(G); c.alignment = { vertical: 'middle', indent: 1 }; ws.getRow(r).height = 28; };

      // --- Сводка
      var ws = wb.addWorksheet(T('Сводка'), { views: [{ showGridLines: false }] });
      ws.columns = [{ width: 26 }, { width: 22 }, { width: 22 }, { width: 22 }, { width: 22 }, { width: 22 }];
      ws.mergeCells('A1:F1'); var t1 = ws.getCell('A1'); t1.value = '🚗 ' + (multi ? T('Все автомобили') : A.carName(c0) + (c0.plate ? ' · ' + c0.plate : '')); t1.font = { bold: true, size: 22, color: { argb: W } }; t1.fill = fill(G); t1.alignment = { vertical: 'middle', indent: 1 }; ws.getRow(1).height = 44;
      ws.mergeCells('A2:F2'); var t2 = ws.getCell('A2'); t2.value = T('Отчёт по автомобилю') + ' · ' + perLabel(R) + ' · ' + T('Создан') + ' ' + A.fmtD(A.today()); t2.font = { size: 12, color: { argb: W } }; t2.fill = fill(G2); t2.alignment = { indent: 1 }; ws.getRow(2).height = 22;
      var r = 4;
      var kp = [[T('Потрачено'), R.total, cur], [T('В среднем в месяц'), R.avg, cur], [T('Записей'), R.evs.length, '0'], [T('Стоимость 1 км'), R.perKm || null, cur], [T('Текущий пробег'), R.curM, '#,##0" км"'], [T('Пробег за период'), R.dist || null, '#,##0" км"']];
      kp.forEach(function (k, i) { var c = ws.getCell(r, i + 1), v = ws.getCell(r + 1, i + 1); c.value = k[0]; c.font = { size: 10, color: { argb: 'FF6B7F76' } }; c.fill = fill(LG); c.alignment = { indent: 1 }; v.value = k[1] === null ? '—' : k[1]; v.numFmt = k[2]; v.font = { bold: true, size: 18, color: { argb: G } }; v.fill = fill(LG); v.alignment = { horizontal: 'left', indent: 1 }; c.border = { top: { style: 'thin', color: { argb: LINE } } }; });
      ws.getRow(r + 1).height = 32; r += 3;
      if (!multi) {
        var it = [['Год', c0.year], ['Кузов', c0.body], ['Топливо', c0.fuel], ['КПП', c0.gear], ['Двигатель', c0.engine ? c0.engine + ' л' : ''], ['Цвет', c0.color]].filter(function (x) { return x[1]; });
        it.forEach(function (x, i) { var c = ws.getCell(r, i + 1), v = ws.getCell(r + 1, i + 1); c.value = T(x[0]); c.font = { size: 10, color: { argb: 'FF6B7F76' } }; v.value = T(String(x[1])); v.font = { bold: true, size: 12 }; c.alignment = v.alignment = { indent: 1 }; });
        r += 3;
      }
      if (P.car[0]) { addImg(ws, P.car[0], 0, r - 1, 330); }
      var gy = r - 1;
      if (P.car[0]) gy += Math.ceil(P.car[0].h * 330 / P.car[0].w / 20) + 1;
      ws.getCell(gy + 1, 1).value = '📊 ' + T('Расходы по месяцам'); ws.getCell(gy + 1, 1).font = { bold: true, size: 14, color: { argb: G } };
      var h1 = addImg(ws, C.bars, 0, gy + 1, 720);
      var y2 = gy + 2 + Math.ceil(h1 / 20) + 1;
      ws.getCell(y2 + 1, 1).value = '🍩 ' + T('На что уходят деньги'); ws.getCell(y2 + 1, 1).font = { bold: true, size: 14, color: { argb: G } };
      var h2 = addImg(ws, C.donut, 0, y2 + 1, 720);
      var y3 = y2 + 2 + Math.ceil(h2 / 20) + 1;
      if (C.line) { ws.getCell(y3 + 1, 1).value = '🧭 ' + T('Пробег'); ws.getCell(y3 + 1, 1).font = { bold: true, size: 14, color: { argb: G } }; addImg(ws, C.line, 0, y3 + 1, 720); }

      // --- Категории
      var wc = wb.addWorksheet(T('Категории'), { views: [{ showGridLines: false, state: 'frozen', ySplit: 1 }] });
      wc.columns = [{ header: T('Категория'), width: 26 }, { header: T('Записей'), width: 12 }, { header: T('Потрачено'), width: 16 }, { header: '%', width: 10 }, { header: T('В среднем'), width: 16 }];
      var cl = catList(R);
      cl.forEach(function (c, i) { var rr = i + 2; wc.getCell(rr, 1).value = c.emoji + ' ' + c.label; wc.getCell(rr, 2).value = R.byCat[c.id].n; wc.getCell(rr, 3).value = c.sum; wc.getCell(rr, 4).value = { formula: 'C' + rr + '/C' + (cl.length + 2), result: c.pct / 100 }; wc.getCell(rr, 5).value = { formula: 'C' + rr + '/B' + rr, result: c.sum / R.byCat[c.id].n }; wc.getCell(rr, 1).font = { bold: true, color: { argb: 'FF' + c.color.slice(1).toUpperCase() } }; });
      var tr = cl.length + 2; wc.getCell(tr, 1).value = T('Итого'); wc.getCell(tr, 2).value = { formula: 'SUM(B2:B' + (tr - 1) + ')', result: R.evs.length }; wc.getCell(tr, 3).value = { formula: 'SUM(C2:C' + (tr - 1) + ')', result: R.total };
      for (var q = 2; q <= tr; q++) { wc.getCell(q, 3).numFmt = cur; wc.getCell(q, 4).numFmt = '0%'; wc.getCell(q, 5).numFmt = cur; for (var cc = 1; cc <= 5; cc++) { wc.getCell(q, cc).border = bd; if (q % 2 === 1 && q < tr) wc.getCell(q, cc).fill = fill(LG); } }
      for (var cc2 = 1; cc2 <= 5; cc2++) { var hc = wc.getCell(1, cc2); hc.font = { bold: true, color: { argb: W } }; hc.fill = fill(G); hc.alignment = { vertical: 'middle', indent: 1 }; var tc = wc.getCell(tr, cc2); tc.font = { bold: true, color: { argb: W } }; tc.fill = fill(G); }
      wc.getRow(1).height = 24; addImg(wc, C.donut, 0, tr + 1, 720);

      // --- Месяцы
      var wm = wb.addWorksheet(T('Месяцы'), { views: [{ showGridLines: false, state: 'frozen', ySplit: 1, xSplit: 1 }] });
      var cats = A.M.CATS.filter(function (k) { return k.id !== 'mileage'; });
      wm.columns = [{ header: T('Месяц'), width: 14 }].concat(cats.map(function (k) { return { header: (A.EMO[k.id] || '') + ' ' + T(k.label), width: 16 }; })).concat([{ header: T('Итого'), width: 16 }]);
      R.months.forEach(function (m, i) {
        var rr = i + 2; wm.getCell(rr, 1).value = monthLabel(m.key) + ' ' + m.key.slice(0, 4);
        cats.forEach(function (k, j) { wm.getCell(rr, j + 2).value = m.parts[k.id] || 0; wm.getCell(rr, j + 2).numFmt = cur; });
        var lc = String.fromCharCode(65 + cats.length); wm.getCell(rr, cats.length + 2).value = { formula: 'SUM(B' + rr + ':' + lc + rr + ')', result: m.sum }; wm.getCell(rr, cats.length + 2).numFmt = cur; wm.getCell(rr, cats.length + 2).font = { bold: true };
        for (var c3 = 1; c3 <= cats.length + 2; c3++) { wm.getCell(rr, c3).border = bd; if (i % 2) wm.getCell(rr, c3).fill = fill(LG); }
      });
      for (var c4 = 1; c4 <= cats.length + 2; c4++) { var h4 = wm.getCell(1, c4); h4.font = { bold: true, color: { argb: W } }; h4.fill = fill(G); h4.alignment = { vertical: 'middle', wrapText: true, indent: 1 }; }
      wm.getRow(1).height = 30; addImg(wm, C.bars, 0, R.months.length + 2, 720);

      // --- Записи
      var we = wb.addWorksheet(T('Записи'), { views: [{ showGridLines: false, state: 'frozen', ySplit: 1 }] });
      var cols = [{ header: T('Дата'), width: 12 }]; if (multi) cols.push({ header: T('Авто'), width: 22 });
      cols = cols.concat([{ header: T('Категория'), width: 20 }, { header: T('Событие'), width: 34 }, { header: T('Пробег'), width: 12 }, { header: T('Стоимость'), width: 16 }, { header: T('Подробности'), width: 60 }]);
      we.columns = cols;
      var off = multi ? 1 : 0;
      rowsData.forEach(function (rw, i) {
        var rr = i + 2, c = 1;
        we.getCell(rr, c++).value = new Date(rw.date + 'T12:00:00'); we.getCell(rr, 1).numFmt = 'dd.mm.yyyy';
        if (multi) we.getCell(rr, c++).value = rw.car;
        we.getCell(rr, c++).value = rw.emoji + ' ' + rw.cat; we.getCell(rr, c++).value = rw.title;
        we.getCell(rr, c).value = rw.km; we.getCell(rr, c++).numFmt = '#,##0'; we.getCell(rr, c).value = rw.cost || null; we.getCell(rr, c++).numFmt = cur; we.getCell(rr, c).value = rw.det; we.getCell(rr, c).alignment = { wrapText: true, vertical: 'top' };
        for (var c5 = 1; c5 <= cols.length; c5++) { we.getCell(rr, c5).border = bd; if (i % 2) we.getCell(rr, c5).fill = fill(LG); we.getCell(rr, c5).alignment = Object.assign({ vertical: 'top' }, we.getCell(rr, c5).alignment || {}); }
      });
      var lr = rowsData.length + 2; we.getCell(lr, 1).value = T('Итого');
      var costCol = String.fromCharCode(65 + 4 + off); we.getCell(lr, 4 + off + 1).value = { formula: 'SUM(' + costCol + '2:' + costCol + (lr - 1) + ')', result: R.total }; we.getCell(lr, 4 + off + 1).numFmt = cur;
      for (var c6 = 1; c6 <= cols.length; c6++) { var h6 = we.getCell(1, c6); h6.font = { bold: true, color: { argb: W } }; h6.fill = fill(G); h6.alignment = { vertical: 'middle', indent: 1 }; var t6 = we.getCell(lr, c6); t6.font = { bold: true, color: { argb: W } }; t6.fill = fill(G); }
      we.getRow(1).height = 26; we.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: cols.length } };

      // --- Топливо
      if (R.fuel) {
        var wf = wb.addWorksheet('⛽ ' + T('Топливо'), { views: [{ showGridLines: false, state: 'frozen', ySplit: 1 }] });
        wf.columns = [{ header: T('Дата'), width: 12 }, { header: T('Пробег'), width: 12 }, { header: T('Литры'), width: 10 }, { header: T('Цена за литр ₴'), width: 16 }, { header: T('Стоимость'), width: 16 }, { header: T('Тип топлива'), width: 18 }, { header: T('АЗС'), width: 22 }];
        var fe = R.evs.filter(function (e) { return e.category === 'fuel'; });
        fe.forEach(function (e, i) { var rr = i + 2, d = e.data || {}; wf.getCell(rr, 1).value = new Date(e.date + 'T12:00:00'); wf.getCell(rr, 1).numFmt = 'dd.mm.yyyy'; wf.getCell(rr, 2).value = e.mileage || null; wf.getCell(rr, 2).numFmt = '#,##0'; wf.getCell(rr, 3).value = +d.liters || null; wf.getCell(rr, 4).value = { formula: 'IF(C' + rr + '>0,E' + rr + '/C' + rr + ',"")', result: (+d.liters ? A.S.costOf(e) / +d.liters : 0) }; wf.getCell(rr, 4).numFmt = cur; wf.getCell(rr, 5).value = A.S.costOf(e); wf.getCell(rr, 5).numFmt = cur; wf.getCell(rr, 6).value = [d.fuelType, d.fuelGrade].filter(Boolean).join(' '); wf.getCell(rr, 7).value = d.station || ''; for (var c7 = 1; c7 <= 7; c7++) { wf.getCell(rr, c7).border = bd; if (i % 2) wf.getCell(rr, c7).fill = fill(LG); } });
        for (var c8 = 1; c8 <= 7; c8++) { var h8 = wf.getCell(1, c8); h8.font = { bold: true, color: { argb: W } }; h8.fill = fill(G); h8.alignment = { indent: 1 }; }
        var fl = fe.length + 2; wf.getCell(fl, 1).value = T('Итого'); wf.getCell(fl, 3).value = { formula: 'SUM(C2:C' + (fl - 1) + ')', result: R.fuel.liters }; wf.getCell(fl, 5).value = { formula: 'SUM(E2:E' + (fl - 1) + ')', result: R.fuel.cost }; wf.getCell(fl, 5).numFmt = cur;
        for (var c9 = 1; c9 <= 7; c9++) { var t9 = wf.getCell(fl, c9); t9.font = { bold: true, color: { argb: W } }; t9.fill = fill(G); }
      }
      // --- Фото
      if (P.ev.length) {
        var wp = wb.addWorksheet('📷 ' + T('Фото'), { views: [{ showGridLines: false }] });
        wp.columns = [{ width: 46 }, { width: 46 }, { width: 46 }];
        P.ev.forEach(function (p, i) { var col = i % 3, row = Math.floor(i / 3) * 16; var id = wb.addImage({ base64: b64(p.url), extension: 'jpeg' }); var w = 300, h = Math.min(260, Math.round(p.h * w / p.w)); wp.addImage(id, { tl: { col: col + 0.05, row: row }, ext: { width: w, height: h } }); var c = wp.getCell(row + 14, col + 1); c.value = T(p.cap); c.font = { size: 9, color: { argb: 'FF6B7F76' } }; });
      }
      return wb.xlsx.writeBuffer().then(function (buf) { return new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }); });
    });
  }

  /* ---------- окно выбора ---------- */
  function save(blob, name) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  }
  function open(carId) {
    var S = A.S, cars = S.cars(false), L = A.layer;
    if (!cars.length) return A.toast(T('Сначала добавьте авто'));
    var st = { car: carId && S.car(carId) ? carId : (cars.length === 1 ? cars[0].id : 'all'), per: 'all', from: '', to: A.today(), busy: false };
    var d1 = new Date(); d1.setDate(d1.getDate() - 30); st.from = ds(d1);
    function draw() {
      var pers = [['month', 'Месяц'], ['year', 'Год'], ['all', 'Всё'], ['custom', 'Свой']];
      L.innerHTML = '<div class="ov"><div class="sheet"><div class="grab"></div><h4>' + esc(T('Отчёт по авто')) + '</h4><div class="rr rsh">' +
        '<p class="hint" style="margin:0 0 10px">' + esc(T('Фото, графики, бублики, траты по категориям и месяцам')) + '</p>' +
        (cars.length > 1 ? '<div class="sel"><select class="inp" id="rcar"><option value="all"' + (st.car === 'all' ? ' selected' : '') + '>' + esc(T('Все авто')) + '</option>' + cars.map(function (c) { return '<option value="' + c.id + '"' + (st.car === c.id ? ' selected' : '') + '>' + esc(A.carName(c)) + '</option>'; }).join('') + '</select></div>' : '') +
        '<div class="seg" style="margin-top:12px">' + pers.map(function (p) { return '<button data-rp="' + p[0] + '" class="' + (st.per === p[0] ? 'on' : '') + '">' + esc(T(p[1])) + '</button>'; }).join('') + '</div>' +
        (st.per === 'custom' ? '<div class="rng"><label>' + esc(T('С')) + '<input type="date" id="rfrom" class="inp" value="' + st.from + '" max="' + A.today() + '"></label><label>' + esc(T('По')) + '<input type="date" id="rto" class="inp" value="' + st.to + '" max="' + A.today() + '"></label></div>' : '') +
        '<button class="btn primary" data-go="pdf" style="margin-top:18px"' + (st.busy ? ' disabled' : '') + '>📄 ' + esc(T(st.busy ? 'Готовлю отчёт…' : 'Скачать PDF')) + '</button>' +
        '<button class="btn outline" data-go="xlsx"' + (st.busy ? ' disabled' : '') + '>📗 ' + esc(T('Скачать Excel')) + '</button></div>' +
        '<button class="si cancel">' + esc(T('Закрыть')) + '</button></div></div>';
    }
    draw();
    L.onclick = function (e) {
      if (st.busy) return;
      var b = e.target.closest('[data-rp]'); if (b) { st.per = b.dataset.rp; return draw(); }
      b = e.target.closest('[data-go]'); if (b) return run(b.dataset.go);
      if (e.target.classList.contains('ov') || e.target.closest('.cancel')) A.closeLayer();
    };
    L.onchange = function (e) { if (e.target.id === 'rcar') st.car = e.target.value; else if (e.target.id === 'rfrom') st.from = e.target.value; else if (e.target.id === 'rto') st.to = e.target.value; };
    function run(kind) {
      st.busy = true; draw();
      var R = build(st), name = 'My-CAR-' + (R.cars.length > 1 ? 'all' : (R.cars[0].brand + '-' + R.cars[0].model).replace(/[^\wа-яА-Я-]+/g, '_')) + '-' + A.today() + '.' + (kind === 'pdf' ? 'pdf' : 'xlsx');
      Promise.all([charts(R), photosData(R)]).then(function (x) {
        var rd = rows(R);
        return kind === 'pdf' ? makePdf(R, x[0], x[1], rd) : makeXlsx(R, x[0], x[1], rd);
      }).then(function (blob) { save(blob, name); st.busy = false; A.closeLayer(); A.toast(T('Отчёт готов')); })
        .catch(function (err) { st.busy = false; draw(); A.toast(T(err && err.message === 'lib' ? 'Не удалось загрузить модуль отчёта. Проверьте интернет' : 'Не удалось создать отчёт')); window.__repErr = err; });
    }
  }
  window.MCREP = { open: open, _build: build, _charts: charts, _photos: photosData, _rows: rows, _pdf: makePdf, _xlsx: makeXlsx, _blocks: pdfBlocks, _css: CSS };
})();
