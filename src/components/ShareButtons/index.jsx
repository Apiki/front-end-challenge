import { LinkedinLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react';
import {
  ShareButtonContainer,
} from './style';

export function ShareButtons() {
  return (
    <ShareButtonContainer>
      <p className='share__paragraph'>Compartilhe este post</p>
      
      <div className='share__links'>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <TwitterLogo  className="icon" weight="bold" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <LinkedinLogo className="icon" weight="bold" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <WhatsappLogo className="icon" weight="bold" />
        </a>
      </div>
    </ShareButtonContainer>

  );
}