import React, { Component } from 'react'
import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody, ListGroup, ListGroupItem, Badge
} from "reactstrap";
import './Service.css';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';
import Quill from '../../../node_modules/quill/dist/quill';

Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)

var options = {
  modules: {
    imageDrop: true,
        imageResize: {
          displayStyles: {
            backgroundColor: 'black',
            border: 'none',
            color: 'white'
          },
        },
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      ['link', 'image'],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ],
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
};

class Service extends Component {

  state = {
    quill: null,
    html: ""
  };

  componentDidMount() {
    console.log(Quill);
    var editor = new Quill('#editor', options);
    this.setState({
      quill: editor
    })
  }

  handleClick() {
    console.log(this.state.quill.root.innerHTML)
    document.querySelector("#htmlsave").innerHTML= this.state.quill.root.innerHTML
  }

  render() {
    return (
      <Container>
        <h2 className="services-header">Services/Oil & Gas</h2>
        <Row className="bg-white mt-4 p-3">
          <Col md="8" style={{padding: 0}}>
            <div style={{height: "600px"}}>
              <div id="editor"></div>
            </div>
            
          </Col>
          <Col md="4" style={{padding: 0}}>
            <div className="p-3">
            <h2>Contact Info</h2>
              <div>
                <div class="info-text mx-3 my-3"><span class="mr-2 fa fa-map-marker"></span> 99 S.t Jomblo Park Pekanbaru 28292. Indonesia</div>
                <div class="info-text mx-3 my-3"><span class="mr-2 fa fa-phone"></span> (0761) 654-123987</div>
                <div class="info-text mx-3 my-3"><span class="mr-2 fa fa-envelope"></span> info@yoursite.com</div>
                <div class="info-text mx-3 my-3"><span class="mr-2 fa fa-clock-o"></span>Mon - Sat 09:00 - 17:00</div>
                <div id="htmlsave"></div>
              </div>
              <button onClick={() => {
              this.handleClick();
            }}>click</button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Service;