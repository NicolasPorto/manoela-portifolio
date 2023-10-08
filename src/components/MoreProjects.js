import React from "react";
import AOS from 'aos';

function MoreProjects() {
    AOS.init();
    return(
        <>
            <div className="site-section pb-0">
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-5">
                            <h3 className="h3 heading">Mais Trabalhos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                        </div>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay={200}>
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
                                <img className="img-fluid" alt="" src="images/img_2.jpg" />
                            </a>
                        </div>
                        <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                            <a href="/projeto-unico" className="item-wrap fancybox">
                                <div className="work-info">
                                <h3>Cocooil</h3>
                                <span>Branding</span>
                                </div>
                                <img className="img-fluid" alt="" src="images/img_3.jpg" />
                            </a>
                        </div>
                        <div className="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                            <a href="/projeto-unico" className="item-wrap fancybox">
                                <div className="work-info">
                                <h3>Nike Shoe</h3>
                                <span>Design</span>
                                </div>
                                <img className="img-fluid" alt="" src="images/img_4.jpg" />
                            </a>
                        </div>
                        <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                            <a href="/projeto-unico" className="item-wrap fancybox">
                                <div className="work-info">
                                <h3>Kitchen Sink</h3>
                                <span>Photography</span>
                                </div>
                                <img className="img-fluid" alt="" src="images/img_5.jpg" />
                            </a>
                        </div>
                        <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                            <a href="/projeto-unico" className="item-wrap fancybox">
                                <div className="work-info">
                                <h3>Amazon</h3>
                                <span>brandingn</span>
                                </div>
                                <img className="img-fluid" alt="" src="images/img_6.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoreProjects;