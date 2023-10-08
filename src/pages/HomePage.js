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
                <Services/>
                <About/>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage;