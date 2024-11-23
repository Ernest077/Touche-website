import style from './PhotoBar.module.scss';
import Img from '../../assets/images/lips_new1.png';

const PhotoBar = () => {
    return (
        <div className={style.PhotoBar} style={{ backgroundImage: `url(${Img})` }}>
            <div className={style.PhotoBarChild}>
                <div className={style.Child1}>EL ARTICULO MAS LEIDO</div>
                <div className={style.Child2}>
                    <h1>MAKEUP: LABIOS PERFECTOS</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className={style.Child3}>
                    <div>MAKEUP | 2 min</div>
                </div>
            </div>
        </div>
    )
}

export default PhotoBar;