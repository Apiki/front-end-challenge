import React from 'react';

const apikiLinks = {
  facebook: 'https://www.facebook.com/ApikiWordPress',
  linkedin: 'https://www.linkedin.com/company/apiki',
  instagram: 'https://www.instagram.com/apikiwordpress/',
  twitter: 'https://twitter.com/apikiWordPress',
  youtube: 'https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA',
  github: 'https://github.com/Apiki',
  rrs: 'https://blog.apiki.com/feed/',
};

export default function Social(props) {
  const { choosen, name } = props;
  return (
    <div>
      <a href={apikiLinks[name.toLowerCase()]}>
        <i class={choosen}>
          <span className="icon-description">{name}</span>
        </i>
      </a>
    </div>
  );
}
