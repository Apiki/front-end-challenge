import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { HomeMainContent } from "../components/HomeMainContent"
import './css/home.css'

export default function Home() {


    return (
        <>
            <Header />
            <HeroSection />
            <HomeMainContent />
            <Footer />
        </>
    )
}