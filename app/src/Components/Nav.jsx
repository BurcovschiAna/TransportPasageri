import { Link } from 'react-router-dom';
import Telephone from "../assets/img/Telephone.svg";
import { useTranslation } from 'react-i18next'; 
import logo from "../assets/img/logo.svg";
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'; 

export default function Nav(props) {
    const { t, i18n } = useTranslation(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleLanguage = (lang) => {
        const langElements = document.getElementsByClassName("lang");
        Array.from(langElements).forEach(element => {
            element.classList.remove("active");
        });
        document.getElementById(lang).classList.add("active");
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('open');
        } else {
            document.body.classList.remove('open');
        }
        return () => {
            document.body.classList.remove('open');
        };
    }, [isMenuOpen]);
    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize); 
        console.log(windowWidth > 700);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isWideScreen = windowWidth > 800;
    const menuAnimation = useSpring({
        opacity: isWideScreen || isMenuOpen ? 1 : 0,
        transform: isMenuOpen &&  isWideScreen ? 'translateZ(0%)' : 'translateZ(-100%)',
        config: { tension: 90, friction: 30 },
    });

    return (
        <div className="nav-container">
            <div className='nav flexbox'>
                <Link to="/" className='logo flexbox'>
                    <img src={logo} alt="logo" />
                    {t("menu.logo")}
                </Link>
                <animated.div
                    className={`flexbox nav-links ${isMenuOpen ? "open" : ""}`}
                    style={menuAnimation}
                >
                
                    <div className='flexbox links'>
                    {!isWideScreen && (
                        <Link to="/" className='logo flexbox'>
                            <img src={logo} alt="logo" />
                            {t("menu.logo")}
                        </Link>
                    )}
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
                    </div>
                    
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
                </animated.div>

                <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
