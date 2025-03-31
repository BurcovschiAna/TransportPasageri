import ServiciiComp from "./ServiciiComp";
import Benefits from "./Benefits";
export default function Services(props){
    return (
        <div>
            <ServiciiComp isHomePage={false} telephone={props.telephone}/>
            <Benefits />
        </div>
    );
}