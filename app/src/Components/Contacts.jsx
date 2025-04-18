import Form from "./Form";
import { useContext } from 'react';
import { useTranslation } from 'react-i18next'; 
import { TelephoneContext } from "../App"
import about_us from "../assets/img/About us.jpg"
const AboutUs = () => {
    const { t } = useTranslation(); 
    return (
        <div className="wrapper">
            <h1 className="title">
                {t("about_us.title")}
            </h1>
            <div className="about-us-conatiner flexbox">
                <div className="about-us">
                    <img src={about_us} alt="" />
                </div>
                <div className="about-us-description">
                    <p>
                        {t("about_us.message.0")}
                    </p>
                    <p>
                        {t("about_us.message.1")}
                    </p>
                    <p>
                        {t("about_us.message.2")}
                    </p>
                </div>
            </div>
            
        </div>
    );
}
export default function Contacts (){
    const telephone = useContext(TelephoneContext)
    return (
        <div>
            <AboutUs/>
            <Form telephone={telephone}/>
            <div className="harta">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44418.64616952892!2d28.16194952497431!3d45.908003120520206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65c95ca29ef7d%3A0x254c4e01d94d6250!2sCahul%2C%20Moldova!5e0!3m2!1sro!2sro!4v1742912371124!5m2!1sro!2sro" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>
    );
} 