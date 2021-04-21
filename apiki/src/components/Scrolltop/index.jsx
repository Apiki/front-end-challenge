import './style.scss';

function Scrolltop() {
  const scrollFunc = () => {
    const scrollToTopButton = document.getElementsByClassName('scroll-top-button')[0];
    const limitToShowButton = 200;
    const contentScrolled = window.scrollY;
    
    if (!scrollToTopButton) return;
    
    scrollToTopButton.className = (contentScrolled > limitToShowButton ) 
      ? "scroll-top-button show" 
      : "scroll-top-button hide";
  };
  
  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  };

  return (
    <a onClick={ scrollToTop } className="scroll-top-button hide" id="js-top" href="##">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
      <span className="scroll-top-button__screen-reader-text">
        Back to top
      </span>
    </a>
  );
};

export default Scrolltop;