import Bucharest from "../assets/img/Bucuresti.jpg"
import Galata from "../assets/img/Galati.jpg"
import Iasi from "../assets/img/Iasi.jpg"
const data =[
    {
        name: "Cahul - București",
        img: Bucharest,
        route: ["Cahul", "București", "Aeroport"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit maiores enim est laborum, culpa expedita. Praesentium ea omnis velit vel consectetur architecto beatae, deleniti aliquid culpa totam harum quas ad dolorum placeat fugiat iure corrupti corporis tempora, repudiandae minima esse! Dignissimos nemo aliquid obcaecati dolores at nostrum optio corporis!"
    },
    {
        name: "Cahul - Iași",
        img: Iasi,
        route: ["Cahul", "Aeroport", "Iași"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit maiores enim est laborum, culpa expedita. Praesentium ea omnis velit vel consectetur architecto beatae, deleniti aliquid culpa totam harum quas ad dolorum placeat fugiat iure corrupti corporis tempora, repudiandae minima esse! Dignissimos nemo aliquid obcaecati dolores at nostrum optio corporis!"
    },
    {
        name: "Cahul - Galați",
        img: Galata,
        route: ["Cahul", "Galați"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit maiores enim est laborum, culpa expedita. Praesentium ea omnis velit vel consectetur architecto beatae, deleniti aliquid culpa totam harum quas ad dolorum placeat fugiat iure corrupti corporis tempora, repudiandae minima esse! Dignissimos nemo aliquid obcaecati dolores at nostrum optio corporis!"
    }
]

export default function ServiciiComp(props) {
    const isHomePage = props.isHomePage;

    return (
        <>
            <div className="servicii-container">            
                <h1 className="subtitle">Servicii</h1>
                <div className="wrapper">
                    {isHomePage ? 
                        <div className="servicii-home flexbox">
                            {data.map( item => (
                                <div className="servicii-item-home" key={item.name}>
                                    <img src={item.img} alt={item.name} />
                                    <div className="description">
                                        <p>
                                            {item.name}
                                        </p>
                                        <p>
                                            Cursă zilnică
                                        </p>
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