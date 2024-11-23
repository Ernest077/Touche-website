import './Main.scss';
import Descubre from '../../components/Descubre/Descubre';
import Eleccion from '../../components/Eleccion/Eleccion';
import Novedades from '../../components/Novedades/Novedades';
import SlideShow from '../../components/SlideShow/SlideShow';
import Comp3 from '../../components/Comp3/Comp3';
import Guapa from '../../components/Guapa/Guapa';

const Main = () =>{
    return(
        <main>
            <SlideShow/>
            <Eleccion/>
            <Descubre/>
            <Comp3/>
            <Novedades/>
            <Guapa/>
        </main>
    )
}

export default Main;