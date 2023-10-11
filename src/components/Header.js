import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function Header() {
    const location = useLocation();
    const [home, setIsHome] = useState(false);
    const [sobre, setIsSobre] = useState(false);
    const [servicos, setIsServicos] = useState(false);
    const [projetos, setIsProjetos] = useState(false);
    const [contato, setIsContato] = useState(false);

    useEffect(() => {
        setIsSobre(location.pathname === "/sobre-mim");
        setIsServicos(location.pathname === "/meus-servicos");
        setIsProjetos(location.pathname === "/projetos");
        setIsContato(location.pathname === "/contato");
        setIsHome(location.pathname === "/");
      }, [location.pathname]);

    return (
       <>
            <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
                <div className="container py-2 py-md-5">
                    <div className="row align-items-start">
                        <div className="col-md-2">
                            <ul className="custom-menu">
                                <li className={home ? 'active' : ''}><a href="/">home</a></li>
                                <li className={sobre ? 'active' : ''}><a href="/sobre-mim">sobre mim</a></li>
                                <li className={servicos ? 'active' : ''}><a href="/meus-servicos">serviços</a></li>
                                <li className={projetos ? 'active' : ''}><a href="/projetos">projetos</a></li>
                                <li className={contato ? 'active' : ''}><a href="/contato">contato</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 d-none d-md-block  mr-auto">
                            <div className="tweet d-flex">
                                <span className="icofont-comment text-white mt-2 mr-3"></span>
                                <div>
                                    <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                                        officiis explicabo inventore. <br></br> <a href="https://pointerpointer.com/" target="_blank">https://pointerpointer.com/</a></em></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <h3>me contrate</h3>
                            <p>diagramação - canva - tradução - pesquisa iconográfica e bibliográfica - apoio de organização - photoshop - design de apostilas. <br></br> 
                            <a href="mailto:mano.oelasz@gmail.com">mano.oelasz@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-light custom-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">Manoela Monteiro Gomes.</a>
                    <a href="#" className="burger" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>
                </div>
            </nav>  
        </>
    )
}

export default Header;