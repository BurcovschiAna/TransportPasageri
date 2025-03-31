import { useTranslation } from 'react-i18next'; 

export default function Benefits(){
    const { t } = useTranslation(); 

    const data = [
        {
            img: <span className="material-symbols-outlined">sentiment_very_satisfied</span>,
            description: t("benefits.0" )
        },
        {
            img: <span className="material-symbols-outlined">luggage</span>,
            description: t("benefits.1" )
        },
        {
            img: <span className="material-symbols-outlined">event_available</span>,
            description: t("benefits.2")
        },
        {
            img: <span className="material-symbols-outlined"> safety_divider</span>,
            description: t("benefits.3" )
        },

    ]
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