import Button from '../../UI/ButtonMore/ButtonMore';
import style from './Footer.module.scss';
import InstaIcon from '../../assets/images/Icon/instagram.png';
import TwitterIcon from '../../assets/images/Icon/twitter.png';
import FacebookIcon from '../../assets/images/Icon/facebook.png';

const Footer = () => (
    <footer className={style.Footer}>
        <div className={style.FirstChild}>
            <h1 className={style.H1}>SUSCRÍBETE A NUESTRO NEWS LETTER</h1>
            <input className={style.Input} type="text" placeholder='example@mail.com' /><br />
            <Button black text='SUSCRIBIRME' />
        </div>
        <div className={style.SecondChild}>
            <div className={style.SecondChild_Child1}>
                {[
                    {
                        title: "Términos y privacidad",
                        items: ["Política de privacidad", "Términos y Condiciones", "Anuncios basados en intereses", "Accesibilidad", "cookies"]
                    },
                    {
                        title: "Atención al cliente",
                        items: ["Devoluciones / Cambios", "Dónde está mi pedido", "Preguntas frecuentes", "Información de envío", "Pago posterior", "Más"]
                    },
                    {
                        title: "Sobre touché.love",
                        items: ["NOSOTROS", "EMPLEO", "Información corporativa"]
                    }
                ].map((section, index) => (
                    <div key={index} className={style.Child1_Child}>
                        <span>{section.title}</span>
                        {section.items.map((item, idx) => <p key={idx}>{item}</p>)}
                    </div>
                ))}
            </div>
            <div className={style.SecondChild_Child2}>
                <div className={style.IconDiv}>
                    <img src={FacebookIcon} alt="Facebook" />
                    <img src={TwitterIcon} alt="Twitter" />
                    <img src={InstaIcon} alt="Instagram" />
                </div>
                <div className={style.LastDiv}>
                    <span>TOUCHE.LOVE 2021</span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;