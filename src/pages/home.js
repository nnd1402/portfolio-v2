import React, {useState} from 'react'


import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import LinksSection from '../components/LinksSection'
import { homeObjOne } from '../components/InfoSection/Data'
import { myLinks } from '../components/LinksSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeObjOne}/>
         <Portfolio />
         <Services />
         <LinksSection {...myLinks}/>
         <Footer />
        </>
    )
}

export default Home
