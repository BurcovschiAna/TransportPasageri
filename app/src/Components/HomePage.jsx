import banner1 from "../assets/img/Banner1.jpg"
import banner2 from "../assets/img/banner6.png"
import Viber from "../assets/img/Viber.svg"
import Whatsapp from "../assets/img/Whatsapp.svg"
import Telephone from "../assets/img/Telephone.svg"
import people1 from "../assets/img/people1.jpg"

import Benefits from "./Benefits"
import ServiciiComp from "./ServiciiComp"
import Form from "./Form"

import { useTranslation } from 'react-i18next'; 
import { useState, useContext, useEffect } from 'react';
import { TelephoneContext } from "../App"
const Banner = (props) => {
    const { t } = useTranslation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollImage = document.querySelector('.scroll-container');
            if (scrollImage) {
                const scrollPosition = window.scrollY;
                scrollImage.style.transform = `translateY(${scrollPosition * -0.2}px)`;
            }
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth); 
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    return (
        <div className="banner">
            <div className="scroll-container">
                <img src={windowWidth > 700 ? banner1 : banner2} className="banner-img" /> 
            </div>
            <div className="overlay">
                <div>
                    <h1>{t("banner")}</h1>
                    <div className="flexbox">
                        <a href={`https://wa.me/${props.telephone}`} className="flexbox btn">
                            <img src={Whatsapp} alt="" />
                            {t("btn")} WhatsApp
                        </a>
                        <a href={`viber://chat?number=${props.telephone}`} className="flexbox btn">
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
    const data = [
        {
            reviewImg: people1,
            reviewName : t("reviews.reviews1.name"),
            reviewMessage: t("reviews.reviews1.message")
        },
        {
            reviewImg: people1,
            reviewName : t("reviews.reviews2.name"),
            reviewMessage: t("reviews.reviews2.message")
        },
        {
            reviewImg: people1,
            reviewName : t("reviews.reviews3.name"),
            reviewMessage: t("reviews.reviews3.message")
        },
        {
            reviewImg: people1,
            reviewName : t("reviews.reviews4.name"),
            reviewMessage: t("reviews.reviews4.message")
        },
        {
            reviewImg: people1,
            reviewName : t("reviews.reviews5.name"),
            reviewMessage: t("reviews.reviews5.message")
        },
        {
            reviewImg: people1,
            reviewName : t("reviews.reviews6.name"),
            reviewMessage: t("reviews.reviews6.message")
        }
    ]
    return (
        <div className="wrapper">
            <h1 className="title">
                {t("reviews.title")}
            </h1>
            <div className="reviews-container flexbox">                
                {data.map((item) => (
                    <div className="review-item" key={item.reviewName}>
                        <div className="flexbox">
                            <img src={item.reviewImg} alt="" />
                            <div className="name">
                                {item.reviewName}
                            </div>
                        </div>
                        <div className="review-text">
                            {item.reviewMessage}
                        </div>
                    </div>
                ))}
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