import style from './Revista.module.scss';

const Revista = ({visible}) => {
    return (
        <div className={style.Revista} style={{ display: visible ? 'grid' : 'none' }}>
            <div className={style.RevistaChild}><p className={style.p}>VER TODO</p></div>
            <div className={style.RevistaChild}><p className={style.p}>MAKE UP</p></div>
            <div className={style.RevistaChild}><p className={style.p}>FASHION</p></div>
            <div className={style.RevistaChild}><p className={style.p}>CUERPO</p></div>
            <div className={style.RevistaChild}><p className={style.p}>PELO</p></div>
            <div className={style.RevistaChild}><p className={style.p}>LIFESTYLE</p></div>
        </div>
    )
}

export default Revista;