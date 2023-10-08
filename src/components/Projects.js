import React from "react";
import AOS from 'aos';

function Projects() {
    AOS.init();
    return (
        <>
        <div className="site-section site-portfolio">
            <div className="container">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                        <h2>oie, sou a manoela.</h2>
                        <p className="mb-0">Artista &amp; Estudante de artes visuais na FAP.</p>
                    </div>

                    <div className="col-md-12 col-lg-6 text-left text-lg-right" data-aos="fade-up" data-aos-delay="100">
                        <div id="filters" className="filters">
                            <a href="#" data-filter="*" className="active">All</a>
                            <a href="#" data-filter=".web">Pintura</a>
                            <a href="#" data-filter=".design">Desenho</a>
                            <a href="#" data-filter=".branding">Trabalhos</a>
                            <a href="#" data-filter=".photography">Escrita</a>
                        </div>
                    </div>
                </div>

                <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                    <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="/projeto-unico" className="item-wrap fancybox">
                            <div className="work-info">
                                <h3>Outono</h3>
                                <span>Pintura</span>
                            </div>
                            <img className="img-fluid" alt="" src="images/pintura1.png"></img>
                        </a>
                    </div>
                    <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="/projeto-unico" className="item-wrap fancybox">
                            <div className="work-info">
                                <h3>Build Indoo</h3>
                                <span>Photography</span>
                            </div>
                            <img className="img-fluid" alt="" src="images/img_2.jpg"></img>
                        </a>
                    </div>
                    <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="/projeto-unico" className="item-wrap fancybox">
                            <div className="work-info">
                                <h3>Cocooil</h3>
                                <span>Branding</span>
                            </div>
                            <img className="img-fluid" alt="" src="images/img_3.jpg"></img>
                        </a>
                    </div>
                    <div className="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="/projeto-unico" className="item-wrap fancybox">
                            <div className="work-info">
                                <h3>Nike Shoe</h3>
                                <span>Design</span>
                            </div>
                            <img className="img-fluid" alt="" src="images/img_4.jpg"></img>
                        </a>
                    </div>
                    <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="/projeto-unico" className="item-wrap fancybox">
                            <div className="work-info">
                                <h3>Kitchen Sink</h3>
                                <span>Photography</span>
                            </div>
                            <img className="img-fluid" alt="" src="images/img_5.jpg"></img>
                        </a>
                    </div>
                    <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="/projeto-unico" className="item-wrap fancybox">
                            <div className="work-info">
                                <h3>Amazon</h3>
                                <span>brandingn</span>
                            </div>
                            <img className="img-fluid" alt="" src="images/img_6.jpg"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;