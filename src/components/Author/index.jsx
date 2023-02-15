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
          className="image" 
          src= {image}
          alt={`foto de perfil de ${name}`}
      />
      <span className="name">{name}</span>
    </AuthorContainer>
  );
}