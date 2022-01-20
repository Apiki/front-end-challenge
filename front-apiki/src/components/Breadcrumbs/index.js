import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Sidebar = () => {
  return (
    <div className="page_header">
      <Container>
        <Row>
          <Col xs="12">
            <p id="breadcrumbs"><span><a>Início</a> » <span class="breadcrumb_last" aria-current="page">Blog do Desenvolvedor</span></span></p>
            <h1>Blog do Desenvolvedor</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sidebar;