import formImg from "../assets/img/Banner3.jpg"
import { useTranslation } from 'react-i18next'; 

import Viber from "../assets/img/Viber.svg"
import Whatsapp from "../assets/img/Whatsapp.svg"
import Telephone from "../assets/img/Telephone.svg"
export default function Form(props) {
    const { t } = useTranslation(); 

    return (
        <div className="form-container">
            <div className="wrapper flexbox">
                <div className="form">
                    <h1 className="title">
                        {t("form.message")}
                    </h1>
                    <p className="subtitle">
                        {t("form.contact")}
                    </p>
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
                <div className="form-img">
                    <img src={formImg} alt="" />
                </div>
            </div>
        </div>
    );
}
