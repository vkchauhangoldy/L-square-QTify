import React from 'react'
import HeroImage from '../../Components/HeroImage/HeroImage';
import Albums from '../../Components/Albums/Albums';
import Footer from '../../Components/Footer/Footer';
import MusicPlayer from '../../Components/MuiscPlayer/MusicPlayer';

const Home = () => {
    return (
        <div>   
            <HeroImage />
            <Albums />
            <Footer />
            <MusicPlayer />
        </div>
    )
}

export default Home