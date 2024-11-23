import Button from '../../UI/ButtonMore/ButtonMore';
import style from './Guapa.module.scss';
const Guapa = () => {
    return (
        <div className={style.Guapa}>
            <div className={style.FirstChild}>
                <p className={style.FirstH1}>
                    HEY GUAPA! HEY GUAPO! HEY GUAPA! HEY GUAPO! HEY GUAPA! HEY GUAPO!
                    HEY GUAPA! HEY GUAPO! HEY GUAPA! HEY GUAPO! HEY GUAPA! HEY GUAPO!
                </p>
            </div>
            <div className={style.SecondChild}>
                <Button text={'EXPLORAR LA REVISTA'} big={true} black={false} />
                <Button text={'EXPLORAR LA TIENDA'} big={true} black={false} />
            </div>
        </div>
    );
}
export default Guapa;