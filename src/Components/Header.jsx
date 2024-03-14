import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>

      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">

          
            <h3 style={{color:'yellow'}}>   <i className="fa-solid fa-circle-chevron-up fa-bounce fa-xl me-3" style={{ color: '#0ea096' }}></i>
            {' '}
Media Player
            </h3>

          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header