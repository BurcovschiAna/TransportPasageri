import Form from "./Form";
export default function Contacts (props){
    return (
        <div>
            <div className="contact-descriere wrapper">
                <p>
                   Vă mulțumim că ați ales Transport Pasageri Sergiu! Suntem aici pentru a vă oferi cele mai bune servicii de transport, adaptate nevoilor dumneavoastră. Dacă aveți întrebări, sugestii sau doriți să solicitați o ofertă, nu ezitați să ne contactați.
                </p>
            <ul>
                <li>
                    Telefon: <a href={`tel:${props.telephone}`}>{props.telephone}</a>
                </li>
                <li>
                    Email: <a href="mailto:myemail@gmail.com"> myemail@gmail.com</a>
                </li>
                <li>
                    Adresa: Cahul...
                </li>
            </ul>
            <p>
            Completați formularul de mai jos și un reprezentant al companiei noastre vă va contacta în cel mai scurt timp posibil.
            </p>
            </div>
            <Form />
            <div className="harta">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44418.64616952892!2d28.16194952497431!3d45.908003120520206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65c95ca29ef7d%3A0x254c4e01d94d6250!2sCahul%2C%20Moldova!5e0!3m2!1sro!2sro!4v1742912371124!5m2!1sro!2sro" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}