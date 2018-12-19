

const asia = ['Азербайджан', 'Армения', 'Афганистан', 'Бангладеш', 'Бахрейн', 'Бруней', 'Бутан', 'Восточный Тимор', 'Вьетнам', 'Грузия', 'Израиль', 'Индия', 'Индонезия', 'Иордания', 'Ирак', 'Иран', 'Йемен', 'Казахстан', 'Камбоджа', 'Катар', 'Кипр', 'Киргизстан', 'Китай', 'Корея Северная', 'Корея Южная', 'Кувейт', 'Лаос', 'Ливан', 'Малайзия', 'Мальдивы', 'Монголия', 'Мьянма', 'Непал', 'ОАЭ', 'Оман', 'Пакистан', 'Палестина', 'Саудовская Аравия', 'Сингапур', 'Сирия', 'Таджикистан', 'Таиланд', 'Тайвань', 'Туркмения', 'Турция', 'Узбекистан', 'Филиппины', 'Шри-Ланка', 'Япония'];
const asiaCapitals = ['Баку', 'Ереван', 'Кабул', 'Дакка', 'Манама', 'Бандар-Сери-Бегаван', 'Тхимпху', 'Дили', 'Ханой', 'Тбилиси', 'Иерусалим', 'Дели', 'Джакарта', 'Амман', 'Багдад', 'Тегеран', 'Сана', 'Астана', 'Пномпень', 'Доха', 'Никозия', 'Бишкек', 'Пекин', 'Пхеньян', 'Сеул', 'Эль-Кувейт', 'Вьентьян', 'Бейрут', 'Куала-Лумпур', 'Мале', 'Улан-Батор', 'Нейпьидо', 'Катманду', 'Абу-Даби', 'Маскат', 'Исламабад', 'Рамалла', 'Эр-Рияд', 'Сингапур', 'Дамаск', 'Душанбе', 'Бангкок', 'Тайпей', 'Ашхабад', 'Анкаpа', 'Ташкент', 'Манила', 'Коломбо', 'Токио'];
const europe = ['Австрия', 'Албания', 'Андорра', 'Белоруссия', 'Бельгия', 'Болгария', 'Босния и Герцеговина', 'Ватикан', 'Великобритания', 'Венгрия', 'Германия', 'Греция', 'Дания', 'Ирландия', 'Исландия', 'Испания', 'Италия', 'Латвия', 'Литва', 'Лихтенштейн', 'Люксембург', 'Македония', 'Мальта', 'Молдова', 'Монако', 'Нидерланды', 'Норвегия', 'Польша', 'Португалия', 'Российская Федерация', 'Румыния', 'Сан-Марино', 'Сербия', 'Словакия', 'Словения', 'Украина', 'Финляндия', 'Франция', 'Хорватия', 'Черногория', 'Чехия', 'Швейцария', 'Швеция', 'Эстония', 'Косово'];
const europeCapitals = ['Вена', 'Тирана', 'Андорра-ла-Велья', 'Минск', 'Брюссель', 'София', 'Сараево', 'Ватикан', 'Лондон', 'Будапешт', 'Берлин', 'Афины', 'Копенгаген', 'Дублин', 'Рейкьявик', 'Мадрид', 'Рим', 'Рига', 'Вильнюс', 'Вадуц', 'Люксембург', 'Скопье', 'Валетта', 'Кишинев', 'Монако', 'Амстердам', 'Осло', 'Варшава', 'Лиссабон', 'Москва', 'Бухарест', 'Сан-Марино', 'Белград', 'Братислава', 'Любляна', 'Киев', 'Хельсинки', 'Париж', 'Загреб', 'Подгорица', 'Прага', 'Берн', 'Стокгольм', 'Таллинн', 'Приштина'];
const africa = ['Алжир', 'Ангола', 'Бенин', 'Ботсвана', 'Буркина-Фасо', 'Бурунди', 'Габон', 'Гамбия', 'Гана', 'Гвинея', 'Гвинея-Бисау', 'Джибути', 'Египет', 'Замбия', 'Западная Сахара', 'Зимбабве', 'Кабо-Верде', 'Камерун', 'Кения', 'Коморские острова', 'Конго', 'Конго (Дем. Република)', "Кот-д'Ивуар", 'Лесото', 'Либерия', 'Ливия', 'Маврикий', 'Мавритания', 'Мадагаскар', 'Малави', 'Мали', 'Марокко', 'Мозамбик', 'Намибия', 'Нигер', 'Нигерия', 'Руанда', 'Сан-Томе и Принсипи', 'Свазиленд', 'Сейшельские острова', 'Сенегал', 'Сомали', 'Судан', 'Сьерра-Леоне', 'Танзания', 'Того', 'Тунис', 'Уганда', 'ЦАР', 'Чад', 'Экваториальная Гвинея', 'Эритрея', 'Эфиопия', 'ЮАР', 'Южный Судан'];
const africaCapitals = ['Алжир', 'Луанда', 'Порто-Ново', 'Габороне', 'Уагадугу', 'Бужумбура', 'Либревиль', 'Банжул', 'Аккра', 'Конакри', 'Бисау', 'Джибути', 'Каир', 'Лусака', 'Эль-Аюн', 'Хараре', 'Прая', 'Яунде', 'Найроби', 'Морони', 'Браззавиль', 'Киншаса', 'Ямусукро', 'Масеру', 'Монровия', 'Триполи', 'Порт-Луи', 'Нуакшот', 'Антананариву', 'Лилонгве', 'Бамако', 'Рабат', 'Мапуту', 'Виндхук', 'Ниамей', 'Абуджа', 'Кигали', 'Сан-Томе', 'Мбабане', 'Виктория', 'Дакар', 'Могадишо', 'Хаpтум', 'Фpитаун', 'Додома', 'Ломе', 'Тунис', 'Кампала', 'Банги', 'Нджамена', 'Малабо', 'Асмэра', 'Аддис-Абеба', 'Претория', 'Джуба'];
const southAmerica = ['Аргентина', 'Боливия', 'Бразилия', 'Венесуэла', 'Гайана', 'Колумбия', 'Парагвай', 'Перу', 'Суринам', 'Уругвай', 'Чили', 'Эквадор'];
const southAmericaCapitals = ['Буэнос-Айрес', 'Ла-Пас', 'Бразилиа', 'Каракас', 'Джорджтаун', 'Богота', 'Асунсьон', 'Лима', 'Паpамаpибо', 'Монтевидео', 'Сантьяго', 'Кито'];
const northAmerica = ['Антигуа', 'Багамские острова', 'Барбадос', 'Белиз', 'Гаити', 'Гватемала', 'Гондурас', 'Гренада', 'Доминика', 'Доминиканская Республика', 'Канада', 'Коста-Рика', 'Куба', 'Мексика', 'Никарагуа', 'Панама', 'Эль-Сальвадор', 'Сент-Винсент и Гренадины', 'Сент-Кристофер и Невис', 'Сент-Люсия', 'США', 'Тринидад и Тобаго', 'Ямайка'];
const northAmericaCapitals = ['Сент-Джонс', 'Нассау', 'Бриджтаун', 'Бельмопан', 'Порт-о-Пренс', 'Гватемала', 'Тегусигальпа', 'Сент-Джорджес', 'Розо', 'Санто-Доминго', 'Оттава', 'Сан-Хосе', 'Гавана', 'Мехико', 'Манагуа', 'Панама', 'Сан-Сальвадор', 'Кингстаун', 'Бастер', 'Кастри', 'Вашингтон', 'Порт-оф-Спейн', 'Кингстон'];
const oceania = ['Австралия', 'Вануату', 'Кирибати', 'Маршалловы острова', 'Микронезия', 'Науру', 'Новая Зеландия', 'Палау', 'Папуа - Новая Гвинея', 'Самоа', 'Соломоновы острова', 'Тонга', 'Тувалу', 'Фиджи'];
const oceaniaCapitals = ['Канберра', 'Вила', 'Тарава', 'Маджуро', 'Паликир', 'Ярен', 'Веллингтон', 'Корор', 'Порт-Морсби', 'Апиа', 'Хониаpа', 'Нукуалофа', 'Фунафути', 'Сува'];
const allCountries = [];
const allCapitals = [];


