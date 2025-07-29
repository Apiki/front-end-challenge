import './index.css'
import '../../styles/global.css'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__text">
          © {new Date().getFullYear()} Apiki Blog — Desenvolvido por Pedro Marcusso
        </p>
      </div>
    </footer>
  )
}
