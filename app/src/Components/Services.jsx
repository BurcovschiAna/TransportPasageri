import ServiciiComp from "./ServiciiComp";
import Benefits from "./Benefits";
export default function Services(){
    return (
        <div>
            <ServiciiComp isHomePage={false} />
            <Benefits />
        </div>
    );
}