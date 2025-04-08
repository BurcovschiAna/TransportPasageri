import Bucharest from "../assets/img/Bucuresti.jpg";
import Galata from "../assets/img/Galati.jpg";
import Iasi from "../assets/img/Iasi.jpg";
import Bacau from "../assets/img/Bacau.jpg"
import Whatsapp from "../assets/img/Whatsapp.svg";
import { useTranslation } from 'react-i18next'; 

export default function ServiciiComp(props) {
    const { t } = useTranslation(); 

    const data = [
        {
            name: t("services.route_short.0"),
            img: Bucharest,
            route: t("services.route_long.0", { returnObjects: true }),
            description: t("services.description_long.0")
        },
        {
            name: t("services.route_short.1"),
            img: Iasi,
            route: t("services.route_long.1", { returnObjects: true }),
            description: t("services.description_long.1")
        },
        {
            name: t("services.route_short.2"),
            img: Galata,
            route: t("services.route_long.2", { returnObjects: true }),
            description: t("services.description_long.2")
        },
        {
            name: t("services.route_short.3"),
            img: Bacau,
            route: t("services.route_long.3", { returnObjects: true }),
            description: t("services.description_long.3")
        }
    ];

    const isHomePage = props.isHomePage;

    return (
        <>
            <div className="servicii-container">            
                <h1 className="title">
                    {t("services.title")}
                </h1>
                <div className="wrapper">
                    {isHomePage ? 
                        <div className="servicii-home flexbox">
                            {data.map((item, index) => (
                                <div className="servicii-item-home" key={index}>
                                    <img src={item.img} alt={item.name} />
                                    <div className="description">
                                        <p className="subtitle">
                                            {item.name}
                                        </p>
                                        {/* <a href={`https://wa.me/${props.telephone}`}
                                        className="flexbox btn">
                                            <img src={Whatsapp} alt="" />
                                            Contactati-ne pe WhatsApp
                                        </a> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        : 
                        <div className="servicii-servicii">
                            {data.map((item, index) => (
                                <div key={index} className="servicii-item-servicii flexbox">
                                    <div className="item-img">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div className="description">
                                        <h1 className="subtitle">
                                            {item.name}
                                        </h1>
                                        <p>
                                            {item.description}
                                        </p>
                                        <ul>
                                            {item.route.map((route, routeIndex) => (
                                                <li className="route" key={routeIndex}>
                                                    {route}
                                                </li>
                                            ))}
                                        </ul>
                                        <a href={`https://wa.me/${props.telephone}`}
                                        className="flexbox btn">
                                            <img src={Whatsapp} alt="" />
                                            {t("btn")} WhatsApp
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    }
                </div>
            </div>
        </>
    );
}
