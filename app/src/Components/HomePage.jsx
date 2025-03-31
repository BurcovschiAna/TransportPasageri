import banner1 from "../assets/img/Banner1.jpg"
import Reviews from "./Reviews"

import Benefits from "./Benefits"
import ServiciiComp from "./ServiciiComp"
import Form from "./Form"

import { useTranslation } from 'react-i18next'; 
const Banner =  () => {
    const { t } = useTranslation();
    window.addEventListener('scroll', () => {
        const scrollImage = document.querySelector('.scroll-container');
        const scrollPosition = window.scrollY;
        scrollImage.style.transform = `translateY(${scrollPosition * -0.3}px)`;
    });
    return (
       <div className="banner">
                <div className="scroll-container">
                   <img src={banner1} /> 
                </div>
                
                <div className="overlay">
                    <h1>
                        {t("banner")}
                    </h1>
                </div>
            </div> 
    );
    
}
export default function HomePage (props){
    return (
        <>
            <Banner />
            
           
            <ServiciiComp isHomePage={true} telephone={props.telephone}/>
            <Benefits />
            <Reviews/>
            <Form />
        </>
    );
}