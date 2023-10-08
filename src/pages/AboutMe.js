import React from "react";
import AOS from 'aos';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function AboutMe() {
    AOS.init();
    return (
        <>
            <Header/>
            <main id="main">
                <div className="site-section pb-0 site-portfolio">
                    <div className="container">
                        <div className="row mb-5 align-items-end">
                            <div className="col-md-6" data-aos="fade-up">
                                <h2>sobre mim</h2>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut
                                officiis explicabo inventore.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 ml-auto order-2" data-aos="fade-up">
                                <h3 className="h3 mb-4">Habilidades</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <div className="d-flex mb-1">
                                            <strong>Photoshop</strong>
                                            <span className="ml-auto">65%</span>
                                        </div>
                                            <div className="progress custom-progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex mb-1">
                                            <strong>Canva</strong>
                                            <span className="ml-auto">85%</span>
                                        </div>
                                            <div className="progress custom-progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex mb-1">
                                            <strong>Tradução do inglês</strong>
                                            <span className="ml-auto">80%</span>
                                        </div>
                                            <div className="progress custom-progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex mb-1">
                                            <strong>Pesquisa Iconográfica</strong>
                                            <span className="ml-auto">80%</span>
                                        </div>
                                            <div className="progress custom-progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex mb-1">
                                            <strong>Diagramação</strong>
                                            <span className="ml-auto">75%</span>
                                        </div>
                                            <div className="progress custom-progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="d-flex mb-1">
                                            <strong>Design de Apostilas</strong>
                                            <span className="ml-auto">88%</span>
                                        </div>
                                            <div className="progress custom-progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '88%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-7 mb-5 mb-md-0" data-aos="fade-up">
                                <p><img src="images/foto-principal.png" alt="" className="img-fluid"/></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos delectus minima reprehenderit
                                molestias illo dolorem et, odio!</p>
                                <p>Fuga fugit distinctio delectus iure vitae consequatur excepturi, mollitia, consectetur molestias sapiente
                                rem consequuntur, illum adipisci, sed obcaecati!</p>
                                <p>Ex, dolorem qui voluptas reprehenderit provident, ad ipsum iure a consequatur voluptatem incidunt nobis.
                                Vitae reiciendis quae ex.</p>
                                <p>Optio consectetur culpa nemo, fugit pariatur veniam voluptate laudantium rerum fuga dolor in maiores ea
                                nisi voluptatibus. Minus?</p>
                                <p><a href="#" className="readmore">Baixe o meu CV</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <br/><br/><br/><br/>
            <Footer/>
        </>
    )
}

export default AboutMe;