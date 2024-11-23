import React from 'react';
import PriceSpan from '../../PriceSpan/PriceSpan';
import style from './BestSellerProduct.module.scss';
import BuyDiv from '../../BuyDiv/BuyDiv';

const BestSellerProduct = ({ img, name, price, data }) => {
    return (
        <div className={style.Product}>
            <div
                className={style.FirstChild}
                style={{ backgroundImage: `url(${img})` }}>
                <div>BEST SELLER ENERO {data}</div>
            </div>
            <div className={style.SecondChild}>
                <p>Cosrx</p>
                <h1>{name}</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <PriceSpan price={price} />
                    <BuyDiv />
                </div>
            </div>
        </div>
    );
};

export default BestSellerProduct;