import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row, Col
} from "reactstrap";
import { Link } from 'react-scroll';
import { Link as RouterLink} from 'react-router-dom';
import './Toolbar.css';

class Toolbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark toolbar-main" style={{background: "#041e42"}} expand="md">
          <Container>
            <Row className="w-100">
              <Col sm="5" md="6">
                <span
                  className="mb-0 text-white font-italic d-none d-lg-inline-block"
                >
                  We help the world growing since 1983
                </span>
              </Col>
              <Col sm="7" md="6">
                <Row>
                  <Col>
                    <Nav className="align-items-center justify-content-end d-none d-md-flex text-right toolbar-links" navbar>
                      <Link style={{cursor: "pointer"}} to="services" className="mr-4 text-white" spy={true} smooth={true} duration={500}>Services</Link>
                      <Link style={{cursor: "pointer"}} to="about" className="text-white" spy={true} smooth={true} duration={500}>About</Link>
                    </Nav>
                  </Col>
                  <Col md="3">
                    <Nav className="align-items-center justify-content-end d-none d-md-flex text-right toolbar-links" navbar>
                      <RouterLink style={{cursor: "pointer"}} target='_blank' to="//www.facebook.com" className="mr-4 text-white"><i class="fab fa-facebook-f"></i></RouterLink>
                      <RouterLink style={{cursor: "pointer"}} target='_blank' to="//www.instagram.com" className="mr-4 text-white"><i class="fab fa-instagram"></i></RouterLink>
                      <RouterLink style={{cursor: "pointer"}} target='_blank' to="//www.twitter.com " className="text-white"><i class="fab fa-twitter"></i></RouterLink>
                    </Nav>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Toolbar;