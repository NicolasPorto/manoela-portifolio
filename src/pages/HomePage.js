import React from 'react';
import Projects from '../components/Projects';
import Services from '../components/Services';
import About from '../components/About';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function HomePage() {
    return (
        <>
            <Header/>
            <main id="main">
                <Projects/>

                <div className="site-section">
                    <div className="container">
                        
                        <div className="row justify-content-center text-center mb-4">
                            <div className="col-5">
                                <h3 className="h3 heading">Meus Serviços</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                            </div>
                        </div>
                        <Services/>
                    </div>
                </div>

                <About/>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage;