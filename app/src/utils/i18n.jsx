import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
    ro: {
        translation: {
            menu: {
                home: "Acasă",
                contacts: "Contacte",
                services: "Servicii"
            },
            banner: "Transport pasageri Sergiu",
            services: {
                title: "Servicii",
                route_short: [
                    "Transport Cahul-București", 
                    "Transport Cahul-Iași", 
                    "Transport Cahul-Galați"  
                ],
                route_long:  [
                    ["Cahul", "Otopeni", "Aeroport Henri Coandă", "Băneasa" ,"București"], 
                    ["Cahul", "Aeroport", "Iași"], 
                    ["Cahul", "Galați"]
                ],
                description_short: "Transport pasageri zilnic la / de la. Pentru destinații suplimentare, contactați-ne după numarul următor.",
                description_long: [
                    "Rute confortabile și rapide din Cahul spre București, trecând prin Aeroportul Otopeni și Băneasa, pentru a asigura o călătorie plăcută și fără stres.",
                    "Transport direct din Cahul către Aeroportul Iași și autogara din Iași, pentru a ajunge rapid și comod, ideal pentru călătorii de afaceri sau vacanțe.",
                    "Călătorii rapide și accesibile din Cahul către Galați, oferind servicii excelente și un orar flexibil pentru a se adapta nevoilor pasagerilor."
                ],
            },
            benefits: [
                "Comfort în timpul călătoriei",
                "Bagaj gratuit pentru toți pasagerii",
                "Orar flexibil",
                "Siguranță în timpul călătoriei"
            ],
            recinzii: [],
            form: {
                name: "Nume",
                email: "Email",
                telephone: "Telefon",
                select: "Selectează",
                option: ["Cahul", "București", "Galați", "Iași"],
                btn: "Trimite"
            },
            contacts: {
                message1: "Vă mulțumim că ați ales Transport Pasageri Sergiu! Suntem aici pentru a vă oferi cele mai bune servicii de transport, adaptate nevoilor dumneavoastră. Dacă aveți întrebări, sugestii sau doriți să solicitați o ofertă, nu ezitați să ne contactați.",
                address: "Adresă",
                message2: "Completați formularul de mai jos și un reprezentant al companiei noastre vă va contacta în cel mai scurt timp posibil."
            },
            copyrights: "© 2025 Dezvoltat de Ana Burcovschi. Toate drepturile rezervate."
        }
        

    },
    ru: {
        translation: {
            menu: {
                home: "Дома",
                contacts: "Контакты",
                services: "Услуги"
            },
            banner: "Транспорт пассажиров Сергий",
            services: {
                title: "Услуги",
                route_short: [
                    "Транспорт Кахул-Бухарест", 
                    "Транспорт Кахул-Яссы", 
                    "Транспорт Кахул-Галац"  
                ],
                route_long:  [
                    ["Кахул", "Отопени", "Аэропорт Анри Коанда", "Бэнеаса", "Бухарест"], 
                    ["Кахул", "Аэропорт", "Яссы"], 
                    ["Кахул", "Галац"]
                ],
                description_short: "Ежедневный транспорт пассажиров до / из. Для дополнительных направлений свяжитесь с нами по следующему номеру.",
                description_long: [
                    "Удобные и быстрые маршруты из Кагула в Бухарест, проходящие через аэропорт Отопени и Бэняса, гарантируют приятное и беззаботное путешествие.",
                    "Прямой транспорт из Кагула в аэропорт Яссы и на автовокзал Яссы, чтобы добраться быстро и с комфортом, идеально подходит для деловых поездок или отпуска.",
                    "Быстрые и доступные поездки из Кагула в Галац с превосходным сервисом и гибким расписанием, подстраивающимся под потребности пассажиров."
                ],
                
            },
            benefits: [
                "Комфорт во время поездки",
                "Бесплатный багаж для всех пассажиров",
                "Гибкий график",
                "Безопасность во время поездки"
            ],
            recinzii: [],
            form: {
                name: "Имя",
                email: "Электронная почта",
                telephone: "Телефон",
                select: "Выберите",
                option: ["Кахул", "Бухарест", "Галац", "Яссы"],
                btn: "Отправить"
            },
            contacts: {
                message1: "Спасибо, что выбрали Транспорт Пассажиров Сергий! Мы здесь, чтобы предоставить вам лучшие транспортные услуги, адаптированные к вашим потребностям. Если у вас есть вопросы, предложения или вы хотите запросить предложение, не стесняйтесь связаться с нами.",
                address: "Адрес",
                message2: "Заполните форму ниже, и представитель нашей компании свяжется с вами в кратчайшие сроки."
            },
            copyrights: "© 2025 Разработано Анной Бурковски. Все права защищены."
        }
    }
}
i18n.use(initReactI18next).init({
    resources,
    lng: "ro",
    interpolation: { escapeValue: false },
})
export default i18n;