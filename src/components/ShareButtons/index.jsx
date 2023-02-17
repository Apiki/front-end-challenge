import { LinkedinLogo, FacebookLogo , TelegramLogo, WhatsappLogo } from 'phosphor-react';
import {
  ShareButtonContainer,
} from './style';

export function ShareButtons({post}) {
  const slug = post.slug;
  const link = `https%3A%2F%2Fnome-do-site.vercel.com%2F${slug}`;
  const title = post.title.rendered.replaceAll(' ', '+');

  const buttons = [
    {
      label: 'facebook',
      icon: <FacebookLogo className="icon" weight="light" />,
      href: `http://www.facebook.com/sharer.php?u=${link}&p${title}=${title}`,
    },
    {
      label: 'linkedin',
      icon: <LinkedinLogo className="icon" weight="light" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${link}&title=${title}`,
    },
    {
      label: 'telegram',
      icon: <TelegramLogo className="icon" weight="light" />,
      href: `https://telegram.me/share/url?url=${link}`,
    },
    {
      label: 'whatsapp',
      icon: <WhatsappLogo className="icon" weight="light" />,
      href: `https://api.whatsapp.com/send?text=${title}%0Anome-do-site.vercel.com%2Fposts%2F${slug}`,
    },
  ];

  return (
    <ShareButtonContainer>
      <p className='share__paragraph'>Compartilhe este post</p>
      
      <div className='share__links'>
        {buttons.map(button => (
          <a 
            key={button.label}
            href={button.href} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {button.icon}
          </a>
        ))}
      </div>
    </ShareButtonContainer>

  );
}