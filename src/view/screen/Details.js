import{useLocation, useNavigate} from 'react-router-dom'
import{useState} from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap';
import axios from 'axios';
function Details() {

const navigate=useNavigate()

  const loc=useLocation()
      const [g,setg]=useState(loc.state) 
      const [user,setUser]=useState(localStorage.getItem('user')) 
      console.log(g);

      async function buynow(){
console.log("buy");
try {
  let params={...g,username:user}
  console.log(params);

  let res =await axios.post("addtocart",params).catch(err=>alert(err))
  console.log(res.data);
  
  let {success,message,data} =res.data
  if(success){
  alert(message)
console.log(data);

  navigate("/")
  window.location.reload()
  }
  else{
    alert(message)
   }
   } catch (error) {
  alert(error)
}
      }

      async function cartadd(){
console.log("addtocart");
try {
  let params={...g,username:user}
  console.log(params);
  let res =await axios.post("addtocart",params).catch(err=>alert(err))
  console.log(res.data);
  
  let {success,message,data} =res.data
  if(success){
  alert(message)
console.log(data);

  navigate("/")
  window.location.reload()
  }
  else{
    alert(message)
   }
   } catch (error) {
  alert(error)
}
      }

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
          <div className='w-100 p-4'>
            <Button onClick={buynow}>Buy Now</Button>
            <Button onClick={cartadd}>Add to Cart </Button>

          </div>
          </Col>
         
        </Row>
      </Container>
    );
  }
  
  export default Details;
  