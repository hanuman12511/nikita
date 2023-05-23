import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container ,Row,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cartshow(){
    
    const nav = useNavigate()
    const[user,setUser] = useState(localStorage.getItem('user'))
    const[cart,setCart] = useState('')
    const[pay,setPay] = useState('')
    useEffect(()=>{
        async function show(){
                let res =await axios.post('showtocart',{username:user}).catch(e=>console.log(e))
                
                setCart(res?.data)
                let p =0
                res?.map(d=>{
                    p+=d.mrprate
                })

                setPay(p)
        }
        show()
    },[])

    console.log(cart.length>0);
    return(
        <>
        <Container>
            <Row className="bg-success text-light">
                <Col>
                <h1>Cart</h1>
                </Col>
            </Row>

            <Row className="m-4">
               { 
               
               cart.length>0?
               <Col>                {
                    cart&&cart.map(d=>(
                        <Col>
                            <Row>
                                <Col>
                                <div className="d-flex">
                                <img src={d.image}  style={{width:100}}/>
                                <p className="mx-4">{d.name}</p>
                                <p className="mx-4">Rs.{d.mrprate}/-</p>
                                </div>
                              
                              
                                  
                                </Col>
                            </Row>
                        
                        </Col>
                        
                    ))
              
                }</Col>
                :<h4>No item</h4>
                }

               
<Col className="">
<div className="m-4 position-fixed bg-success w-25">
<center> <Button onClick={()=>nav('/orderplace',{state:pay})}>Proceed to Payment</Button></center>
     <p className="border m-4 p-4 text-light">
        Total pay:{pay}
     </p>
     </div>       
</Col>
            </Row>
        </Container>
        </>
    )
}