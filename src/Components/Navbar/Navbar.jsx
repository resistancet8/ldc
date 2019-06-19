import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row, Col,
  Button
} from "reactstrap";
import './Navbar.css';
import Logo from './../../assets/img/brand/LDCLogo.png';
import MainNavbar from './MainNavbar';
import { Link } from 'react-router-dom';
 
class Toolbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container>
            <Row className="w-100 align-items-center">
              <Col>
                <Link to="/"><img src={Logo} alt="LDC" style={{height: "100px" }}/></Link>
              </Col>
              <Col>
                <Row className="w-100 align-items-center support-links">
                  <Col>
                    <div className="get-a-quote">
                      <div className="email">
                        <Row className="align-items-center">
                          <Col md="2" className="px-1">
                            <i class="fas fa-envelope"></i>
                          </Col>
                          <Col>
                            <p>Email Support</p>
                            <strong>info@ldc.com</strong>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="get-a-quote">
                      <div className="email">
                        <Row className="align-items-center">
                          <Col md="2" className="px-1">
                          <i class="fas fa-phone"></i>
                          </Col>
                          <Col>
                            <p>Call support</p>
                            <strong>+1 459988889</strong>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="get-a-quote">
                      <div className="email">
                        <Button color="danger">Get a Quote</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <MainNavbar/>
      </>
    );
  }
}

export default Toolbar;