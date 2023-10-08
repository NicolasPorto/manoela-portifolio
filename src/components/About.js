import React, { useEffect } from 'react';
import 'owl.carousel';

function About() {
    useEffect(() => {
        function siteOwlCarousel() {
          const $ = window.jQuery;
    
          $('.testimonial-carousel').owlCarousel({
            center: true,
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 1000,
          });
        }
    
        siteOwlCarousel();
      }, []);

    return (
        <>
        <div className="site-section pt-0">
            <div className="container">
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-wrap">
                        <div className="testimonial">
                        <img src="images/foto-perfil.jpg" alt="" className="img-fluid" />
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                            explicabo inventore.</p>
                        </blockquote>
                        <p> Jean Hicks</p>
                        </div>
                    </div>
                    <div className="testimonial-wrap">
                        <div className="testimonial">
                            <img src="images/morangos.png" alt="" className="img-fluid" />
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                                explicabo inventore.</p>
                            </blockquote>
                            <p>Morangos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
        </>
    )
}

export default About;