import './index.css'
import './mediaqueries.css'
import logoApiki from '../../assets/apikiBlogHeader.svg'

export function LoadingPage() {
    return (
        <div className="loading-page">
            <img src={logoApiki} alt="Logo da apiki" />
        </div>
    )
}