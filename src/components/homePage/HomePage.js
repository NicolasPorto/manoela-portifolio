import "./HomePage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import LineUm from '../assets/line-um.svg';
import LineDois from '../assets/line-dois.svg';
import ProjectScroll from "../projects-scroll/ProjectsScroll";

const HomePage = () => {
  return (
    <div className="home-page-web">
        
        <div className="background-color" />
        <img className="image-background" src="./images/background.png" />
        <div className="home-body" />
        <img className="linha-um" src={LineUm} />
        
        {/* SUB TITULOS */}
        <b className="secaoProjeto">Projetos</b>
        <b className="secaoExperiencia">Experiencia</b>
        {/* SUB TITULOS */}
        
        {/* SOBRE */}
        <div className="lorem-ipsum-placerat-container">
        <p className="lorem-ipsum-placerat">{`Lorem ipsum placerat diam augue imperdiet eu `}</p>
        <p className="lorem-ipsum-placerat">{`platea accumsan tellus, porttitor viverra convallis `}</p>
        <p className="lorem-ipsum-placerat">{`torquent tristique tempor ornare tortor, lobortis `}</p>
        <p className="lorem-ipsum-placerat">{`ac ante nam ligula quisque tempus semper. mattis `}</p>
        <p className="lorem-ipsum-placerat">
            fusce rutrum iaculis imperdiet iaculis massa.
        </p>
        </div>
        {/* SOBRE */}

        {/* ELEMENTOS */}
        <ProjectScroll/>
        {/* ELEMENTOS */}

        {/* ICONES */}
        <img className="linha-dois" src={LineDois} />

        <div className="grupo-icones">
            <a href="https://www.instagram.com/mawgsh/" target="_blank"><img src="./images/insta.png" alt="Instagram" className="insta"/></a>
            <a href="https://www.linkedin.com/in/mawgsh/" target="_blank"><img src="./images/linkedin.png" alt="Linkedin" className="linkedin"/></a>
            <a href="https://wa.me/554189017474" target="_blank"><img src="./images/whats.png" alt="WhatsApp" className="whats"/></a>
            <a href="mailto:mano.oelasz@gmail.com" target="_blank"><img src="./images/email.png" alt="E-mail" className="email"/></a>
        </div>
        
        <Footer/>

        {/* ICONES */}

        {/* TITULO */}
        <i className="gomes">Gomes</i>
        <b className="manoela">Manoela</b>
        {/* TITULO */}

        <Header/>
    </div>
  );
};

export default HomePage;