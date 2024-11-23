import Button from "../../UI/ButtonMore/ButtonMore";
import H1 from "../../UI/H1/H1";
import Product from "../../UI/MainProduct/Product/Product";
import Img2 from '../../assets/images/ProductPhoto/спрей2.png';
import Img1 from '../../assets/images/ProductPhoto/спрей1.png';
import style from './Novedades.module.scss';

const products = [
    { img: Img1, name: 'MOIST SERUM', price: 25 },
    { img: Img2, name: 'LOW PH GOOD MORNING GEL CLEANSER', price: 19 },
    { img: Img1, name: 'MOIST SERUM', price: 25 },
    { img: Img2, name: 'LOW PH GOOD MORNING GEL CLEANSER', price: 19 }
];

const Novedades = () => (
    <div className={style.Novedades}>
        <H1 text='NOVEDADES' />
        <div className={style.FirstChild}>
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </div>
        <Button text='VER más' big={false} />
    </div>
);

export default Novedades;
