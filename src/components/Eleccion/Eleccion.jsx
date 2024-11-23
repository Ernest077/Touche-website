import style from './Eleccion.module.scss';
import BestSellerProduct from "../../UI/MainProduct/BestSellerProduct/BestSellerProduct";
import PhotoBar from "../../UI/PhotoBar/PhotoBar";
import Img from '../../assets/images/ProductPhoto/спрей1.png';
import H1 from '../../UI/H1/H1';

const products = [
    { img: Img, price: 16, name: 'LOW PH GOOD MORNING GEL CLEANSER', data: 2024 },
    { img: Img, price: 16, name: 'LOW PH GOOD MORNING GEL CLEANSER', data: 2024 }
];

const Eleccion = () => (
    <div className={style.BestSellerProduct}>
        <H1 text='ELECCION DE TOUCHE' />
        <div className={style.ChildMain}>
            <PhotoBar />
            <div className={style.Child}>
                {products.map((product, index) => (
                    <BestSellerProduct key={index} {...product} />
                ))}
            </div>
        </div>
    </div>
);

export default Eleccion;