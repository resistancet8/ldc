import React from "react";
import {
  Navbar,
  Container,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from './../../assets/img/brand/ldc.jpg';

class Toolbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark border-top" expand="md" id="main-navbar">
          <Container>
          <nav class="navbar-collapse collapse">
						<ul class="nav navbar-nav navbar-left">
            <UncontrolledDropdown>
              <DropdownToggle caret>
                Services
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><Link to="/service/oil-gas">Oil & Gas</Link></DropdownItem>
                <DropdownItem><Link to="/service/chemicals">Chemicals</Link></DropdownItem>
                <DropdownItem><Link to="/service/construction">Construction</Link></DropdownItem>
                <DropdownItem><Link to="/service/manpower">Manpower</Link></DropdownItem>
                <DropdownItem><Link to="/service/security">Security</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              <UncontrolledDropdown>
              <DropdownToggle caret>
                Clients Corner
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><Link to="/enquiry">Enquiry</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle caret>
                Career
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><Link to="/career">Open Positions</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle caret>
                Contact
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><Link to="/contact">Contact Us</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
						</ul>
					</nav>
          </Container>
        </Navbar>
        
      </>
    );
  }
}

export default Toolbar;