import style from './NonePage.module.scss';

const NonePage = ({visible}) =>{
    return(
        <div className={style.NonePage} style={{ display: visible ? 'grid' : 'none' }}>
            <p className={style.p}>This page is currently unavailable!</p>
        </div>
    )
}

export default NonePage;