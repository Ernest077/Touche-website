import style from './ProductPart.module.scss';

const ProductPart3 = ({img, text, h1, head}) => {
    return (
        <div className={style.ProductPart3}>
            <div className={style.Child1} style={{ backgroundImage: `url(${img})` }}></div>
            <div className={style.Child2}>
                <div className={style.Child2_Child}>
                    <p>{head}</p>
                    <p>2 min | </p>
                </div>
                <h1>{h1}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ProductPart3;