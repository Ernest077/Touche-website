import { useState } from 'react';
import Revista from '../../UI/Menu/Revista/Revista';
import style from './Navbar.module.scss';
import NonePage from '../../UI/Menu/NonePage/NonePage';

const Navbar = () => {
    const [openRevista, setOpenRevista] = useState();
    const [openNonePage, setOpenNonePage] = useState();

    const openNonePageMenu = () => {
        if (!openRevista) {
            if (openNonePage) {
                setOpenNonePage(false)
            } else {
                setOpenNonePage(true)
            }
        } else {
            setOpenNonePage(true)
            setOpenRevista(false)
        }
    }

    const openRevistaMenu = () => {
        if (!openNonePage) {
            if (openRevista) {
                setOpenRevista(false)
            } else {
                setOpenRevista(true)
            }
        } else {
            setOpenRevista(true)
            setOpenNonePage(false)
        }
    };
    return (
        <nav className={style.Navbar}>
            <Revista visible={openRevista} />
            <NonePage visible={openNonePage} />
            <a className={style.Navbar_a} onClick={openRevistaMenu}>REVISTA</a>
            <a className={style.Navbar_a} onClick={openNonePageMenu}>TIENDA</a>
            <a className={style.Navbar_a} onClick={openNonePageMenu}> PROMOCIONES</a>
        </nav >
    )
}

export default Navbar;