const change = [
  { flags: require('../assets/flags/by.png'), country: 'Белоруссия' },
  { flags: require('../assets/flags/ca.png'), country: 'Канада' },
  { flags: require('../assets/flags/co.png'), country: 'Колумбия' },
  { flags: require('../assets/flags/ae.png'), country: 'ОАЭ' },
  { flags: require('../assets/flags/ad.png'), country: 'Андорра' },
  { flags: require('../assets/flags/af.png'), country: 'Афганистан' },
  { flags: require('../assets/flags/ag.png'), country: 'Антигуа' },
  { flags: require('../assets/flags/al.png'), country: 'Албания' },
  { flags: require('../assets/flags/am.png'), country: 'Армения' },
  { flags: require('../assets/flags/ao.png'), country: 'Ангола' },
  { flags: require('../assets/flags/at.png'), country: 'Австрия' },
  { flags: require('../assets/flags/au.png'), country: 'Австралия' },
  { flags: require('../assets/flags/ar.png'), country: 'Аргентина' },
  { flags: require('../assets/flags/az.png'), country: 'Азербайджан' },
  { flags: require('../assets/flags/ba.png'), country: 'Босния и Герцеговина' },
  { flags: require('../assets/flags/bb.png'), country: 'Барбадос' },
  { flags: require('../assets/flags/bd.png'), country: 'Бангладеш' },
  { flags: require('../assets/flags/be.png'), country: 'Бельгия' },
  { flags: require('../assets/flags/bf.png'), country: 'Буркина-Фасо' },
  { flags: require('../assets/flags/bh.png'), country: 'Бахрейн' },
  { flags: require('../assets/flags/bi.png'), country: 'Бурунди' },
  { flags: require('../assets/flags/bj.png'), country: 'Бенин' },
  { flags: require('../assets/flags/bn.png'), country: 'Бруней' },
  { flags: require('../assets/flags/bo.png'), country: 'Боливия' },
  { flags: require('../assets/flags/br.png'), country: 'Бразилия' },
  { flags: require('../assets/flags/bs.png'), country: 'Багамские острова' },
  { flags: require('../assets/flags/bt.png'), country: 'Бутан' },
  { flags: require('../assets/flags/bw.png'), country: 'Ботсвана' },
  { flags: require('../assets/flags/bz.png'), country: 'Белиз' },
  { flags: require('../assets/flags/cd.png'), country: 'Конго (Дем. Република)' },
  { flags: require('../assets/flags/cf.png'), country: 'ЦАР' },
  { flags: require('../assets/flags/cg.png'), country: 'Конго' },
  { flags: require('../assets/flags/ch.png'), country: 'Швейцария' },
  { flags: require('../assets/flags/ci.png'), country: "Кот-д'Ивуар" },
  { flags: require('../assets/flags/cl.png'), country: 'Чили' },
  { flags: require('../assets/flags/cn.png'), country: 'Китай' },
  { flags: require('../assets/flags/cr.png'), country: 'Коста-Рика' },
  { flags: require('../assets/flags/cu.png'), country: 'Куба' },
  { flags: require('../assets/flags/cv.png'), country: 'Кабо-Верде' },
  { flags: require('../assets/flags/cy.png'), country: 'Кипр' },
  { flags: require('../assets/flags/cz.png'), country: 'Чехия' },
  { flags: require('../assets/flags/de.png'), country: 'Германия' },
  { flags: require('../assets/flags/dj.png'), country: 'Джибути' },
  { flags: require('../assets/flags/dk.png'), country: 'Дания' },
  { flags: require('../assets/flags/dm.png'), country: 'Доминика' },
  { flags: require('../assets/flags/do.png'), country: 'Доминиканская Республика' },
  { flags: require('../assets/flags/dz.png'), country: 'Алжир' },
  { flags: require('../assets/flags/ec.png'), country: 'Эквадор' },
  { flags: require('../assets/flags/ee.png'), country: 'Эстония' },
  { flags: require('../assets/flags/eg.png'), country: 'Египет' },
  { flags: require('../assets/flags/eh.png'), country: 'Западная Сахара' },
  { flags: require('../assets/flags/er.png'), country: 'Эритрея' },
  { flags: require('../assets/flags/es.png'), country: 'Испания' },
  { flags: require('../assets/flags/et.png'), country: 'Эфиопия' },
  { flags: require('../assets/flags/fi.png'), country: 'Финляндия' },
  { flags: require('../assets/flags/fj.png'), country: 'Фиджи' },
  { flags: require('../assets/flags/fm.png'), country: 'Микронезия' },
  { flags: require('../assets/flags/fr.png'), country: 'Франция' },
  { flags: require('../assets/flags/ga.png'), country: 'Габон' },
  { flags: require('../assets/flags/gb.png'), country: 'Великобритания' },
  { flags: require('../assets/flags/gd.png'), country: 'Гренада' },
  { flags: require('../assets/flags/ge.png'), country: 'Грузия' },
  { flags: require('../assets/flags/gh.png'), country: 'Гана' },
  { flags: require('../assets/flags/gm.png'), country: 'Гамбия' },
  { flags: require('../assets/flags/gn.png'), country: 'Гвинея' },
  { flags: require('../assets/flags/gq.png'), country: 'Экваториальная Гвинея' },
  { flags: require('../assets/flags/gr.png'), country: 'Греция' },
  { flags: require('../assets/flags/gt.png'), country: 'Гватемала' },
  { flags: require('../assets/flags/gw.png'), country: 'Гвинея-Бисау' },
  { flags: require('../assets/flags/gy.png'), country: 'Гайана' },
  { flags: require('../assets/flags/hn.png'), country: 'Гондурас' },
  { flags: require('../assets/flags/hr.png'), country: 'Хорватия' },
  { flags: require('../assets/flags/ht.png'), country: 'Гаити' },
  { flags: require('../assets/flags/hu.png'), country: 'Венгрия' },
  { flags: require('../assets/flags/id.png'), country: 'Индонезия' },
  { flags: require('../assets/flags/ie.png'), country: 'Ирландия' },
  { flags: require('../assets/flags/il.png'), country: 'Израиль' },
  { flags: require('../assets/flags/in.png'), country: 'Индия' },
  { flags: require('../assets/flags/iq.png'), country: 'Ирак' },
  { flags: require('../assets/flags/ir.png'), country: 'Иран' },
  { flags: require('../assets/flags/is.png'), country: 'Исландия' },
  { flags: require('../assets/flags/it.png'), country: 'Италия' },
  { flags: require('../assets/flags/jm.png'), country: 'Ямайка' },
  { flags: require('../assets/flags/jo.png'), country: 'Иордания' },
  { flags: require('../assets/flags/jp.png'), country: 'Япония' },
  { flags: require('../assets/flags/ke.png'), country: 'Кения' },
  { flags: require('../assets/flags/kg.png'), country: 'Киргизстан' },
  { flags: require('../assets/flags/kh.png'), country: 'Камбоджа' },
  { flags: require('../assets/flags/ki.png'), country: 'Кирибати' },
  { flags: require('../assets/flags/km.png'), country: 'Коморские острова' },
  { flags: require('../assets/flags/kn.png'), country: 'Сент-Кристофер и Невис' },
  { flags: require('../assets/flags/kp.png'), country: 'Корея Северная' },
  { flags: require('../assets/flags/kr.png'), country: 'Корея Южная' },
  { flags: require('../assets/flags/kw.png'), country: 'Кувейт' },
  { flags: require('../assets/flags/kz.png'), country: 'Казахстан' },
  { flags: require('../assets/flags/la.png'), country: 'Лаос' },
  { flags: require('../assets/flags/lb.png'), country: 'Ливан' },
  { flags: require('../assets/flags/lc.png'), country: 'Сент-Люсия' },
  { flags: require('../assets/flags/li.png'), country: 'Лихтенштейн' },
  { flags: require('../assets/flags/lk.png'), country: 'Шри-Ланка' },
  { flags: require('../assets/flags/lr.png'), country: 'Либерия' },
  { flags: require('../assets/flags/ls.png'), country: 'Лесото' },
  { flags: require('../assets/flags/lt.png'), country: 'Литва' },
  { flags: require('../assets/flags/lu.png'), country: 'Люксембург' },
  { flags: require('../assets/flags/lv.png'), country: 'Латвия' },
  { flags: require('../assets/flags/ly.png'), country: 'Ливия' },
  { flags: require('../assets/flags/ma.png'), country: 'Марокко' },
  { flags: require('../assets/flags/md.png'), country: 'Молдова' },
  { flags: require('../assets/flags/me.png'), country: 'Черногория' },
  { flags: require('../assets/flags/mg.png'), country: 'Мадагаскар' },
  { flags: require('../assets/flags/mh.png'), country: 'Маршалловы острова' },
  { flags: require('../assets/flags/mk.png'), country: 'Македония' },
  { flags: require('../assets/flags/ml.png'), country: 'Мали' },
  { flags: require('../assets/flags/mm.png'), country: 'Мьянма' },
  { flags: require('../assets/flags/mn.png'), country: 'Монголия' },
  { flags: require('../assets/flags/mr.png'), country: 'Мавритания' },
  { flags: require('../assets/flags/mt.png'), country: 'Мальта' },
  { flags: require('../assets/flags/mu.png'), country: 'Маврикий' },
  { flags: require('../assets/flags/mv.png'), country: 'Мальдивы' },
  { flags: require('../assets/flags/mw.png'), country: 'Малави' },
  { flags: require('../assets/flags/mx.png'), country: 'Мексика' },
  { flags: require('../assets/flags/my.png'), country: 'Малайзия' },
  { flags: require('../assets/flags/mz.png'), country: 'Мозамбик' },
  { flags: require('../assets/flags/na.png'), country: 'Намибия' },
  { flags: require('../assets/flags/ne.png'), country: 'Нигер' },
  { flags: require('../assets/flags/ng.png'), country: 'Нигерия' },
  { flags: require('../assets/flags/ni.png'), country: 'Никарагуа' },
  { flags: require('../assets/flags/nl.png'), country: 'Нидерланды' },
  { flags: require('../assets/flags/no.png'), country: 'Норвегия' },
  { flags: require('../assets/flags/np.png'), country: 'Непал' },
  { flags: require('../assets/flags/nr.png'), country: 'Науру' },
  { flags: require('../assets/flags/nz.png'), country: 'Новая Зеландия' },
  { flags: require('../assets/flags/om.png'), country: 'Оман' },
  { flags: require('../assets/flags/pa.png'), country: 'Панама' },
  { flags: require('../assets/flags/pe.png'), country: 'Перу' },
  { flags: require('../assets/flags/pg.png'), country: 'Папуа - Новая Гвинея' },
  { flags: require('../assets/flags/ph.png'), country: 'Филиппины' },
  { flags: require('../assets/flags/pk.png'), country: 'Пакистан' },
  { flags: require('../assets/flags/pl.png'), country: 'Польша' },
  { flags: require('../assets/flags/pt.png'), country: 'Португалия' },
  { flags: require('../assets/flags/pw.png'), country: 'Палау' },
  { flags: require('../assets/flags/py.png'), country: 'Парагвай' },
  { flags: require('../assets/flags/qa.png'), country: 'Катар' },
  { flags: require('../assets/flags/ro.png'), country: 'Румыния' },
  { flags: require('../assets/flags/rs.png'), country: 'Сербия' },
  { flags: require('../assets/flags/mc.png'), country: 'Монако' },
  { flags: require('../assets/flags/ru.png'), country: 'Российская Федерация' },
  { flags: require('../assets/flags/rw.png'), country: 'Руанда' },
  { flags: require('../assets/flags/sa.png'), country: 'Саудовская Аравия' },
  { flags: require('../assets/flags/sb.png'), country: 'Соломоновы острова' },
  { flags: require('../assets/flags/sc.png'), country: 'Сейшельские острова' },
  { flags: require('../assets/flags/sd.png'), country: 'Судан' },
  { flags: require('../assets/flags/se.png'), country: 'Швеция' },
  { flags: require('../assets/flags/sg.png'), country: 'Сингапур' },
  { flags: require('../assets/flags/si.png'), country: 'Словения' },
  { flags: require('../assets/flags/sk.png'), country: 'Словакия' },
  { flags: require('../assets/flags/sl.png'), country: 'Сьерра-Леоне' },
  { flags: require('../assets/flags/sm.png'), country: 'Сан-Марино' },
  { flags: require('../assets/flags/sn.png'), country: 'Сенегал' },
  { flags: require('../assets/flags/so.png'), country: 'Сомали' },
  { flags: require('../assets/flags/sr.png'), country: 'Суринам' },
  { flags: require('../assets/flags/st.png'), country: 'Сан-Томе и Принсипи' },
  { flags: require('../assets/flags/sv.png'), country: 'Эль-Сальвадор' },
  { flags: require('../assets/flags/sy.png'), country: 'Сирия' },
  { flags: require('../assets/flags/td.png'), country: 'Чад' },
  { flags: require('../assets/flags/tg.png'), country: 'Того' },
  { flags: require('../assets/flags/th.png'), country: 'Таиланд' },
  { flags: require('../assets/flags/tj.png'), country: 'Таджикистан' },
  { flags: require('../assets/flags/tl.png'), country: 'Восточный Тимор' },
  { flags: require('../assets/flags/tm.png'), country: 'Туркмения' },
  { flags: require('../assets/flags/tn.png'), country: 'Тунис' },
  { flags: require('../assets/flags/to.png'), country: 'Тонга' },
  { flags: require('../assets/flags/tr.png'), country: 'Турция' },
  { flags: require('../assets/flags/tt.png'), country: 'Тринидад и Тобаго' },
  { flags: require('../assets/flags/tv.png'), country: 'Тувалу' },
  { flags: require('../assets/flags/tw.png'), country: 'Тайвань' },
  { flags: require('../assets/flags/tz.png'), country: 'Танзания' },
  { flags: require('../assets/flags/ua.png'), country: 'Украина' },
  { flags: require('../assets/flags/ug.png'), country: 'Уганда' },
  { flags: require('../assets/flags/us.png'), country: 'США' },
  { flags: require('../assets/flags/uy.png'), country: 'Уругвай' },
  { flags: require('../assets/flags/uz.png'), country: 'Узбекистан' },
  { flags: require('../assets/flags/va.png'), country: 'Ватикан' },
  { flags: require('../assets/flags/vc.png'), country: 'Сент-Винсент и Гренадины' },
  { flags: require('../assets/flags/ve.png'), country: 'Венесуэла' },
  { flags: require('../assets/flags/vn.png'), country: 'Вьетнам' },
  { flags: require('../assets/flags/vu.png'), country: 'Вануату' },
  { flags: require('../assets/flags/ws.png'), country: 'Самоа' },
  { flags: require('../assets/flags/ye.png'), country: 'Йемен' },
  { flags: require('../assets/flags/za.png'), country: 'ЮАР' },
  { flags: require('../assets/flags/zm.png'), country: 'Замбия' },
  { flags: require('../assets/flags/zw.png'), country: 'Зимбабве' },
  { flags: require('../assets/flags/ks.png'), country: 'Косово' },
		    ];

