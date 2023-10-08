import React from 'react';
import AOS from 'aos';
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import MoreProjects from '../../components/MoreProjects.js'
import About from '../../components/About.js'

function SingleWork(){
    AOS.init();
    return(
        <>
        <Header/>
        <main id="main">
            <div className="site-section">
                <div className="container">
                    <div className="row mb-4 align-items-center">
                        <div className="col-md-6" data-aos="fade-up">
                            <h2>Obra</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                            explicabo inventore.</p>
                        </div>
                    </div>
                </div>

                <div className="site-section pb-0">
                    <div className="container">
                        <div className="row align-items-stretch">
                            <div className="col-md-8" data-aos="fade-up">
                                <img src="images/pintura1.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay={100}>
                                <div className="sticky-content">
                                    <h3 className="h3">Outono</h3>
                                    <p className="mb-4"><span className="text-muted">Pintura</span></p>
                                    <div className="mb-5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias
                                            illum unde pariatur, enim tempora.</p>
                                    </div>
                                    <h4 className="h4 mb-3">Materiais</h4>
                                    <ul className="list-unstyled list-line mb-5">
                                    <li>Tinta</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MoreProjects/>
                <br/><br/><br/><br/><br/>
                <About/>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default SingleWork;