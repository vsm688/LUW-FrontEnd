import React from 'react';
import Hero from './home/Hero';
import Carousel from './home/Carousel';
import Cards from './home/Cards';
import ButtonWindow from './home/ButtonWindow';
import EnquireSignUp from './home/EnquireSignUp';
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {
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