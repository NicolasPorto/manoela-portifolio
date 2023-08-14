import './Header.css'
import Options from '../assets/options-scroll.svg';

function Header(){
    return(
        <header>
            <div className="header-body" />
            <a href="#"><b className="home"> Home</b></a>
            <a href="#projetos"><b className="projetos"> Projetos</b></a>
            <a href="#"><b className="experiencia"> Experiencia</b></a>
            <a href="#"><img className="icon-menu" src={Options} /></a>
        </header>
    )
}
export default Header;