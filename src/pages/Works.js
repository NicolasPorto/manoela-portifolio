import React from 'react';
import AOS from 'aos';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Projects from '../components/Projects.js'
import About from '../components/About.js'

function Works() {
    AOS.init();
    return (
        <>
        <Header/>
        <main id="main">
            <Projects/>
            <About/>
        </main>
        <Footer/>
        </>
    )
}

export default Works;