import ServiciiComp from "./ServiciiComp";
import Benefits from "./Benefits";
import { useContext, useEffect } from 'react';
import { TelephoneContext } from "../App";
import { useLocation } from 'react-router-dom';

export default function Services(props) {
    const telephone = useContext(TelephoneContext);
    const location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);           
            if (element) {                
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <ServiciiComp isHomePage={false} telephone={telephone}/>
            <Benefits />
            
        </div>
    );
}