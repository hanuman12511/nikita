import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Home from './view/screen/Home';
/* import About from './view/screen/About'; */
import Details from './view/screen/Details';
import Register from './view/screen/Resister';
import Login from './view/screen/Login';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './view/style/Style.css'
import { Container, Row, Col, Button, Nav, Form, NavDropdown, Navbar, FormText, } from 'react-bootstrap';
import Cartshow from './view/screen/Cartshow';

function App() {

  const [user,setUser]=useState(localStorage.getItem('user'));


function logout(){
  localStorage.clear()
  window.location.reload()
}

  return (
    <>
      <BrowserRouter>
      {/* <Link className='link' to="/">Home</Link> 
      <Link className='link' to="/Details">Details</Link>
      <Link className='link' to="/About">About</Link>
      <Link className='link' to="/Register">Register</Link>
      <Link className='link' to="/Login">Login</Link>*/}
        <Container>
          <Row>
            <Col>
              <Navbar bg="light" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="#">Spinny </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0 mx-5"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      

                      <Nav.Link href="/"><Link className='link' to="/">Home</Link></Nav.Link> 
                       <Nav.Link href="/"><Link className='link' to="/Buy Car">Buy Car</Link></Nav.Link>
                       {!user&&
                       <><Nav.Link href="/"> <Link className='link' to="/Register">Register</Link></Nav.Link>
                       <Nav.Link href="/"><Link className='link' to="/Login">Login</Link></Nav.Link>
                       </>}
                      
                   
                    <Form className="d-flex mx-5 " style={{textAlign:'center',justifyContent:'center'}}>
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 mx-5"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                      
                    </Form>
                   
                    {
                        user?
                        <Nav.Link><Link to={"/cartshow"} className="cart text-decoration-none mx-4">🛒Cart</Link></Nav.Link>
                        :null
                      }
                     
                      
                    { user&& <Button variant="outline-success" onClick={logout}>logout</Button>}
                   
                    </Nav>
                   
                  </Navbar.Collapse>
                </Container>
              </Navbar>

            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path='/' element={<Home />} />
         {/*  <Route path='/about' element={<About />} /> */}
           <Route path='/Details' element={<Details />} /> 
           <Route path='/cartshow' element={<Cartshow />} /> 
           
          <Route path='/Register' element={<Register/>} />
          <Route path='/Login' element={<Login/>} />
           
          
        </Routes>
        
        <Container>
        <div className='visit'>
          <h3>Spinny® Cars</h3>
          <h6>Spinny is the most trusted way of buying and selling used cars.</h6>
             <h6>Choose from over 5000 fully inspected second-hand car models.</h6>
             <h6> Select online and book a test drive at your home or at a Grove Car Hub near you.</h6>
              <h6>Get a no-questions-asked 5-day money back guarantee and a free one-year </h6>
            <h6>comprehensive service warranty with Assured Resale Value on every Spinny Assured® car.</h6>
        </div>
        </Container>
        
      </BrowserRouter>

    </>
  );
}

export default App;
