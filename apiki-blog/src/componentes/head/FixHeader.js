import  React from 'react';
import '../css/reset.css'
import '../css/header.css'
class FixHeader extends React.Component{
    render(){
        return( 
       
          <div className="container subBackground ">
           <div className="menuburger iconSocial"><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">HOME</a></div>
           <div className="menuburger iconSocial"><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">DESEMVOLVIMENTO</a></div>
           <div className="menuburger iconSocial"><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">MOBILE</a></div>
           <div className="menuburger iconSocial"><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">PERFORMANCE</a></div>
           <div className="menuburger iconSocial"><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">SEGURANÇA</a></div>
           <div className="menuburger iconSocial"><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">E-COMMERCE</a></div>
           <div className="menuburger iconSocial"><a href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">SEO </a></div>
         </div>
       
        )        
    }
}

export default FixHeader;