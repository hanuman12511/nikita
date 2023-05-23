import { Container, Row,Col,Form,Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const nav=useNavigate();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const[Name,setName]=useState('');
  const[Email,setEmail]=useState('');
  const[Password,setPassword]=useState('');
   
    let submitregister=async()=>{
      console.log(file);
      console.log(fileName);
      
        const formdata= new FormData();
        formdata.append("file",file)
        formdata.append("filename",fileName)
        let data =JSON.stringify( Object.fromEntries(formdata));
      
        console.log(data);
        let params={
       username:Name,
        email:Email,
        password:Password,
         /* image:file */
       }
         console.log(params);
      try {
           let res =await axios.post("register",params).catch(err=>alert(err))
          console.log(res.data);
          let {success,message} =res.data
          if(success){
            alert(message)
            nav("/Login")
            
          }
          else{
            alert(message)
          }
        } catch (error) {
          console.log("error==",error);
          alert(error)
        }
      
      setEmail("")
      setPassword("")
      setName("")
      }






    //}
  return (
    <div>
      <h1>Register</h1>
      <Container>
        <Row>
          <Col>
        
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        
        <Form.Control type="text" placeholder="Enter Name" value={Name} onChange={(d)=>setName(d.target.value)}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
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
      <Button variant="primary" onClick={submitregister}>
        Register
      </Button>
    </Form>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Register;
