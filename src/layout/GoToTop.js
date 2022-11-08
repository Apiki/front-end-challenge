import {useState} from 'react';

function GoToTop(){
    let [visible, setVisible] = useState(false);
  
    function toTop(){
      window.location.href = "#";
    }
  
    document.addEventListener('scroll', ()=>{
      window.scrollY >=100 ? setVisible(true) : setVisible(false);
    });
   
    return (
      <div className="goToTop" onClick={toTop} style={{
          transform: `translateX(${visible ? '0' : '100px'})`
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 478.28"><path fillRule="nonzero" d="M182.99 66.25v229.33c0 71.36 11.21 106.72 36.68 122.97 27.17 17.31 75.04 17.92 143.99 17.92h127.43c11.53 0 20.91 9.38 20.91 20.91s-9.38 20.9-20.91 20.9H363.66c-75.98 0-128.99-.82-166.34-24.63-39-24.88-56.14-70.44-56.14-158.07V67.43L36.97 193.44c-7.35 8.88-20.51 10.13-29.4 2.78-8.88-7.34-10.13-20.51-2.78-29.39C47.05 115.72 89.08 63.07 132.24 12.88 139.78 4.77 149.77.47 159.97.03c9.97-.39 20.12 2.85 28.35 9.66l3.38 3.25 134.69 153.89c7.56 8.64 6.69 21.83-1.95 29.39-8.65 7.56-21.84 6.69-29.4-1.95L182.99 66.25z"></path></svg>
      </div>
    );
  }
  export default GoToTop;