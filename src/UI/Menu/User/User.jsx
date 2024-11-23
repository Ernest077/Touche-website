import style from './User.module.scss'

const User = ({ visible }) => {
    return (
        <div className={style.User} style={{ display: visible ? 'grid' : 'none' }}>
            <div className={style.UserChild}>
                <span className={style.UserSpan}>MIS ARTículos guardados</span>
            </div>
            <div className={style.UserChild}>
                <span className={style.UserSpan}>MIS FAVORITOS</span>
            </div>
            <div className={style.UserChild}>
                <span className={style.UserSpan}>MIS DATOS</span>
            </div>
            <div className={style.UserChild}>
                <span className={style.UserSpan}>LOG OUT</span>
            </div>
        </div>
    )
}

export default User;