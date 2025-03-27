import Bucharest from "../assets/img/Bucuresti.jpg"
import Galata from "../assets/img/Galati.jpg"
import Iasi from "../assets/img/Iasi.jpg"
import Whatsapp from "../assets/img/Whatsapp.svg";
const data =[
    {
        name: "Transport Cahul - București",
        img: Bucharest,
        route: ["Cahul", "București", "Aeroport"],
        descriptionShort: "Transport pasageri zilnic. Pentru informatii suplimentare contactați-ne după următorul număr.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit maiores enim est laborum, culpa expedita. Praesentium ea omnis velit vel consectetur architecto beatae, deleniti aliquid culpa totam harum quas ad dolorum placeat fugiat iure corrupti corporis tempora, repudiandae minima esse! Dignissimos nemo aliquid obcaecati dolores at nostrum optio corporis!"
    },
    {
        name: "Transport Cahul - Iași",
        img: Iasi,
        route: ["Cahul", "Aeroport", "Iași"],
        descriptionShort: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit maiores enim est laborum, culpa expedita. Praesentium ea omnis velit vel consectetur architecto beatae, deleniti aliquid culpa totam harum quas ad dolorum placeat fugiat iure corrupti corporis tempora, repudiandae minima esse! Dignissimos nemo aliquid obcaecati dolores at nostrum optio corporis!"
    },
    {
        name: "Transport Cahul - Galați",
        img: Galata,
        route: ["Cahul", "Galați"],
        descriptionShort: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit maiores enim est laborum, culpa expedita. Praesentium ea omnis velit vel consectetur architecto beatae, deleniti aliquid culpa totam harum quas ad dolorum placeat fugiat iure corrupti corporis tempora, repudiandae minima esse! Dignissimos nemo aliquid obcaecati dolores at nostrum optio corporis!"
    }
]

export default function ServiciiComp(props) {
    const isHomePage = props.isHomePage;

    return (
        <>
            <div className="servicii-container">            
                <h1 className="title">Servicii</h1>
                <div className="wrapper">
                    {isHomePage ? 
                        <div className="servicii-home flexbox">
                            {data.map( item => (
                                <div className="servicii-item-home" key={item.name}>
                                    <img src={item.img} alt={item.name} />
                                    <div className="description">
                                        <p className="subtitle">
                                            {item.name}
                                        </p>
                                        <p>
                                             {item.descriptionShort}
                                        </p>
                                        <div className="btn">
                                            <img src={Whatsapp} alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                        : 
                        <div className="servicii-servicii">
                            {data.map( item => (
                                <div key={item.name} className="servicii-item-servicii flexbox">
                                    <div>
                                        <img src={item.img} />
                                    </div>
                                    <div className="description">
                                        <h1 className="subtitle">
                                            {item.name}
                                        </h1>
                                        <p>
                                            {item.description}
                                        </p>
                                        
                                        <ul>
                                            {item.route.map(route => (
                                                <li className="route" key={route}>
                                                    {route}
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            Orar flexibil
                                        </p>
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