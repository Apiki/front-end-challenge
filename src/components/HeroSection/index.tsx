import { FacebookLogo, GithubLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { NewsLetter } from '../Newsletter'
import LogoHeroSection from '../../assets/logoHeroSection.svg'
import './index.css'
import './mediaqueries.css'


export function HeroSection() {
    return (
        <>
            <div className='container-fluid-hero'>

                <div className="container-hero-section">
                    <img className='logo-background' src={LogoHeroSection} alt="apiki background" />
                    <div className='hero-section'>
                        <div className='hero-section-content'>
                            <div className='flex flex-col gap-8'>
                                <h1 className='title-hero-section'>Bem vindo ao nosso blog de <span className='hero-section-gradient'>Desenvolvimento Wordpress para Dev’s.</span></h1>
                                <h4 className='subtitle-hero-section'>Desenvolva seu negócio, desenvolvendo com WordPress.</h4>
                            </div>
                            <div className='hero-section-social-media'>
                                <p className='hero-section-follow-us'>Siga-nos nas nossas redes sociais</p>
                                <div className='flex gap-4 text-hero-section-text-color'>
                                    <Link to={''}><FacebookLogo size={32} /></Link>
                                    <Link to={''}><YoutubeLogo size={32} /></Link>
                                    <Link to={''}><TwitterLogo size={32} /></Link>
                                    <Link to={''}><GithubLogo size={32} /></Link>
                                    <Link to={''}><InstagramLogo size={32} /></Link>
                                </div>
                            </div>
                        </div>
                        <NewsLetter />
                    </div>
                </div>

            </div>







        </>
    )
}