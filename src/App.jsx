import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="topNavbar">
      <Navbar expand="lg" light bg="light" >
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav">
          <Navbar.Nav>
            <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
            <Nav.ItemLink href="#">Projects</Nav.ItemLink>
            <Nav.ItemLink href="#">Contact</Nav.ItemLink>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Resources</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
          </Navbar.Nav>
        </Collapse>
      </Navbar>
      </div>
  )
}

export default App
