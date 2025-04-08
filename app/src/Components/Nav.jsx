import { Link } from 'react-router-dom';
import Telephone from "../assets/img/Telephone.svg";
import { useTranslation } from 'react-i18next'; 

import logo from "../assets/img/logo.svg"
export default function Nav(props) {
    const { t, i18n } = useTranslation(); 

    const handleLanguage = (lang) => {
        const langElements = document.getElementsByClassName("lang");
        Array.from(langElements).forEach(element => {
            element.classList.remove("active");
        });
        document.getElementById(lang).classList.add("active");
        i18n.changeLanguage(lang);
    }
    return (
        <div className="nav-container">
            <div className='nav flexbox'>
                <Link to="/" className='logo flexbox'>
                    <img src={logo} alt="logo" />
                    {t("menu.logo")}
                </Link>
                <div className='flexbox nav-links'>
                    <Link to="/" className='nav-item'>
                        {t('menu.home')} 
                    </Link>
                    <Link to="/Contacts" className='nav-item'>
                        {t("menu.contacts")} 
                    </Link>
                    <Link to="/Services" className='nav-item'>
                        {t("menu.services")}
                    </Link>
                    <a href={`tel:${props.telephone}`} className='flexbox'>
                        <img src={Telephone} alt="Telephone icon" />
                        {props.telephone}
                    </a>
                    <div className='btn-lang'>
                        <span 
                            id="ro" 
                            className='lang active'
                            onClick={() => handleLanguage('ro')}>
                            Ro
                        </span>
                        <span 
                            id="ru" 
                            className='lang' 
                            onClick={() => handleLanguage('ru')}>
                            Ru
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
