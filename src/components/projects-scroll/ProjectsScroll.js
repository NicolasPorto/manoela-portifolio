import './ProjectsScroll.css';
import BotaoLeft from '../assets/botao-left.svg';
import BotaoRight from '../assets/botao-right.svg';

const ProjectScroll = () => {
    return(
        <header>
            <div className="project-element-body" />
            <div className="experiencia-body" />
            <div className="home-page-web-child1" />
            <div className="home-page-web-child2" />
            <div className="home-page-web-child3" />
            <div className="home-page-web-child4" />
            <div className="home-page-web-child5" />
            <img className="home-page-web-child6" src={BotaoLeft} />
            <img className="home-page-web-child7" src={BotaoRight} />
        </header>
    )
}

export default ProjectScroll;