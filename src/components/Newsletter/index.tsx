import { PaperPlaneTilt, User } from 'phosphor-react'
import './index.css'
import './mediaqueries.css'
export function NewsLetter() {
    return (
        <form className="newsletter-card">
            <p className='newsletter-card-title'>Receba no seu e-mail uma série de conteúdos sobre Infra para WordPress.</p>
            <div className='flex flex-col gap-7'>
                <div className='newsletter-card-input-name hover:text-cor2 hover:border-cor2 hover:opacity-100 group'>
                    <User weight='regular' size={24} />
                    <input className='group-hover:placeholder-cor2' type="text" placeholder='Seu primeiro nome?'></input>
                </div>
                <div className='newsletter-card-input-email hover:text-cor2 hover:border-cor2 hover:opacity-100 group '>
                    <PaperPlaneTilt weight='regular' size={24} />
                    <input className='group-hover:placeholder-cor2' type="email" placeholder='Qual seu E-mail?' />
                </div>
                <button className='newsletter-card-button' type="submit">Receber conteúdos</button>
            </div>
        </form>
    )
}