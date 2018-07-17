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
        <span aria-label="tada" role="img">🎉</span>
        <span aria-label="bridge" role="img">👰</span>
        <span>Mindy &amp; Tyrone</span>
        <span aria-label="groom" role="img">🤵</span>
        <span aria-label="tada" role="img">🎉</span>
      </div>
    </Container>
  );
};

export default Footer;
