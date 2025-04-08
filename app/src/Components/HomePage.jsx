import banner1 from "../assets/img/Banner1.jpg"
import Viber from "../assets/img/Viber.svg"
import Whatsapp from "../assets/img/Whatsapp.svg"
import Telephone from "../assets/img/Telephone.svg"
import people1 from "../assets/img/people1.jpg"

import Benefits from "./Benefits"
import ServiciiComp from "./ServiciiComp"
import Form from "./Form"

import { useTranslation } from 'react-i18next'; 
import { useContext, useEffect } from 'react';
import { TelephoneContext } from "../App"
const Banner =  (props) => {
    const { t } = useTranslation();
    useEffect(() => {
        const handleScroll = () => {
            const scrollImage = document.querySelector('.scroll-container');
            if (scrollImage) {
                const scrollPosition = window.scrollY;
                scrollImage.style.transform = `translateY(${scrollPosition * -0.3}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
       <div className="banner">
                <div className="scroll-container">
                   <img src={banner1}  className="banner-img"/> 
                </div>
                
                <div className="overlay">
                    <div>
                        <h1>
                            {t("banner")}
                        </h1>
                        <div className="flexbox">
                            <a href={`https://wa.me/${props.telephone}`}
                            className="flexbox btn">
                                <img src={Whatsapp} alt="" />
                                {t("btn")} WhatsApp
                            </a>
                            <a href={`viber://chat?number=${props.telephone}`}
                            className="flexbox btn">
                                <img src={Viber} alt="" />
                                {t("btn")} Viber
                            </a>
                            <a href={`tel:${props.telephone}`} className='btn flexbox'>
                                <img src={Telephone} alt="" />
                                {props.telephone}
                            </a> 
                        </div>
                    </div>
                </div>
            </div> 
    );
    
}

const Reviews = () => {
    const { t } = useTranslation();
    return (
        <div className="wrapper">
            <h1 className="title">
                {t("reviews.title")}
            </h1>
            <div className="reviews-container">
                <div className="review-item">
                    <div className="flexbox">
                        <img src={people1} alt="" />
                        <span className="name">Nume 1</span>
                    </div>
                    <div className="review-text">
                        {t("reviews.message1")}
                    </div>
                </div>
                <div className="review-item">
                    <div className="flexbox">
                        <img src={people1} alt="" />
                        <span className="name">Nume 2</span>
                    </div>
                    <div className="review-text">
                        {t("reviews.message2")}
                    </div>
                </div>
                <div className="review-item">
                    <div className="flexbox">
                        <img src={people1} alt="" />
                        <span className="name">Nume 3</span>
                    </div>
                    <div className="review-text">
                        {t("reviews.message3")}
                    </div>
                </div>
                <div className="review-item">
                    <div className="flexbox">
                        <img src={people1} alt="" />
                        <span className="name">Nume 4</span>
                    </div>
                    <div className="review-text">
                        {t("reviews.message4")}
                    </div>
                </div>
                <div className="review-item">
                    <div className="flexbox">
                        <img src={people1} alt="" />
                        <span className="name">Nume 5</span>
                    </div>
                    <div className="review-text">
                        {t("reviews.message5")}
                    </div>
                </div>
                <div className="review-item">
                    <div className="flexbox">
                        <img src={people1} alt="" />
                        <span className="name">Nume 6</span>
                    </div>
                    <div className="review-text">
                        {t("reviews.message6")}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function HomePage (){
    const telephone = useContext(TelephoneContext)
    return (
        <>
            <Banner telephone={telephone} />
            <ServiciiComp isHomePage={true} telephone={telephone}/>
            <Benefits />
            <Reviews/>
            <Form telephone={telephone}/>
        </>
    );
}