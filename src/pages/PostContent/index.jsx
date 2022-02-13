import exampleImg from '../../assets/PostCardExampleImg2.png'
import exampleImg2 from '../../assets/PostCardExampleImg.png'
import "./index.css"

import Header from "../../components/Header"

import {
  BsArrowLeft
} from "react-icons/bs"

const index = () => {
  return (
    <>
      <Header />
      <div className='post__content'>
        <button className='post__content__return__button'>
          <BsArrowLeft />
          <span>Voltar</span>
        </button>
        <div className='post__content__header'>
          <img className='post_content__header__image' src={exampleImg} alt="" />
          <div className='post__content__Info'>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero optio, magni
            </h2>
            <div>
              <img className='post__content__author__image' src={exampleImg2} alt="" />
              <span>By: Lorem Silva</span>
            </div>
            <br />
            <div>
              <span>
                Data da postagem: 12/02/2022
              </span>
            </div>
            <br />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur blanditiis tempora minima nobis. Quidem at veritatis</p>
            </div>
          </div>
        </div>
        <br />
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos libero deleniti veniam, earum necessitatibus accusantium modi a id voluptatem. Vel dignissimos eum inventore perspiciatis iste modi doloribus reprehenderit nulla quae?</p>
        <br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius facilis veniam dolorem delectus eveniet nostrum quaerat magni, aut dignissimos ipsam possimus, architecto deserunt sit modi, corporis sequi reprehenderit corrupti enim.</p>
        <button className='post__content__return__button'>
          <BsArrowLeft />
          <span>Voltar</span>
        </button>
      </div>
    </>
  )
}

export default index