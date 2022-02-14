import { Link } from "react-router-dom"

import {
  BsArrowLeft
} from "react-icons/bs"

const index = () => {
  return (
    <Link to={"/"} >
      <button className='post__content__return__button'>
        <BsArrowLeft />
        <span>Voltar</span>
      </button>
    </Link>
  )
}

export default index