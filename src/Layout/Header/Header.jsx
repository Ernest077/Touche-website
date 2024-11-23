import Navbar from '../Navbar/Navbar';
import style from './Header.module.scss';
import Img from '../../assets/images/logoTouche.png';
import Icon from '../../assets/images/Icon/Union.png';
import Icon1 from '../../assets/images/Icon/Union(1).png';
import Icon2 from '../../assets/images/Icon/Union(2).png';
import Search from '../../UI/Menu/Search/Search';
import { useState } from 'react';
import User from '../../UI/Menu/User/User';

const Header = () => {
    const [search, setSearch] = useState(false);
    const [userMenu, setUserMenu] = useState(false);

    const openUserMenu = () => {
        if (!search) {
            if (userMenu) {
                setUserMenu(false)
            } else {
                setUserMenu(true)
            }
        }else{
            setSearch(false)
            setUserMenu(true)
        }
    };

    const openSearch = () => {
        if (!userMenu) {
            if (search) {
                setSearch(false)
            } else {
                setSearch(true)
            }
        }else{
            setUserMenu(false)
            setSearch(true)
        }
    };

    return (
        <>
            <header className={style.Header}>
                <div className={style.LogoDiv}>
                    <img src={Img} alt="Touche Logo" />
                </div>
                <Navbar />
                <div className={style.UserDiv}>
                    User
                    <div className={style.IconDiv}>
                        <img className={style.Icon} src={Icon} alt="Icon" onClick={openUserMenu} />
                        <img className={style.Icon} src={Icon1} alt="Icon1" />
                        <img className={style.Icon} src={Icon2} alt="Icon2" onClick={openSearch} />
                    </div>
                    <Search visible={search} />
                    <User visible={userMenu} />
                </div>
            </header>
        </>
    );
};

export default Header;