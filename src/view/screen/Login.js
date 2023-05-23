import { Container, Row,Col,Form,Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  let navigate = useNavigate();
  const[Email,setEmail]=useState('');
  const[Password,setPassword]=useState('');

  let submitlogin=async()=>{
    
    let params={
      email:Email,
      password:Password
    }
    
    console.log(params);
    try {
      let res =await axios.post("login",params).catch(err=>alert(err))
      console.log(res.data);
      
      let {success,message,data} =res.data
      if(success){
      alert(message)
   console.log(data);
     localStorage.setItem("user",Email)
    
      navigate("/")
      window.location.reload()
      }
      else{
        alert(message)
       }
       } catch (error) {
      alert(error)
    }
    setEmail("")
    setPassword("")
  }


  function Login(){
    
    console.log(Email);
    console.log(Password);
    alert("Login")
  }
  return (
    <div>
      <h1>Login</h1>
      <Container>
        <Row>
          <Col>
        
          <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        
        <Form.Control type="text" placeholder="Enter Name" value={Name} onChange={(d)=>setName(d.target.value)}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>*/}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        
        <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(d)=>setEmail(d.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={Password} onChange={(d)=>setPassword(d.target.value)}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox"> */}
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      {/* </Form.Group> */}
      <Button variant="primary" onClick={submitlogin}>
        Login
      </Button>
    </Form>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Login;
