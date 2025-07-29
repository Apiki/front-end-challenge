import { Link } from 'react-router-dom'
import './index.css'
import '../../styles/global.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          Apiki Blog
        </Link>
      </div>
    </header>
  )
}