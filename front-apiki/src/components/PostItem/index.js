import React from 'react';
import { Link } from 'react-router-dom';
import Undefined from '../../assets/undefined.png';
import { Card, Col } from 'react-bootstrap';



const PostCard = ({ post }) => {
  return (
    <Col xs="12" md="6" xl="6" className="postItem">


      <Link to={`/${post.slug}`}>
        <Card>
          <Card.Img variant="top" src={post['_embedded']["wp:featuredmedia"] ? post['_embedded']["wp:featuredmedia"][0].source_url : Undefined} />
          <Card.Body>
            <Card.Title>{post['title']["rendered"]}</Card.Title>
            <Card.Text>
              {post['excerpt']["rendered"]}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{post['_embedded']["author"][0].name} | {new Date(post.date).toLocaleDateString()}</small>
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  );
}

export default PostCard;
