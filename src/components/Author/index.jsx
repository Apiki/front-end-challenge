import {
  AuthorContainer,
} from './style';

export function Author({href, image, name}) {
  return (
    <AuthorContainer 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img 
          className="author__image" 
          src= {image}
          alt={`foto de perfil de ${name}`}
      />
      <span className="author__name">{name}</span>
    </AuthorContainer>
  );
}