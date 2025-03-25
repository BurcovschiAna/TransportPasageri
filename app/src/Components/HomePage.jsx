import banner1 from "../assets/img/Banner1.jpg"


import Benefits from "./Benefits"
import ServiciiComp from "./ServiciiComp"
import Form from "./Form"
const Banner =  () => {
    window.addEventListener('scroll', () => {
        const scrollImage = document.querySelector('.scroll-container');
        const scrollPosition = window.scrollY;
        scrollImage.style.transform = `translateY(${scrollPosition * -0.3}px)`;
    });
    return (
       <div className="banner">
                <div className="scroll-container">
                   <img src={banner1} /> 
                </div>
                
                <div className="overlay">
                    <h1>
                        Transport pasageri Sergiu
                    </h1>
                </div>
            </div> 
    );
    
}
export default function HomePage (){
    return (
        <>
            <Banner />
            <Benefits />
            {/* <div className="wrapper"> */}
                <ServiciiComp isHomePage={true} />
            {/* </div> */}
            
            <Form />
        </>
    );
}