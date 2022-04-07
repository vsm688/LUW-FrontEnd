import React, { useEffect } from 'react';
import Hero from './home/Hero';
import Carousel from './home/Carousel';
import Cards from './home/Cards';
import ButtonWindow from './home/ButtonWindow';
import EnquireSignUp from './home/EnquireSignUp';
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {

useEffect(() => {
        console.log(localStorage);
        if (!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false)
        }
    }
    )

    return(
        <>
        <Navbar></Navbar>
        <Hero />
        <Carousel />
        <Cards />
        <ButtonWindow />
        <EnquireSignUp />
        <Footer></Footer>
        </>
    );
}

export default Home;