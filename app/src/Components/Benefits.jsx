import { useTranslation } from 'react-i18next'; 

export default function Benefits(){
    const { t } = useTranslation(); 

    const data = [
        {
            img: <span className="material-symbols-outlined">sentiment_very_satisfied</span>,
            description: t("benefits_array.0" )
        },
        {
            img: <span className="material-symbols-outlined">luggage</span>,
            description: t("benefits_array.1" )
        },
        {
            img: <span className="material-symbols-outlined">event_available</span>,
            description: t("benefits_array.2")
        },
        {
            img: <span className="material-symbols-outlined"> safety_divider</span>,
            description: t("benefits_array.3" )
        },
        {
            img: <span className="material-symbols-outlined">child_friendly</span>,
            description: t("benefits_array.4")
        }

    ]
    return (
        <>
            <div className="benefits-conatiner">
                <h1 className='title'>
                {t("benefits")}
                </h1>
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