for (let i = 0; i < asia.length; i++) {
  allCountries.push(asia[i]);
  allCapitals.push(asiaCapitals[i]);
}

for (let i = 0; i < europe.length; i++) {
  allCountries.push(europe[i]);
  allCapitals.push(europeCapitals[i]);
}

for (let i = 0; i < africa.length; i++) {
  allCountries.push(africa[i]);
  allCapitals.push(africaCapitals[i]);
}

for (let i = 0; i < southAmerica.length; i++) {
  allCountries.push(southAmerica[i]);
  allCapitals.push(southAmericaCapitals[i]);
}

for (let i = 0; i < northAmerica.length; i++) {
  allCountries.push(northAmerica[i]);
  allCapitals.push(northAmericaCapitals[i]);
}

for (let i = 0; i < oceania.length; i++) {
  allCountries.push(oceania[i]);
  allCapitals.push(oceaniaCapitals[i]);
}

for (const key in change) {
  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i] === change[key].country) {
      change[key].capital = allCapitals[i];
      break;
    }
  }
}

const asiaChange = [];

for (let i = 0; i < asia.length; i++) {
  for (let j = 0; j < change.length; j++) {
    if (change[j].country === asia[i]) {
      asiaChange.push(change[j]);
    }
  }
}

const europeChange = [];

