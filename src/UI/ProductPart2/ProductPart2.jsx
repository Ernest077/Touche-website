import './ProductPart2.scss';

const ProductPart2 = ({img, text}) => {
    return(
        <div className='Product2'>
            <div style={{ backgroundImage: `url(${img})` }}/>
            <p>{text}</p>
        </div>
    )
}

export default ProductPart2;