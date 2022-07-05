import React from 'react'
import styles from "./fo.module.css"
import logo from './logo.png'
import {BsFacebook} from 'react-icons/bs'
import{AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className={styles.rodape}>
   <div className={styles.imagem}>
  <img src={logo} alt='' className={styles.lo}></img>
  <h3>bla bla bla</h3>
  <h3>bla bla bla</h3>
    <div className={styles.icons}>
     <BsFacebook className={styles.icon}/>
     <AiOutlineTwitter className={styles.icon}/>
     <AiFillLinkedin className={styles.icon}/>
    </div>
    </div>
    <div className={styles.desc1}>
      <div className={styles.desc2}>

   <div className={styles.menu1}>
     <h1>Page</h1>
     <h3>Homepage</h3>
     <h3>Features</h3>
     <h3>About Us</h3>
     <h3>Agents</h3>
   </div>
   <div className={styles.menu2}>
   <h1>Support</h1>
     <h3>FAQ,s</h3>
     <h3>Support Center</h3>
     <h3>Security</h3>
     
   </div>
      </div>
   <div className={styles.menu3}>
   <h1>Contact Us</h1>
     <h3>+234- 70-1449-8006</h3>
     <h3>homie@gmail.com</h3>
     <h3>23, Ali express way lagos, Nigeria</h3>
     
   </div> 
      </div>   
  </div>
  )
}

export default Footer