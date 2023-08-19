import './Header.css'
import Options from '../assets/options-scroll.svg';
import {Link} from 'react-scroll';
import {UseState, useState} from 'react';

function Header(){
    const[fix, setFix] = useState(false);

    function setFixed(){
        
    }
 
    return(
        <header id="header-body"> 

            <Link 
                className="home"
                to="image-background" 
                spy={true} 
                smooth={true} 
                offset={-10} 
                duration={500}
                > 
                Home
            </Link>
            <Link 
                className="projetos" 
                to="secaoProjeto" 
                spy={true} 
                smooth={true} 
                offset={-90} 
                duration={500}
                >
                Projetos
            </Link>
            <Link 
                className="experiencia" 
                to="secaoExperiencia" 
                spy={true} 
                smooth={true} 
                offset={-90} 
                duration={500}
                >   
                Experiencia
            </Link>

            <a href="#"><img className="icon-menu" src={Options} /></a>
        </header>
    )
}
export default Header;