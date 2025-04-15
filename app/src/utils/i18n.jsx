import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    ro: {
        translation: {
            menu: {
                logo: "Transport MD-RO",
                home: "Acasă",
                contacts: "Contacte",
                services: "Servicii"
            },
            btn: "Scrieți în",
            banner: "Transport pasageri zilnic la / de la Cahul - aeroport/oraș București, Cahul - aeroport/oras Iași, Cahul - Galați, Cahul - Bacău. Pentru destinații suplimentare contactați-ne după numărul următor.",
            services: {
                title: "Servicii",
                route_short: [
                    "Cahul-București", 
                    "Cahul-Iași", 
                    "Cahul-Galați",
                    "Cahul-Bacău" 
                ],
                route_long:  [
                    ["Cahul", "Otopeni", "Aeroport Henri Coandă", "Băneasa" ,"București"], 
                    ["Cahul",  "La cererea clinetului: Cantemir" , "La cererea clinetului: Leova", "Aeroport Iași", "Iași"], 
                    ["Cahul", "Bacău"],
                    ["Cahul", "Galați"]
                ],
                description_long: [
                    "Transportul pasagerilor se efectuează zilnic între Cahul și București cu opriri convenabile la aeroporturile Otopeni Henri Coandă și Băneasa. Studenții beneficiază de reduceri, ceea ce face călătoria mai accesibilă pentru tineri. La rezervare, aveți opțiunea de a indica ora dorită de sosire în București, în cazul în care destinația nu este aeroportul. Ora de plecare se adaptează la programul zborului, respectând regula „2-3 ore înainte de decolare”, asigurându-vă astfel că ajungeți la timp pentru toate formalitățile de îmbarcare și călătorie.",
                    "Transportul pasagerilor se efectuează zilnic între  Cahul și Iași oferă un serviciu eficient, cu opriri la cererea clientului în Cantemir și Leova, între orele 8:00 și 20:00. De asemenea, se fac opriri la aeroportul din Iași, facilitând accesul călătorilor. Studenții beneficiază de reduceri, ceea ce face călătoria mai accesibilă. La rezervare, aveți opțiunea de a indica ora dorită de sosire în Iași, în cazul în care destinația nu este aeroportul. Ora de plecare se va adapta la programul zborului, respectând regula „2-3 ore înainte de decolare” pentru confortul tuturor pasagerilor.",
                    "Transportul pasagerilor se efectuează zilnic între Cahul și Bacău, oferind un serviciu eficient și confortabil. Studenții beneficiază de reduceri, făcând călătoria mai accesibilă. La rezervare, aveți opțiunea de a indica ora dorită de sosire în Bacău, pentru a se adapta programului dumneavoastră. Acest serviciu asigură o experiență plăcută și fără stres, facilitând accesul rapid la destinație și respectând nevoile tuturor călătorilor.",
                    "Transportul pasagerilor se desfășoară zilnic între Cahul și Galați, asigurând un serviciu de calitate. Studenții pot beneficia de reduceri, ceea ce face călătoria mai convenabilă. La rezervare, aveți posibilitatea de a specifica ora dorită de sosire în Galați, pentru a se potrivi cu programul dumneavoastră. Această opțiune oferă flexibilitate și confort, garantând o călătorie plăcută și eficientă pentru toți pasagerii."
                ],
            },
            benefits: "Beneficii",
            benefits_array:  [
                "Comfort în timpul călătoriei",
                "Bagaj gratuit pentru toți pasagerii",
                "Orar flexibil",
                "Siguranță în timpul călătoriei",
                "Scaune auto pentru siguranța copiilor"
            ],
            reviews: {
                title: "Recenzii",
                reviews1: {
                    name: "Nume 1",
                    message: "Lorem sum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews2: {
                    name: "Nume 2",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews3: {
                    name: "Nume 3",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews4: {
                    name: "Nume 4",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews5: {
                    name: "Nume 5",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews6: {
                    name: "Nume 6",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
            },
            about_us: {
                title: "Despre noi",
                message: [
                    "Compania „Transport MD-RO” oferă servicii de transport pasageri zilnic între Cahul, Moldova și diverse destinații din România, inclusiv București, Iași, Galați și Bacău. Ne mândrim cu un serviciu sigur și eficient, adaptat nevoilor clienților noștri. Oferim confort sporit în timpul călătoriei, cu opțiuni de bagaj gratuit pentru toți pasagerii și scaune auto pentru siguranța copiilor.",
                    "La fiecare rezervare, pasagerii pot specifica ora dorită de sosire, asigurându-se astfel că ajung la timp pentru toate formalitățile de îmbarcare. Beneficiile noastre includ un orar flexibil, reduceri pentru studenți și un angajament ferm față de siguranța călătorilor.",
                    "Ne străduim să oferim o experiență plăcută și fără stres, adaptându-ne la programul zborurilor și nevoile fiecărui pasager. Contactați-ne pentru mai multe informații și pentru a rezerva călătoria dumneavoastră. „Transport MD-RO” este alegerea ideală pentru o călătorie confortabilă și sigură între Moldova și România."
                ]
            },
            form: {
                message: "Aveți vreo întrebare?",
                contact: "Contactați-ne în orice mod convenabil pentru dvs"
            },
            copyrights: "© 2025  Toate drepturile rezervate."
        }
    },
    
    ru: {
        translation: {
            menu: {
                logo: "Транспорт МД-РО",
                home: "Главная",
                contacts: "Контакты",
                services: "Услуги"
            },
            btn: "Напишите на",
            banner: "Транспортировка пассажиров ежедневно из/в Кахул - аэропорт/город Бухарест, Кахул - аэропорт/город Яссы, Кахул - Галац, Кахул - Бакэу. Для дополнительных направлений свяжитесь с нами по следующему номеру.",
            services: {
                title: "Услуги",
                route_short: [
                    "Транспорт Кахул-Бухарест",
                    "Транспорт Кахул-Яссы",
                    "Транспорт Кахул-Галац",
                    "Транспорт Кахул-Бакэу"
                ],
                route_long: [
                    ["Кахул", "Отопени", "Аэропорт имени Генри Коанды", "Банеаса", "Бухарест"],
                    ["Кахул", "По запросу клиента: Кантемир", "По запросу клиента: Лева", "Аэропорт Яссы", "Яссы"],
                    ["Кахул", "Бакэу"],
                    ["Кахул", "Галац"]
                ],
                description_long: [
                    "Транспортировка пассажиров осуществляется ежедневно между Кахулом и Бухарестом с удобными остановками в аэропортах Отопени имени Генри Коанды и Банеаса. Студенты имеют право на скидки, что делает поездку более доступной для молодежи. При бронировании вы можете указать желаемое время прибытия в Бухарест, если пункт назначения не является аэропортом. Время отправления адаптируется к расписанию рейса, соблюдая правило «2-3 часа до вылета», что гарантирует, что вы прибудете вовремя для всех формальностей перед посадкой и путешествием.",
                    "Транспортировка пассажиров осуществляется ежедневно между Кахулом и Яссами, предлагая эффективный сервис с остановками по запросу клиента в Кантемире и Леве с 8:00 до 20:00. Также предусмотрены остановки в аэропорту Ясс, что облегчает доступ для путешественников. Студенты имеют право на скидки, что делает поездку более доступной. При бронировании вы можете указать желаемое время прибытия в Яссы, если пункт назначения не является аэропортом. Время отправления будет адаптировано к расписанию рейса, соблюдая правило «2-3 часа до вылета» для удобства всех пассажиров.",
                    "Транспортировка пассажиров осуществляется ежедневно между Кахулом и Бакэу, предлагая эффективный и комфортный сервис. Студенты имеют право на скидки, что делает поездку более доступной. При бронировании вы можете указать желаемое время прибытия в Бакэу, чтобы оно соответствовало вашему расписанию. Эта услуга обеспечивает приятный и безстрессовый опыт, облегчая быстрый доступ к месту назначения и учитывая потребности всех путешественников.",
                    "Транспортировка пассажиров осуществляется ежедневно между Кахулом и Галацем, обеспечивая качественный сервис. Студенты могут воспользоваться скидками, что делает поездку более удобной. При бронировании вы можете указать желаемое время прибытия в Галац, чтобы оно соответствовало вашему расписанию. Эта опция предоставляет гибкость и комфорт, гарантируя приятное и эффективное путешествие для всех пассажиров."
                ]
            },
            benefits: "Beneficii",
            benefits_array: [
                "Комфорт во время поездки",
                "Бесплатный багаж для всех пассажиров",
                "Гибкий график",
                "Безопасность во время поездки",
                "Детские кресла для безопасности детей"
            ],
            reviews: {
                title: "Отзывы",
                reviews1: {
                    name: "Nume 1",
                    message: "Lorem sum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews2: {
                    name: "Nume 2",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews3: {
                    name: "Nume 3",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews4: {
                    name: "Nume 4",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews5: {
                    name: "Nume 5",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
                reviews6: {
                    name: "Nume 6",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit fugiat nam voluptatibus non praesentium incidunt soluta sequi culpa impedit dolor ipsum, excepturi provident recusandae repellendus ratione dolores ipsa eum."
                },
            },
            form: {
                message: "У вас есть вопросы?",
                contact: "Свяжитесь с нами любым удобным для вас способом"
            },
            copyrights: "© 2025 Все права защищены."
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "ro",
    interpolation: { escapeValue: false },
})
export default i18n;