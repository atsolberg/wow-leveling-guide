// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Navbar from 'react-bootstrap/es/Navbar';
import Nav from 'react-bootstrap/es/Nav';

import styles from './styles';

function Header() {
  return (
    <header css={styles}>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Jame's Leveling Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey={1} href="/1">
              Ch 1
            </Nav.Link>
            <Nav.Link eventKey={2} href="/2">
              Ch 2
            </Nav.Link>
            <Nav.Link eventKey={3} href="/3">
              Ch 3
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              eventKey={1}
              href="//github.com/atsolberg/wow-leveling-guide"
            >
              code
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://web.archive.org/web/20100414012649/http://www.wow-pro.com/node/600"
            >
              source
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
