import { CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";

import { 
  Button
} from './style';

export function ScrollToTopButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Button className={showScrollButton ? 'active' : ''} onClick={scrollToTop}>
      <CaretUp className="icon" weight="bold" />
    </Button>
  );
}