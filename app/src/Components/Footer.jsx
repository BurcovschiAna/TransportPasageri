import { Link} from 'react-router-dom';

import facebook from "../assets/img/Facebook.svg"
import instagram from "../assets/img/Instagram.svg"
import Telephone from "../assets/img/Telephone.svg"


export default function Footer(props){
    const telephone = "+1234567890";
    return (
        <div className="footer-container">
            <div className="wave"></div>
            <div className="wrapper">
                <div className="flexbox footer">
                    <div>
                        <Link to="/" className='logo'>
                            Logo
                        </Link> 
                        <a href={`tel:${props.telephone}`} className='flexbox'>
                            <img src={Telephone} alt="" />
                            {props.telephone}
                        </a> 
                        <a href='#'>
                            <img src={facebook} alt="" />
                        </a>
                        <a href='#'>
                            <img src={instagram} alt="" />
                        </a>

                        
                        
                    </div>          
                    <div>
                                       
                        <Link to="/" className='nav-item'>
                            Acasa
                        </Link> 
                        <Link to="/Contacts" className='nav-item'>
                            Contact
                        </Link> 
                        <Link to="/Services" className='nav-item'>
                             Servicii
                        </Link>
                       
                    </div>
                                
                </div>
                <div className="copyrites">
                    ©  2025 Dezvoltat de Ana Burcovschi. Toate drepturile rezervate.
                </div>
            </div>
        </div>
    );
}