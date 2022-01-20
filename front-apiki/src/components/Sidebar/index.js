import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar_body">
        <h6>Receba no seu e-mail uma série de conteúdos sobre Infra para WordPress.</h6>
        <FloatingLabel controlId="floatingUser" label="Primeiro Nome" className="mb-3" >
          <Form.Control type="name" placeholder="Primeiro Nome" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email">
          <Form.Control type="email" placeholder="Email" />
        </FloatingLabel>
        <Button variant="outline-primary">Receber</Button>
      </div>

    </aside>
  );
}

export default Sidebar;