import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css";

const Footer = () => (

<footer class="page-footer font-small special-color-dark pt-4" id="footer-container">
  <div class="container">
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <img src="https://cdn.icon-icons.com/icons2/1582/PNG/512/facebook_108044.png" alt="..."></img>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <img src="https://cdn.icon-icons.com/icons2/1211/PNG/128/1491579542-yumminkysocialmedia22_83078.png" alt="..."/>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <img src="https://cdn.icon-icons.com/icons2/1211/PNG/128/1491580635-yumminkysocialmedia26_83102.png" alt="..."/>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <img src="https://cdn.icon-icons.com/icons2/1211/PNG/128/1491580651-yumminkysocialmedia28_83061.png" alt="..." />
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <img src="https://cdn.icon-icons.com/icons2/1121/PNG/128/1486147202-social-media-circled-network10_79475.png" alt="..." />
        </a>
      </li>
    </ul>
  </div>

  <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://blog.apiki.com"> Blog.apiki.com</a>
  </div>
</footer>);

export default Footer;