for (let i = 0; i < europe.length; i++) {
  for (let j = 0; j < change.length; j++) {
    if (change[j].country === europe[i]) {
      europeChange.push(change[j]);
    }
  }
}

const africaChange = [];

for (let i = 0; i < africa.length; i++) {
  for (let j = 0; j < change.length; j++) {
    if (change[j].country === africa[i]) {
      africaChange.push(change[j]);
    }
  }
}

const southAmericaChange = [];

for (let i = 0; i < southAmerica.length; i++) {
  for (let j = 0; j < change.length; j++) {
    if (change[j].country === southAmerica[i]) {
      southAmericaChange.push(change[j]);
    }
  }
}

const northAmericaChange = [];

for (let i = 0; i < northAmerica.length; i++) {
  for (let j = 0; j < change.length; j++) {
    if (change[j].country === northAmerica[i]) {
      northAmericaChange.push(change[j]);
    }
  }
}

const oceaniaChange = [];

for (let i = 0; i < oceania.length; i++) {
  for (let j = 0; j < change.length; j++) {
    if (change[j].country === oceania[i]) {
      oceaniaChange.push(change[j]);
    }
  }
}

const countriesAll = change.concat();
const countriesCopyAll = change.concat();


export {
  countriesAll as fullCounties, countriesCopyAll as countriesCopy, asiaChange,
  europeChange, africaChange, southAmericaChange, northAmericaChange, oceaniaChange,
};
