import BuyDiv from '../../BuyDiv/BuyDiv';
import PriceSpan from '../../PriceSpan/PriceSpan';
import StarRating from '../../StarRating/StarRating';
import style from './Product.module.scss';

const Product = ({ img, name, price }) => {
    return (
        <div className={style.Product}>
            <div className={style.FirstChild} style={{ backgroundImage: `url(${img})` }}>
                <div>
                    <p>BEAUDIANI</p>
                    <StarRating count={5} />
                </div>
            </div>
            <div className={style.SecondChild}>
                <h1>{name}</h1>
                <div className={style.Second_LastChild}>
                <PriceSpan price={price} />
                <BuyDiv/>
                </div>
            </div>
        </div>
    )
}

export default Product;