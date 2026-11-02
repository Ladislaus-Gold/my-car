/* My CAR — регламент плановых замен и мастер нового авто (v2.1.0).
   Данные регламента — в TEMPLATES; прошлые замены и свои интервалы хранятся в карточке авто (c.reg), техданные — в c.tech. */
(function () {
  var A = window.MCAPP; if (!A) return;
  var S = A.S, esc = A.esc, fmtN = A.fmtN, fmtD = A.fmtD, today = A.today, days = A.days, toast = A.toast, layer = A.layer, closeLayer = A.closeLayer,
    page = A.page, setH = A.setH, go = A.go, $ = A.$, $$ = A.$$, carName = A.carName, pad = A.pad;

  var SRC = { manual: ['s1', 'из руководства'], service: ['s2', 'совет сервисов'], generic: ['s4', 'общий ориентир'], user: ['s3', 'ваше значение'] };
  var GEARS = ['Автомат 6', 'Автомат 8', 'Робот DCT', 'Механика', 'Вариатор', 'Другая'];
  var USAGE = ['Город, пробки', 'Трасса', 'Смешанно'];
  var GEN = { 'Hyundai Sonata': ['DN8', 'LF', 'YF'] };
  var ENG = { 'Hyundai Sonata DN8': ['2.0 MPI', '2.5 GDi', '1.6 T-GDi', '2.5 T-GDi', 'Гибрид'] };

  var TEMPLATES = [{
    id: 'hyundai-sonata-dn8-25gdi', brand: 'Hyundai', model: 'Sonata', gen: 'DN8', engine: '2.5 GDi', expectGear: 'Автомат 8',
    title: 'Hyundai Sonata DN8 · 2.5 GDi',
    link: 'https://ownersmanual.hyundai.com/full_webhelp/DN8/2024/en_US/topic_ybb_1yh_lwb.html',
    source: 'Hyundai Owner’s Manual, Sonata DN8 (руководство 2024 м.г.; для 2019–2020 интервалы, вероятно, те же)',
    gearSource: 'справочник auto-data.net',
    notes: ['Топливный фильтр по регламенту не обслуживается: менять при проблемах (затруднённый запуск, падение подачи).'],
    items: [
      { id: 'oil', t: 'Масло двигателя и фильтр', e: '🛢️', km: 13000, mo: 12, src: 'manual', note: 'Только полный синтетик API SN PLUS или выше. С другим маслом интервал короче. Добавки в масло использовать нельзя.' },
      { id: 'air', t: 'Воздушный фильтр', e: '💨', km: 39000, mo: 36, src: 'manual', note: 'Замена каждые 39 000 км или 36 мес., на остальных ТО осмотр.' },
      { id: 'cabin', t: 'Салонный фильтр', e: '🌬️', km: 13000, mo: 12, src: 'manual', note: 'Примерно раз в год. Формулировка в руководстве неоднозначна, интервал можно поправить.' },
      { id: 'plugs', t: 'Свечи зажигания', e: '⚡', km: 156000, src: 'manual', note: 'Для 2.5 GDi интервал указан только по пробегу.' },
      { id: 'coolant', t: 'Охлаждающая жидкость', e: '🧊', km: 39000, mo: 24, first: { km: 200000, mo: 120 }, src: 'manual', note: 'Первая замена на 200 000 км или через 120 мес., потом каждые 39 000 км или 24 мес. Если жидкость уже меняли раньше, считаем от последней замены (это наша трактовка правила).' },
      { id: 'brake', t: 'Тормозная жидкость', e: '🛑', km: 78000, mo: 48, src: 'manual', note: 'Замена каждые 78 000 км или 48 мес. Уровень и состояние — осмотр каждые 13 000 км.' },
      { id: 'belt', t: 'Приводной ремень', e: '🔗', km: 13000, mo: 12, startKm: 78000, kind: 'inspect', src: 'manual', note: 'Осмотр с 78 000 км, затем каждые 13 000 км. Менять при трещинах или заметном ослаблении.' },
      { id: 'atf', t: 'Масло в АКПП', e: '⚙️', km: 70000, label: '60–80 тыс.', src: 'service', optional: true, note: 'По руководству Hyundai для 2.5 GDi замена не требуется (только если коробка побывала в воде). Многие сервисы советуют менять раньше, около 60–80 тыс. км. Это совет мастеров, а не регламент производителя; решение за владельцем.' }
    ]
  }];
  var GENERIC = {
    id: '', title: 'Общий ориентир', source: 'Общие ориентиры, не регламент производителя. Точный регламент для вашего авто ещё не подобран.', notes: [],
    items: [
      { id: 'oil', t: 'Масло двигателя и фильтр', e: '🛢️', km: 10000, mo: 12, src: 'generic', note: 'Общий ориентир. Точное значение смотрите в сервисной книжке.' },
      { id: 'cabin', t: 'Салонный фильтр', e: '🌬️', km: 15000, mo: 12, src: 'generic', note: 'Общий ориентир.' },
      { id: 'air', t: 'Воздушный фильтр', e: '💨', km: 30000, mo: 24, src: 'generic', note: 'Общий ориентир.' },
      { id: 'brake', t: 'Тормозная жидкость', e: '🛑', mo: 24, src: 'generic', note: 'Общий ориентир: жидкость впитывает влагу, обычно меняют раз в 2 года.' }
    ]
  };

  var norm = function (v) { return String(v || '').toLowerCase().replace(/[\s\-_.]/g, ''); };
  function tplFor(c) {
    var t = c.tech || {};
    for (var i = 0; i < TEMPLATES.length; i++) {
      var p = TEMPLATES[i];
      if (norm(p.brand) === norm(c.brand) && norm(p.model) === norm(c.model) && norm(p.gen) === norm(t.gen) && norm(p.engine) === norm(t.engine)) return p;
    }
    return null;
  }
  function itemsOf(c) {
    var p = tplFor(c) || GENERIC, ov = (c.reg && c.reg.ov) || {};
    return p.items.map(function (it) {
      var o = ov[it.id], r = Object.assign({}, it);
      if (o) { if (o.km !== undefined) r.km = o.km; if (o.mo !== undefined) r.mo = o.mo; r.src = 'user'; r.custom = true; }
      return r;
    });
  }
  function addMonths(iso, mo) { var p = iso.split('-'), d = new Date(+p[0], +p[1] - 1 + mo, +p[2]); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function dn(n) { return fmtN(n) + ' км'; }

  /* расчёт статуса одной позиции */
  function calc(c, it) {
    var cur = S.curMileage(c.id), d = c.reg && c.reg.done && c.reg.done[it.id], nextKm = null, nextDate = null, basis = 'none';
    if (d && !d.skip && (d.km != null || d.date)) {
      basis = 'done';
      if (d.km != null && it.km) nextKm = d.km + it.km;
      if (d.date && it.mo) nextDate = addMonths(d.date, it.mo);
    } else if (it.first && !it.custom) { basis = 'first'; nextKm = it.first.km; }
    else if (it.startKm && cur < it.startKm) { basis = 'start'; nextKm = it.startKm; }
    var res = { it: it, d: d, cur: cur, nextKm: nextKm, nextDate: nextDate, basis: basis, st: 'unknown', pct: 0, leftKm: null, leftDays: null };
    if (nextKm == null && !nextDate) {
      if (it.startKm && cur >= it.startKm) { res.st = 'soon'; res.hint = 'пора осмотреть'; res.pct = 1; }
      return res;
    }
    if (nextKm != null) res.leftKm = nextKm - cur;
    if (nextDate) res.leftDays = days(nextDate);
    var over = (res.leftKm != null && res.leftKm < 0) || (res.leftDays != null && res.leftDays < 0);
    var soonKm = Math.max(1500, (it.km || 0) * 0.1);
    var soon = !over && ((res.leftKm != null && res.leftKm <= soonKm) || (res.leftDays != null && res.leftDays <= 30));
    res.st = over ? (it.optional ? 'advice' : 'over') : soon ? 'soon' : 'ok';
    var u = []; if (res.leftKm != null && it.km) u.push(1 - res.leftKm / it.km); if (res.leftDays != null && it.mo) u.push(1 - res.leftDays / (it.mo * 30.4));
    res.pct = Math.max(0, Math.min(1, u.length ? Math.max.apply(null, u) : 0));
    if (over) res.pct = 1;
    return res;
  }
  function leftText(r) {
    if (r.st === 'unknown') return 'нет данных';
    if (r.hint) return r.hint;
    if (r.st === 'advice') return 'пора по совету';
    var km = r.leftKm, dd = r.leftDays;
    if (r.st === 'over') return km != null && km < 0 ? 'просрочено на ' + dn(-km) : 'просрочено на ' + fmtN(-dd) + ' дн.';
    var a = []; if (km != null) a.push(dn(km)); if (dd != null) a.push(fmtN(dd) + ' дн.');
    return 'ещё ' + (a.length ? a[0] : '');
  }
  function ivText(it) {
    var a = [];
    if (it.km) a.push((it.kind === 'inspect' ? 'осмотр ' : '') + 'каждые ' + (it.label || fmtN(it.km)) + ' км');
    if (it.mo) a.push((it.mo % 12 === 0 && it.mo >= 12 ? (it.mo / 12) + ' ' + (it.mo / 12 === 1 ? 'год' : it.mo / 12 < 5 ? 'года' : 'лет') : it.mo + ' мес.'));
    return a.join(' · ');
  }
  function summary(c) {
    var o = { over: 0, soon: 0, ok: 0, unknown: 0, advice: 0 }, rs = itemsOf(c).map(function (it) { return calc(c, it); });
    rs.forEach(function (r) { o[r.st]++; }); o.soon += o.advice; o.rs = rs; return o;
  }

  /* ---------- карточка в «Об авто» ---------- */
  function card(c) {
    var s = summary(c), t = [];
    if (s.over) t.push(s.over + ' просрочено'); if (s.soon) t.push(s.soon + ' скоро'); if (s.ok) t.push(s.ok + ' в норме');
    var sub = t.length ? t.join(' · ') : 'Укажите прошлые замены, и я посчитаю сроки';
    return '<a class="svc rg-card" href="#/car/' + c.id + '/regulation"><span class="evi"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18"/></svg></span><div><b>Регламент замен</b><small>' + esc(sub) + '</small></div><span class="rg-chev">›</span></a>';
  }

  /* ---------- экран «Регламент» ---------- */
  function row(r) {
    var it = r.it, s = SRC[it.src] || SRC.generic;
    return '<button class="rg-row" data-it="' + it.id + '"><span class="rg-e">' + it.e + '</span><div class="rg-m"><div class="rg-h"><b>' + esc(it.t) + '</b><span class="rg-s st-' + r.st + '">' + esc(leftText(r)) + '</span></div>' +
      '<small>' + esc(ivText(it)) + '</small>' + (r.st !== 'unknown' ? '<div class="rg-bar"><i class="st-' + r.st + '" style="width:' + Math.round(r.pct * 100) + '%"></i></div>' : '') +
      '<span class="src ' + s[0] + '">' + s[1] + '</span></div></button>';
  }
  function regulation(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    var p = tplFor(c), s = summary(c), cur = S.curMileage(c.id);
    var g = { urgent: [], ok: [], none: [] };
    s.rs.forEach(function (r) { (r.st === 'over' || r.st === 'soon' || r.st === 'advice' ? g.urgent : r.st === 'ok' ? g.ok : g.none).push(r); });
    var grp = function (t, a) { return a.length ? '<div class="rg-sec">' + t + '</div><div class="rg-g">' + a.map(row).join('') + '</div>' : ''; };
    var pill = function (n, l, col) { return '<div><b style="color:' + col + '">' + n + '</b>' + l + '</div>'; };
    var banner = !p ? '<div class="rg-note warn">Точный регламент для вашей комплектации ещё не подобран, показан общий ориентир. ' + (c.tech && c.tech.engine ? '' : 'Укажите двигатель и коробку: ') + '<a href="#/car/' + id + '/setup/tech">данные авто</a></div>' : '';
    page({
      title: 'Регламент', back: '#/car/' + id, nav: 'garage', right: '<a class="link" href="#/car/' + id + '/setup/tech">Данные</a>',
      body: '<div class="rg-car"><b>' + esc(p ? p.title : carName(c)) + '</b><small>' + (cur ? 'Пробег ' + dn(cur) : '<a href="#/car/' + id + '/edit">Укажите текущий пробег</a>') + '</small></div>' + banner +
        '<div class="rg-pills">' + pill(s.over, 'просрочено', 'var(--red)') + pill(s.soon, 'скоро', '#FF9500') + pill(s.ok, 'в норме', '#34C759') + pill(s.unknown, 'нет данных', 'var(--mut)') + '</div>' +
        grp('Просрочено и скоро', g.urgent) + grp('В норме', g.ok) + grp('Укажите прошлую замену', g.none) +
        (p && p.notes.length ? '<div class="rg-note">' + p.notes.map(esc).join('<br>') + '</div>' : '') +
        '<div class="rg-src">Источник: ' + (p && p.link ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.source) + '</a>' : esc((p || GENERIC).source)) + '</div>' +
        (!p ? '<button class="btn outline" id="ask" style="margin-top:14px">Скопировать запрос для Claude</button>' : '')
    });
    setH({
      click: function (e) {
        var b = e.target.closest('[data-it]'); if (b) return itemSheet(c, b.dataset.it);
        if (e.target.closest('#ask')) return copyAsk(c);
      }
    });
  }

  /* ---------- окна ---------- */
  function openLayer(html, onclick) {
    layer.innerHTML = '<div class="ov"><div class="sheet rg-sheet"><div class="grab"></div>' + html + '</div></div>';
    layer.onclick = function (e) { if (e.target.classList.contains('ov')) return closeLayer(); onclick(e); };
  }
  function itemSheet(c, itemId) {
    var it = itemsOf(c).filter(function (x) { return x.id === itemId; })[0]; if (!it) return;
    var r = calc(c, it), d = r.d, s = SRC[it.src] || SRC.generic, p = tplFor(c);
    var last = d && !d.skip ? (d.never ? 'не меняли' : [d.km != null ? (d.approx ? '≈ ' : '') + dn(d.km) : '', d.date ? fmtD(d.date) : ''].filter(Boolean).join(' · ')) : 'не указана';
    var nxt = [r.nextKm != null ? dn(r.nextKm) : '', r.nextDate ? fmtD(r.nextDate) : ''].filter(Boolean).join(' · ') || '—';
    openLayer('<h4>' + it.e + ' ' + esc(it.t) + '</h4><p class="rg-snote">' + esc(it.note || '') + '</p>' +
      '<div class="kv"><span>Интервал</span><b>' + esc(ivText(it) || '—') + '</b></div><div class="kv"><span>Последняя замена</span><b>' + esc(last) + '</b></div>' +
      '<div class="kv"><span>Следующая</span><b>' + esc(nxt) + '</b></div><div class="kv"><span>Источник</span><b>' + s[1] + '</b></div>' +
      '<button class="si ok" data-a="done"><span>✓ Отметить выполненной сегодня</span></button><button class="si" data-a="edit"><span>Указать прошлую замену</span></button>' +
      '<button class="si" data-a="iv"><span>Изменить интервал</span></button>' + (it.custom ? '<button class="si" data-a="reset"><span>Вернуть интервал по регламенту</span></button>' : '') +
      '<button class="si cancel"><span>Закрыть</span></button>', function (e) {
        var b = e.target.closest('[data-a]'), a = b && b.dataset.a;
        if (e.target.closest('.cancel')) return closeLayer();
        if (a === 'done') return histSheet(c, it, true);
        if (a === 'edit') return histSheet(c, it, false);
        if (a === 'iv') return ivSheet(c, it);
        if (a === 'reset') { delete c.reg.ov[it.id]; S.putCar(c); closeLayer(); A.render(); }
      });
    if (p && it.id === 'atf') { /* пояснение уже в note */ }
  }
  function histSheet(c, it, isDone, after) {
    var d = (c.reg && c.reg.done && c.reg.done[it.id]) || {}, cur = S.curMileage(c.id);
    var km = isDone ? (cur || '') : (d.km != null ? d.km : ''), dt = isDone ? today() : (d.date || '');
    openLayer('<h4>' + it.e + ' ' + esc(it.t) + '</h4><label class="lbl">Пробег при замене, км</label><input class="inp" id="hk" inputmode="numeric" value="' + esc(km) + '" placeholder="напр. 69000">' +
      '<label class="lbl">Дата замены</label><input class="inp" id="hd" type="date" max="' + today() + '" value="' + esc(dt) + '">' +
      '<label class="chk neu" style="margin-top:14px"><input type="checkbox" id="ha"' + (d.approx ? ' checked' : '') + '><span class="box">✓</span><b>Примерно, не помню точно</b></label>' +
      '<button class="btn primary" id="hs" style="margin-top:16px">Сохранить</button>' +
      '<button class="si" data-a="unk"><span>Не помню</span></button>' + (it.km && !it.mo ? '' : '') + '<button class="si" data-a="never"><span>Не меняли</span></button><button class="si cancel"><span>Отмена</span></button>', function (e) {
        var a = (e.target.closest('[data-a]') || {}).dataset; a = a && a.a;
        function put(v) { c.reg = c.reg || {}; c.reg.done = c.reg.done || {}; if (v) c.reg.done[it.id] = v; else delete c.reg.done[it.id]; S.putCar(c); closeLayer(); (after || A.render)(); }
        if (e.target.closest('.cancel')) return closeLayer();
        if (a === 'unk') return put({ skip: 'unknown' });
        if (a === 'never') return put({ km: 0, never: true });
        if (e.target.closest('#hs')) {
          var k = $('#hk').value.replace(/\s/g, ''), dv = $('#hd').value;
          if (!k && !dv) return toast('Укажите пробег или дату');
          var kn = k ? parseInt(k, 10) : null; if (k && !(kn >= 0)) return toast('Пробег указан неверно');
          put({ km: kn, date: dv || '', approx: $('#ha').checked });
        }
      });
  }
  function ivSheet(c, it) {
    openLayer('<h4>' + it.e + ' Интервал: ' + esc(it.t) + '</h4><label class="lbl">Каждые, км</label><input class="inp" id="ik" inputmode="numeric" value="' + esc(it.km || '') + '"><label class="lbl">Или через, месяцев</label><input class="inp" id="im" inputmode="numeric" value="' + esc(it.mo || '') + '">' +
      '<button class="btn primary" id="is" style="margin-top:16px">Сохранить</button><button class="si cancel"><span>Отмена</span></button>', function (e) {
        if (e.target.closest('.cancel')) return closeLayer();
        if (e.target.closest('#is')) {
          var k = parseInt($('#ik').value.replace(/\s/g, ''), 10) || 0, m = parseInt($('#im').value, 10) || 0;
          if (!k && !m) return toast('Укажите километры или месяцы');
          c.reg = c.reg || {}; c.reg.ov = c.reg.ov || {}; c.reg.ov[it.id] = { km: k || undefined, mo: m || undefined };
          S.putCar(c); closeLayer(); A.render();
        }
      });
  }
  function askText(c) {
    var t = c.tech || {}, cur = S.curMileage(c.id), done = (c.reg && c.reg.done) || {}, h = [];
    itemsOf(c).forEach(function (it) { var d = done[it.id]; if (d && !d.skip) h.push(it.t + ': ' + (d.never ? 'не меняли' : [d.km != null ? (d.approx ? '≈' : '') + d.km + ' км' : '', d.date ? fmtD(d.date) : ''].filter(Boolean).join(', '))); });
    return 'Подбери регламент ТО для My CAR. Авто: ' + carName(c) + (t.gen ? ', поколение ' + t.gen : '') + (c.year ? ', ' + c.year + ' г.' : '') + (t.my ? ' (модельный ' + t.my + ')' : '') +
      (t.engine ? ', двигатель ' + t.engine : '') + (t.gear ? ', коробка ' + t.gear : '') + (cur ? ', пробег ' + cur + ' км' : '') + (t.usage ? ', эксплуатация: ' + t.usage : '') + (c.vin ? ', VIN ' + c.vin : '') +
      '. История: ' + (h.length ? h.join('; ') : 'не указана') + '. Нужны интервалы по пробегу и времени с источниками, запиши в папку авто.';
  }
  function copyAsk(c) {
    var t = askText(c);
    function ok() { toast('Запрос скопирован. Вставьте его в чат с Claude'); }
    try { navigator.clipboard.writeText(t).then(ok, function () { prompt('Скопируйте запрос', t); }); } catch (er) { prompt('Скопируйте запрос', t); }
  }

  /* ---------- мастер нового авто ---------- */
  function steps(n) { return '<div class="rg-steps">' + [1, 2, 3, 4].map(function (i) { return '<i class="' + (i <= n ? 'on' : '') + '"></i>'; }).join('') + '</div>'; }
  function chips(k, arr, v) { return '<div class="rg-chips">' + arr.map(function (x) { return '<button type="button" class="rg-ch ' + (v === x ? 'on' : '') + '" data-k="' + k + '" data-v="' + esc(x) + '">' + esc(x) + '</button>'; }).join('') + '</div>'; }
  function setupTech(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    c.tech = c.tech || {}; var t = c.tech, key = c.brand + ' ' + c.model;
    function draw() {
      var gens = GEN[key], engs = ENG[key + ' ' + (t.gen || '')], p = tplFor(c);
      var warn = p && t.gear && p.expectGear && norm(t.gear) !== norm(p.expectGear) ? '<div class="rg-note warn">По справочникам для ' + esc(p.engine) + ' указано: ' + esc(p.expectGear) + ' (' + esc(p.gearSource) + '). Проверьте по документам или надписи на коробке, от этого зависит рекомендация по маслу.</div>' : '';
      page({
        title: 'Новое авто', back: '#/car/' + id, body: steps(2) + '<h2 class="rg-big">Техника</h2><p class="rg-sub">От этого зависит регламент замен</p>' +
          '<div class="rg-sec">Поколение / кузов</div><div class="rg-box">' + (gens ? chips('gen', gens.concat(['Другое']), gens.indexOf(t.gen) >= 0 ? t.gen : (t._gen ? 'Другое' : '')) : '') + (!gens || t._gen ? '<input class="inp" id="tg" placeholder="напр. DN8, B9, F30" value="' + esc(t.gen || '') + '">' : '') + '</div>' +
          '<div class="rg-sec">Двигатель</div><div class="rg-box">' + (engs ? chips('engine', engs.concat(['Другой']), engs.indexOf(t.engine) >= 0 ? t.engine : (t._engine ? 'Другой' : '')) : '') + (!engs || t._engine ? '<input class="inp" id="te" placeholder="напр. 2.0 TDI" value="' + esc(t.engine || '') + '">' : '') + '</div>' +
          '<div class="rg-sec">Коробка передач</div><div class="rg-box">' + chips('gear', GEARS, t.gear) + '</div>' + warn +
          '<div class="rg-sec">Эксплуатация</div><div class="rg-box">' + chips('usage', USAGE, t.usage) + '</div>' +
          '<div class="rg-sec">Дополнительно</div><div class="rg-box"><input class="inp" id="tm" inputmode="numeric" placeholder="Модельный год (необязательно)" value="' + esc(t.my || '') + '">' + (S.curMileage(id) ? '' : '<input class="inp" id="tk" inputmode="numeric" placeholder="Текущий пробег, км" style="margin-top:10px">') + '</div>',
        footer: '<button class="btn primary" id="next">Далее</button>'
      });
      setH({
        click: function (e) {
          var b = e.target.closest('[data-k]');
          if (b) { sync(); var v = b.dataset.v, k = b.dataset.k, other = (v === 'Другое' || v === 'Другой'); if (k === 'gen' || k === 'engine') { t['_' + k] = other ? 1 : 0; if (other) { if ((GEN[key] || ENG[key + ' ' + (t.gen || '')] || []).indexOf(t[k]) >= 0) t[k] = ''; } else t[k] = v; } else t[k] = v; return draw(); }
          if (e.target.closest('#next')) { sync(); delete t._gen; delete t._engine; S.putCar(c); go('#/car/' + id + '/setup/history'); }
        }
      });
    }
    function sync() { var g = $('#tg'), en = $('#te'), m = $('#tm'), k = $('#tk'); if (g) t.gen = g.value.trim(); if (en) t.engine = en.value.trim(); if (m) t.my = m.value.trim(); if (k && k.value) { c.mileage = parseInt(k.value.replace(/\s/g, ''), 10) || c.mileage; } }
    draw();
  }
  function setupHistory(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    function draw() {
      var rs = itemsOf(c).map(function (it) { return calc(c, it); });
      page({
        title: 'Новое авто', back: '#/car/' + id + '/setup/tech', right: '<a class="link" href="#/car/' + id + '/setup/result">Пропустить</a>',
        body: steps(3) + '<h2 class="rg-big">Что уже делали?</h2><p class="rg-sub">Примерно, если не помните точно. Это можно уточнить позже</p><div class="rg-g">' +
          rs.map(function (r) {
            var d = r.d, v = !d || d.skip ? '<span class="rg-tag">не помню</span>' : d.never ? '<span class="rg-tag">не меняли</span>' : '<span class="rg-val">' + (d.approx ? '≈ ' : '') + (d.km != null ? fmtN(d.km) + ' км' : fmtD(d.date)) + '</span>';
            return '<button class="rg-row simple" data-it="' + r.it.id + '"><span class="rg-e">' + r.it.e + '</span><div class="rg-m"><div class="rg-h"><b>' + esc(r.it.t) + '</b>' + v + '</div></div></button>';
          }).join('') + '</div>',
        footer: '<button class="btn primary" id="next">Подобрать регламент</button>'
      });
      setH({
        click: function (e) {
          var b = e.target.closest('[data-it]'); if (b) { var it = itemsOf(c).filter(function (x) { return x.id === b.dataset.it; })[0]; return histSheet(c, it, false, draw); }
          if (e.target.closest('#next')) go('#/car/' + id + '/setup/result');
        }
      });
    }
    draw();
  }
  function setupResult(id) {
    var c = S.car(id); if (!c) return go('#/garage');
    var p = tplFor(c), st = function (cls, sym, t, sub) { return '<div class="rg-st"><span class="rg-dot ' + cls + '">' + sym + '</span><div><b>' + t + '</b><small>' + sub + '</small></div></div>'; };
    page({
      title: 'Подбор регламента', back: '#/car/' + id + '/setup/history',
      body: steps(4) + '<div class="rg-car"><b>' + esc(carName(c)) + '</b><small>' + esc([c.year, c.tech && c.tech.engine, c.tech && c.tech.gear].filter(Boolean).join(' · ')) + '</small></div>' +
        '<div class="rg-sec">Что сделано</div><div class="rg-g">' + st('ok', '✓', 'Данные авто сохранены', 'Пробег и история записаны') +
        (p ? st('ok', '✓', 'Руководство производителя найдено', esc(p.title)) + st('ok', '✓', 'Рекомендации сервисов', 'Масло в АКПП: отмечено как совет') + st('ok', '✓', 'Сроки рассчитаны', 'По вашей истории и пробегу')
          : st('ok', '✓', 'Общий ориентир подготовлен', 'Основные замены по времени и пробегу') + st('run', '…', 'Точный регламент для вашего авто', 'Нужно подобрать по руководству производителя') + st('wait', '3', 'Проверка источников', 'Каждая цифра получит пометку об источнике')) + '</div>' +
        (p ? '' : '<div class="rg-note">Точный регламент подберёт Claude: скопируйте запрос и вставьте в чат. Готовый регламент появится в приложении после обновления. Пока можно пользоваться общим ориентиром.</div>'),
      footer: '<button class="btn primary" id="open">Открыть регламент</button>' + (p ? '' : '<button class="btn outline" id="ask">Скопировать запрос для Claude</button>')
    });
    setH({ click: function (e) { if (e.target.closest('#open')) go('#/car/' + id + '/regulation'); if (e.target.closest('#ask')) copyAsk(c); } });
  }

  A.routes.unshift(
    [/^#\/car\/([^/]+)\/regulation$/, regulation],
    [/^#\/car\/([^/]+)\/setup$/, function (id) { go('#/car/' + id + '/setup/tech'); }],
    [/^#\/car\/([^/]+)\/setup\/tech$/, setupTech],
    [/^#\/car\/([^/]+)\/setup\/history$/, setupHistory],
    [/^#\/car\/([^/]+)\/setup\/result$/, setupResult]
  );
  function next(c) {
    var s = summary(c), ord = { over: 0, soon: 1, advice: 1, ok: 2 }, best = null;
    s.rs.forEach(function (r) { if (r.st === 'unknown') return; var w = ord[r.st] * 10 - r.pct; if (!best || w < best.w) best = { w: w, r: r }; });
    if (!best) return { none: 1 };
    return { title: best.r.it.t, text: leftText(best.r), pct: Math.min(1, best.r.pct || 0), st: best.r.st };
  }
  window.MCREG = { next: next,  card: card, summary: summary, askText: askText, tplFor: tplFor, itemsOf: itemsOf, calc: calc };
  if (/^(#\/?(garage)?)?$|^#\/car\/[^/]+(\/(regulation|setup.*))?$/.test(location.hash)) A.render();
})();
