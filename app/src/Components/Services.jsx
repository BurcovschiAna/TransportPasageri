import ServiciiComp from "./ServiciiComp";
import Benefits from "./Benefits";

import { useContext } from 'react';
import { TelephoneContext } from "../App"
export default function Services(props){
    const telephone = useContext(TelephoneContext)
    return (
        <div>
            <ServiciiComp isHomePage={false} telephone={telephone}/>
            <Benefits />
        </div>
    );
}