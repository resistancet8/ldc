import React, { Component } from 'react'
import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody, ListGroup, ListGroupItem, Badge
} from "reactstrap";
import './Services.css';

export default class Services extends Component {
  render() {
    return (
      <>
        <Container fluid style={{ background: "#eff3f6" }} id="services">
          <Container className="py-5">
            <h1 className="display-1 mb-4">Services</h1>
            <Row className="mb-5">
              <Col lg="4">
                <div className="each-service">
                  <i className="fa fa-fire"></i>
                  <h4 className="text-uppercase">Oil & Gas / Petrochemicals & Drilling Equipment</h4>
                  <p>Products and
                    Services covering
                    the entire range
                    for the Oil & Gas
                    industry
                    </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="each-service">
                  <i className="fa fa-fire"></i>
                  <h4 className="text-uppercase">Chemicals & Oil Remediation and Oil Cleaning Products</h4>
                  <p>Product solutions
for:
- Oil Cleaning
- Land Remediation
- Oil Binding /
 Separation &
 Recovery</p>
                </div>
              </Col>
              <Col lg="4">
                <div className="each-service">
                  <i className="fa fa-cubes"></i>
                  <h4 className="text-uppercase">Construction /
Infrastructure</h4>
                  <p>Consulting, Design,
Engineering and
Construction for
infrastructure projects
(e.g., airports,
industrial plants, ports,
camps)</p>
                </div>
              </Col>
              <Col lg="4">
                <div className="each-service">
                  <i className="fa fa-user"></i>
                  <h4 className="text-uppercase">Manpower Supply</h4>
                  <p>Manpower supply for
the entire fields of Oil
& Gas Industry as
well as Construction
Industry
</p>
                </div>
              </Col>
              <Col lg="4">
                <div className="each-service">
                  <i className="fa fa-gears"></i>
                  <h4 className="text-uppercase">Security Products and
Services</h4>
                  <p>German Multi –
 Level-Security
 Technologies &
 Products
• Armoured Vehicles</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    )
  }
}
