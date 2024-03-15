import LogoNetflix from "../assets/logo.png";
import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <img src={LogoNetflix} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>TV Shows</Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>Recently Added</Nav.Link>
            <Nav.Link>My List</Nav.Link>
          </Nav>
          <Nav className="right-nav">
            <Nav.Link>
              <i class="bi bi-search icons"></i>
            </Nav.Link>
            <Nav.Link>KIDS</Nav.Link>
            <Nav.Link>
              <i class="bi bi-bell icons"></i>
            </Nav.Link>
            <Nav.Link>
              <i class="bi bi-person-circle icons"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
