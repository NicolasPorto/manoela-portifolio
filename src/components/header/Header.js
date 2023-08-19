import './Header.css'
import Options from '../assets/options-scroll.svg';
import {Link} from 'react-scroll';
import {useState} from 'react';

function Header(){
    const[fix, setFix] = useState(false);

    function setFixed(){
        if (window.pageYOffset > 2){
            setFix(true);
        } else {
            setFix(false);
        }
    }

    window.addEventListener("scroll", setFixed);
    return(
        <header className={fix ? 'header-body fixed' : 'header-body'}> 

            <Link 
                className={fix ? 'home fixed' : 'home'}
                to="image-background" 
                spy={true} 
                smooth={true} 
                offset={-10} 
                duration={500}
                > 
                Home
            </Link>
            <Link 
                className={fix ? 'projetos fixed' : 'projetos'}
                to="secaoProjeto" 
                spy={true} 
                smooth={true} 
                offset={-90} 
                duration={500}
                >
                Projetos
            </Link>
            <Link 
                className={fix ? 'experiencia fixed' : 'experiencia'}
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