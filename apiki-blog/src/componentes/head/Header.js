import  React from 'react';
import '../css/reset.css'
import '../css/header.css'
import logo from '../media/apikiLogo.png';
import iconFacebook from '../media/facebookicon.png';
import iconYouTube from '../media/youtibeicon.png';
import iconlinkedin from '../media/linkedinicon.png';
import twittericon from '../media/iconTwitter.png';
import githubicon from '../media/githubicon.png';
import instagramicon from '../media/instagramicon.png';

// para navegação, tive que usar divs porque o ul e li herdaram os estilos inseridos para a página dinâmica//

class Header extends React.Component{
    render(){
        return( 
        <div className="container background" >
           <div className="socialIcons">
           <img className="logotype" src={logo} alt="logotipo da apiki"></img>
           <span className="blogTipe">BLOG</span>
           </div>
          
          <div className="socialIcons line">
           <div><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"><img className="iconSocial lineleft" src={iconFacebook} alt="facebook icone"/></a></div>
           <div><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"><img className="iconSocial" src={instagramicon} alt="instagram icone"/></a></div>
           <div><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"><img className="iconSocial" src={iconYouTube} alt="you tube icone"/></a></div>
           <div><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"><img className="iconSocial" src={twittericon} alt="twitter icone"/></a></div>
           <div><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"><img className="iconSocial" src={iconlinkedin} alt="linkedin icone"/></a></div>
           <div><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"><img className="iconSocial" src={githubicon} alt="git hub icone"/></a></div>
         </div>
        </div>
        
        )
            
    }
}

export default Header;