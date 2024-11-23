import Button from "../../UI/ButtonMore/ButtonMore";
import H1 from "../../UI/H1/H1";
import ProductPart2 from "../../UI/ProductPart2/ProductPart2";
import style from './Descubre.module.scss';
import Img1 from '../../assets/images/Product2Photo/ProductPhoto1.png';
import Img2 from '../../assets/images/Product2Photo/ProductPhoto2.png';
import Img3 from '../../assets/images/Product2Photo/ProductPhoto3.png';
import Img4 from '../../assets/images/Product2Photo/ProductPhoto4.png';
import Img5 from '../../assets/images/Product2Photo/ProductPhoto5.png';
import Img6 from '../../assets/images/Product2Photo/ProductPhoto6.png';

const products = [
    { img: Img1, text: 'MAQUILLAJE' },
    { img: Img2, text: 'SKINCARE' },
    { img: Img3, text: 'PELO' },
    { img: Img4, text: 'CUERPO' },
    { img: Img5, text: 'BUNDLES' },
    { img: Img6, text: 'PROMOCIONES' }
];

const Descubre = () => (
    <div className={style.Descubre}>
        <H1 text='DESCUBRE NUESTROS PRODUCTOS' />
        <div className={style.FirstChild}>
            <div className={style.Child}>
                {products.slice(0, 3).map((product, index) => (
                    <ProductPart2 key={index} {...product} />
                ))}
            </div>
            <div className={style.Child}>
                {products.slice(3).map((product, index) => (
                    <ProductPart2 key={index + 3} {...product} />
                ))}
            </div>
        </div>
        <Button text='VER TODO' big={false} />
    </div>
);

export default Descubre;
