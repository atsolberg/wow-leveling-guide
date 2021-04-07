import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from './styles';

function Header() {
  return (
    <header css={styles}>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Jame&apos;s Leveling Guide</Navbar.Brand>
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
              href="https://web.archive.org/web/20100509001851/http://www.wow-pro.com/leveling_guides/jame_alliance_leveling_guide_chapter_1_old_version"
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
