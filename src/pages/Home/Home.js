import React from 'react'
import './home.scss'
import Banner from '../../components/Baner/banner';
import About from '../../components/About/About';
import Slider from '../../components/Slider/Slider';
import SimilarSigns from '../../components/SimilarSigns/SimilarSigns'
import Footer from '../../components/Footer/Footer';

function Home(){
    return(
        <div className='home'>
            <Banner/>
            <About/>
            <Slider/>
            <SimilarSigns/>
            <Footer/>
        </div>
    )
}

export default Home