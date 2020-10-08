import React from 'react';
import Social from './social';

export default function Sociais() {
  return (
    <div className="social-icons">
      <Social choosen="fab fa-facebook" name="FACEBOOK"/>
      <Social choosen="fab fa-linkedin" name="LINKEDIN"/>
      <Social choosen="fab fa-instagram" name="INSTAGRAM"/>
      <Social choosen="fab fa-twitter" name="TWITTER"/>
      <Social choosen="fab fa-youtube" name="YOUTUBE"/>
      <Social choosen="fab fa-github" name="GITHUB"/>
      <Social choosen="fas fa-rss" name="RSS"/>
    </div>
  );
}
