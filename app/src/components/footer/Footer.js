import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <Container fluid className="bg-light py-3">
      <Row className="justify-content-center align-items-center text-center">
        <Col xs="12">
          stuff to add here for footer.
        </Col>
      </Row>
      <hr />
      <div className="text-center small">
        🎉 👰 Mindy &amp; Tyrone 🤵 🎉
      </div>
    </Container>
  );
};

export default Footer;
