import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="p-5 bg-white">
        <Container>
          <Row>
            <Col md='8'>
              <Form>
                <h2>Contact Details</h2>
                <div className="mb-5">
                  <FormGroup>
                    <Label for="fullname">Full Name</Label>
                    <Input type="text" name="address" id="fullname" placeholder="Full name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input type="text" id="phone" placeholder="Phone Number" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" placeholder="Enter Email ID" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Subject">Subject</Label>
                    <Input type="text" name="subject" id="subject" placeholder="Subject" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">Message</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Write Message" style={{ minHeight: "100px" }} />
                  </FormGroup>
                  <Button color="danger" className="mb-3">ASK A QUOTE</Button>
                </div>
              </Form>
            </Col>
            <Col md="4">
              <h2>Contact Info</h2>
              <div>
                <div class="info-text mx-3 my-3"><span class="mr-2 fa fa-map-marker"></span> 99 S.t Jomblo Park Pekanbaru 28292. Indonesia</div>
                <div class="info-text mx-3 my-3"><span class="mr-2 fa fa-phone"></span> (0761) 654-123987</div>
                <div class="info-text mx-3 my-3"><span class="mr-2 fa fa-envelope"></span> info@yoursite.com</div>
                <div class="info-text mx-3 my-3"><span class="mr-2 fa fa-clock-o"></span>Mon - Sat 09:00 - 17:00</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Contact;