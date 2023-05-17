import{useLocation} from 'react-router-dom'
import{useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
function Details() {
      const loc=useLocation()
      const [g,setg]=useState(loc.state) 
      console.log(g);
    return (
      <Container>
        <Row>
          <Col lg={6} className=' ' >
            <div className='m-4'>
           <img src={g.image} className='productimg'/> 
           </div>
          
          </Col>
          <Col lg={6} className=''>
          <div  className='proname'>
          <h3> Name- {g.name}</h3>
          <h5>Rs.{g.mrprate}/-</h5>
          </div>
         
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Details;
  