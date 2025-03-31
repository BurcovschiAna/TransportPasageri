import Bucharest from "../assets/img/Bucuresti.jpg";
import Galata from "../assets/img/Galati.jpg";
import Iasi from "../assets/img/Iasi.jpg";
import Whatsapp from "../assets/img/Whatsapp.svg";
import { useTranslation } from 'react-i18next'; 

export default function ServiciiComp(props) {
    const { t } = useTranslation(); 

    const data = [
        {
            name: t("services.route_short.0"),
            img: Bucharest,
            route: t("services.route_long.0", { returnObjects: true }), 
            descriptionShort: t("services.description_short"),
            description: t("services.description_long.0")
        },
        {
            name: t("services.route_short.1"),
            img: Iasi,
            route: t("services.route_long.1", { returnObjects: true }), 
            descriptionShort: t("services.description_short"),
            description: t("services.description_long.1")
        },
        {
            name: t("services.route_short.2"),
            img: Galata,
            route: t("services.route_long.2", { returnObjects: true }), 
            descriptionShort: t("services.description_short"),
            description: t("services.description_long.2")
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
                                        <p>
                                             {item.descriptionShort}
                                        </p>
                                        <a href={`tel:${props.telephone}`} className="btn flexbox">
                                            <img src={Whatsapp} alt="WhatsApp"/>
                                            {props.telephone}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        : 
                        <div className="servicii-servicii">
                            {data.map((item, index) => (
                                <div key={index} className="servicii-item-servicii flexbox">
                                    <div>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div className="description">
                                        <h1 className="subtitle">
                                            {item.name}
                                        </h1>
                                        <p>
                                            {item.description}
                                        </p>
                                        <p>
                                            {t("services.description_short")} 
                                        </p>
                                        <ul>
                                            {item.route.map((route, routeIndex) => (
                                                <li className="route" key={routeIndex}>
                                                    {route}
                                                </li>
                                            ))}
                                        </ul>
                                        <a href={`tel:${props.telephone}`} className="btn flexbox">
                                            <img src={Whatsapp} alt="WhatsApp"/>
                                            {props.telephone}
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
