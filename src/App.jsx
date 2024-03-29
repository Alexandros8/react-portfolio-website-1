import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            {/* <Portfolio /> */}
            {/* <Testimonials /> */}
            <Contact />
            <Footer />

        </>
    )
}

export default App