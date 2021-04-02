import { Component } from 'react';
import '../style/sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar single">
        <div className="section">
        <div class="fb-page" data-href="https://www.facebook.com/ApikiWordPress" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ApikiWordPress" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ApikiWordPress">Apiki WordPress</a></blockquote></div>
        </div>
        <div className="section popular">
          <h2 className="section-title">Popular</h2>
          <div className="post clearfix"></div>
        </div>
        <div className="section topics">
          <h2 className="section-title">Topics</h2>
        </div>
      </div>
    )
  };
}

export default Sidebar;
