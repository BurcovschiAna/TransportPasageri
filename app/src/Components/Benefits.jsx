const data = [
    {
        img: <span className="material-symbols-outlined">sentiment_very_satisfied</span>,
        description: "Comfort în timpul călătoriei"
    },
    {
        img: <span className="material-symbols-outlined">luggage</span>,
        description: "Bagaj gratuit pentru toți pasagerii"
    },
    {
        img: <span className="material-symbols-outlined">event_available</span>,
        description: "Orar flexibil"
    },
    {
        img: <span className="material-symbols-outlined"> safety_divider</span>,
        description: "Siguranță în timpul călătoriei"
    },

]
export default function Benefits(){
    return (
        <>
            <div className="benefits-conatiner">
                <div className="wrapper flexbox">
                    {data.map(item => (
                        <div key={item.description} className="item-benefits">
                            {item.img}
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}