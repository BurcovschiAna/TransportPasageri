import { Link} from 'react-router-dom';
import Telephone from "../assets/img/Telephone.svg"

export default function Nav(props) {

    return (
        <>
            <div className="nav-container">
                <div className='nav flexbox'>
                    <Link to="/" className='logo'>
                        Logo
                    </Link> 
                    <div className='flexbox'>
                        <Link to="/" className='nav-item'>
                            Acasa
                        </Link> 
                        <Link to="/Contacts" className='nav-item'>
                            Contact
                        </Link> 
                        <Link to="/Services" className='nav-item'>
                            Servicii
                        </Link>
                        <a href={`tel:${props.telephone}`} className='flexbox'>
                            <img src={Telephone} alt="" />
                            {props.telephone}
                        </a>
                    </div> 
                </div>          
            </div>
            
           
        </>
    );
}
