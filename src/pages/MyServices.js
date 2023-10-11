import React from 'react';
import AOS from 'aos';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import About from '../components/About.js'
import Services from '../components/Services.js'

function MyServices(){
    AOS.init();
    return(
        <>
        <Header/>
        <main id="main">
            <div className="site-section">
                <div className="container">
                    <div className="row mb-4 align-items-center">
                        <div className="col-md-6" data-aos="fade-up">
                            <h2>Meus Serviços</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                            explicabo inventore.</p>
                        </div>
                    </div>
                </div>

                <div className="site-section pb-0">
                    <div className="container">
                        <Services/>
                        <About/>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
      </>
    )
}

export default MyServices;