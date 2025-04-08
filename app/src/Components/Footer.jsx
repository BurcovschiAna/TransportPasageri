import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import facebook from "../assets/img/Facebook.svg"
import instagram from "../assets/img/Instagram.svg"
import Telephone from "../assets/img/Telephone.svg"
import logo from "../assets/img/logo.svg"

export default function Footer(props){
    const { t } = useTranslation(); 
    return (
        <div className="footer-container">
            <div className="wave"></div>
            <div className="wrapper">
                <div className="flexbox footer">
                    <div>
                        <Link to="/" className='logo'>
                            <img src={logo} alt="" />
                            <div>
                                {t("menu.logo")}
                            </div>
                            
                        </Link> 
                        <a href={`tel:${props.telephone}`} className='flexbox'>
                            <img src={Telephone} alt="" />
                            {props.telephone}
                        </a> 
                        <div className='flexbox'>
                            <a href='#' className='social'>
                                <img src={facebook} alt="" />
                            </a>
                            <a href='#' className='social'>
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                        

                        
                        
                    </div>          
                    <div>
                                       
                        <Link to="/" className='nav-item'>
                            {t('menu.home')} 
                        </Link> 
                        <Link to="/Contacts" className='nav-item'>
                            {t("menu.contacts")} 
                        </Link> 
                        <Link to="/Services" className='nav-item'>
                            {t("menu.services")}
                        </Link>
                       
                    </div>
                                
                </div>
                <div className="copyrites">
                    {t("copyrights")}
                </div>
            </div>
        </div>
    );
}