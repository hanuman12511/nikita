import { Container, Row, Col, Carousel, Card, ListGroup } from "react-bootstrap";
import { bannerimg, menu, brand, life,demo,bmw,max,van, carinfo,body} from '../data/Data.js'
import { useNavigate } from 'react-router-dom'





function Home() {
  const nav = useNavigate()
  console.log(nav);
  function productInfo(g) {
    nav('Details', { state: g })
  }
  return (
    <Container>
                                     
    
          
          
        
      
      <div className="item">
        <h5>Explore by</h5>
      {
          carinfo.map(function (s) {
            return (
              <div className="return">
                <form action="/action_page.php">
                  <select id="Explore"name="Explore" className="banner">
                    <option value={s.Name} selected disabled hidden>{s.Name}</option>
                    <option value={s.opt1}>{s.opt1}</option>
                    <option value={s.opt2}>{s.opt2}</option>
                    <option value={s.opt3}>{s.opt3}</option>
                    <option value={s.opt4}>{s.opt4}</option>
                  </select>
                </form>
              
              </div>
            )
          })
        } 
      </div>
    
      
      <Row>
        <Col>
          <Carousel>
            {
              bannerimg.map(function (g) {
                return (
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src={g}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>luxury cars</h3>
                      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })

            }
          </Carousel>
        </Col>
      </Row>
      <Row>
        {
          menu.map(function (g) {
            return (
              <Col onClick={() => { productInfo(g) }}>
                <Card style={{ width: '18rem' }} className="cur"  >
                  <Card.Img variant="top" src={g.image} />
                  <Card.Body>

                    <Card.Text>
                      {g.name}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Rs.{g.mrprate}/-</ListGroup.Item>
                    {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item> */}
                    {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Details</Card.Link>
                    <Card.Link href="#">Add to cart</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <div className="models">
        <div className="line">
          <hr></hr>
        </div>
        <h4>Explore Popular Brands</h4>
        <div className="line">
          <hr></hr>
        </div>

      </div>
      <div>
        {
          brand.map(function (f) {
            return (
              <div className="tata">
                <img src={f} />
              </div>
            )
          })
        }
      </div>
      <div className="life">
        <div className="last">
          <hr></hr>
        </div>
        <h4>Explore by Lifestyle</h4>
        <div className="line">
          <hr></hr>
        </div>

      </div>
      <div>

        {
          life.map(function (k) {
            return (
              <div className="motor">
                <div className="kia">
                  <img src={k} style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            )
          })
        }

      </div>
      <div className="cars">
      <div className="line3">
          <hr></hr>
        </div>
        <h4>50+ similar luxury cars available</h4>
        <div className="line3 ">
          <hr></hr>
        </div>

      </div>
      <div className="child"> 
      <div className="child2">
        {
          max.map(function (m) {
            return (
              <div className="tata2">
                <img src={m} style={{ width: '100%', height: '100%' }} />
              </div>
            )
          })
        }
      </div>
      </div>
      <div className="life">
        <div className="last">
          <hr></hr>
        </div>
        <h4>buy luxury cars</h4>
        <div className="line">
          <hr></hr>
        </div>

      </div>
      <Row>
        {
          van.map(function (b) {
            return (
              <Col onClick={() => { productInfo(b) }}>
                <Card style={{ width: '18rem' }} className="cur"  >
                  <Card.Img variant="top" src={b.image} />
                  <Card.Body>

                    <Card.Text>
                      {b.name}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Rs.{b.mrprate}/-</ListGroup.Item>
                    {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item> */}
                    {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Details</Card.Link>
                    <Card.Link href="#">Add to cart</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <div className="thar">
        <h2>How Spinny Works</h2>
        </div>
        <div className="get">
          <div>
          {
          bmw.map(function (c) {
            return (
              <div className="take">
                <img src={c} />
              </div>
            )
          })
        }
          </div>
          

        </div>
        <div className="rr">
          <div className="must">
          <h4>Choose from the bestpre-owned cars</h4>
          </div>
          <div className="must">
            <h4>Online Payment.
            Doorstep Delivery.</h4>
          </div>
          <div className="must">
            <h4>Take a test drive at your
            Home or Spinny Hub</h4>
          </div>

        </div>
        <div className="life">
        <div className="last">
          <hr></hr>
        </div>
        <h4>Over 2 Lakh Spinny Love Stories</h4>
        <div className="line">
          <hr></hr>
        </div>

      </div>
      <div className="data1">
         {
          body.map(function (t) {
            return (
              <div className="data">
                <img src={t} />
              </div>
            )
          })
        }
      </div>
    
        

    
      







    </Container>




  );
}

export default Home;
