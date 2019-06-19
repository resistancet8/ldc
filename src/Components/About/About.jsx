import React, { Component } from 'react'
import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import './About.css';

export default class About extends Component {
  render() {
    return (
      <>
        <Container className="my-5" id="about">
          <Row className="mb-5">
            <Col>
              <Card className="bg-secondary shadow each-card">
                <CardHeader className="bg-white border-0">
                  <h2 className="mb-0">VISION</h2>
                </CardHeader>
                <CardBody>
                  <p>To be the preferred company for the Oil & Gas Industry in
                    Libya supplying top world-class products and
                    service.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="bg-secondary shadow each-card">
                <CardHeader className="bg-white border-0">
                  <h2 className="mb-0">MISSION</h2>
                </CardHeader>
                <CardBody>
                  <p>To consistently deliver professional services to our clients
                    through continuous improvement driven by integrity, team work and
                    innovation of our employees.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="bg-secondary shadow each-card">
                <CardHeader className="bg-white border-0">
                  <h2 className="mb-0">OUR VALUES</h2>
                </CardHeader>
                <CardBody>
                  <p>We seek sustainability in everything we do – from our
                    product range through to our business processes.
                    Our customers are our first priority.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div>
            <h1 className="display-3 mb-4">COMPANY OVERVIEW</h1>
            <h2>OUR REAL COMMITMENT REACHES BEYOND GAS & OIL COMPANY.</h2>
            <p>LDC – Libya Development Company was established in 2010 in Tripoli
              under license no. 010419625 and registered under no. 19625 to provide
              various companies with competitive and innovative products and services
              to meet our clients` standards in the Oil & Gas and Infrastructure /
              Construction industry</p>
            <p>With our German office MDC – Middle East Development Company
              GmbH and its global agency principals, as well as our experience in the
              Libyan market for more than 20 years, we can serve our clients with
              top-quality products and services.
            </p>
            <img style={{ width: "100%" }} src="https://source.unsplash.com/500x300/?construction worker" alt="" />
          </div>
        </Container>
        <Container fluid style={{ background: "#eff3f6" }}>
          <Container className="py-5">
            <Row className="mb-5">
              <Col>
                <img style={{ width: "100%" }} src="https://source.unsplash.com/500x300/?user" alt="" />
              </Col>
              <Col>
                <p className="display-3">User</p>
                <h3>CHIEF EXECUTIVE</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit totam, nemo delectus praesentium tenetur explicabo repudiandae dolore iusto, porro cupiditate reprehenderit aliquid reiciendis molestias enim, expedita officiis adipisci veniam cum laborum voluptatem? Eaque ullam autem voluptates modi sint excepturi iure, eligendi ex, obcaecati eos soluta consequatur inventore maiores minus. Dolorem!</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    )
  }
}
