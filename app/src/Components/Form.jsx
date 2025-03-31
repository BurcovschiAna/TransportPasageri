import { useState, useRef, useEffect } from "react";
import formImg from "../assets/img/Banner3.jpg"
import { useTranslation } from 'react-i18next'; 

export default function Form() {
    const { t } = useTranslation(); 
    const destinations = t("form.option", { returnObjects: true });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [selectedDestination, setSelectedDestination] = useState();
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const selectRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault(); 
    };

    const handleOptionClick = (option) => {
        setSelectedDestination(option);
        setIsSelectOpen(false);
        console.log(option);
    };

    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsSelectOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="form-container">
            <div className="wrapper flexbox">
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="item-input">
                        <input 
                            required
                            type="text" 
                            id="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                        <label htmlFor="name">
                            {t("form.name")}
                        </label>
                    </div>
                    <div className="item-input">
                        <input 
                            required
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <label htmlFor="email">
                            {t("form.email")}
                        </label>
                    </div>
                    <div className="item-input">
                        <input 
                            required
                            type="tel" 
                            id="phone" 
                            value={number}
                            onChange={(e) => setNumber(e.target.value)} 
                        />
                        <label htmlFor="phone">
                        {t("form.telephone")}
                        </label>
                    </div>
                    <div className="select" ref={selectRef}>
                        <div 
                            className="selected" 
                            onClick={() => setIsSelectOpen(!isSelectOpen)}>
                            {selectedDestination || t("form.select") }
                        </div>
                        {isSelectOpen && (
                            <div className="options">
                                {destinations.map(option => (
                                    <div 
                                        className="option"
                                        key={option}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <button type="submit" className="btn">
                    {t("form.btn")}
                </button>
            </form>
            <div className="form-img">
                <img src={formImg} alt="" />
            </div>
            </div>
        </div>
    );
}
