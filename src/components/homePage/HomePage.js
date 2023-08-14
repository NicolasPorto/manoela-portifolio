import "./HomePage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import LogoInsta from '../assets/instagram.svg';
import LogoLinkedin from '../assets/linkedin.svg';
import LogoWhats from '../assets/whatsapp.svg';
import LogoEmail from '../assets/email.svg';
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
        
        <Header/>
        
        {/* SUB TITULOS */}
        <b id="projetos" className="projetos1">Projetos</b>
        <b className="experiencia1">Experiencia</b>
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
            <img src={LogoInsta} alt="Instagram" className="insta"/>
            <img src={LogoLinkedin} alt="Linkedin" className="linkedin"/>
            <img src={LogoWhats} alt="WhatsApp" className="whats"/>
            <img src={LogoEmail} alt="E-mail" className="email"/>
        </div>
        
        <Footer/>

        {/* ICONES */}

        {/* TITULO */}
        <i className="gomes">Gomes</i>
        <b className="manoela">Manoela</b>
        {/* TITULO */}
    </div>
  );
};

export default HomePage;