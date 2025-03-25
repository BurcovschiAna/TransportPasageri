import { Link} from 'react-router-dom';

import facebook from "../assets/img/Facebook.svg"
import instagram from "../assets/img/Instagram.svg"
import whatsapp from "../assets/img/Whatsapp.svg"

export default function Footer(props){
    const telephone = "+1234567890";
    return (
        <div className="footer-container">
            <div className="wrapper">
                <div className="flexbox footer">
                    <div>
                        <Link to="/" className='logo'>
                            Logo
                        </Link> 
                        <a href={`tel:${props.telephone}`}>
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