import { Link } from 'react-router-dom'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552.png"
          alt=""
        />
      </Link>
    </HeaderContainer>
  )
}
