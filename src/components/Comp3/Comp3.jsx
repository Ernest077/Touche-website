import Button from "../../UI/ButtonMore/ButtonMore";
import H1 from "../../UI/H1/H1";
import ProductPart3 from "../../UI/ProductPart3/ProductPart3";
import Img from '../../assets/images/Product3Photo/Product3Photo.png';
import Img2 from '../../assets/images/Product3Photo/Product3Photo2.png';
import Img3 from '../../assets/images/Product3Photo/Product3Photo3.png';
import style from './Comp3.module.scss';

const products = [
    { img: Img, h1: 'MAKEUP: LABIOS PERFECTOS', head: 'MAKEUP', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque' },
    { img: Img2, h1: 'TENDENCIAS DE MODA EN 2021', head: 'FASHION', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    { img: Img3, h1: 'LOREM IPSUM TRATATULI TRATATATUSHKI', head: 'FASHION', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' }
];

const Comp3 = () => (
    <div className={style.Comp3}>
        <H1 text='GET TO KNOW YOURSELF WITH TOUCHE' />
        <div className={style.Child}>
            {products.map((product, index) => (
                <ProductPart3 key={index} {...product} />
            ))}
        </div>
        <Button text='VER más' big={false} />
    </div>
);

export default Comp3;