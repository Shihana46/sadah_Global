import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <>
      <div><img style={{ height: '100%', width: '100%' }} src="https://www.sadahglobal.com/cdn/shop/files/IMG_7335.webp?v=1730297580&width=2000" alt="" />
        <p style={{ marginTop: '-50PX', fontSize: '10px' }}>  GIFT WITH SADAH THIS DIWALI FLAT 30% OFF</p>
        <p style={{ marginTop: '-10PX' }}>FREE GIFT BOX</p>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <div className='d-flex justify-content-center' style={{ color: 'grey' }}>NALKI EMBRIODERY</div><br />
        <div className='row mt-5 p-5'>
          <div className='col-lg-4'>
            <Card className='border border-box' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.sadahglobal.com/cdn/shop/files/MRD08604.webp?v=1727697683&width=800" />
              <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                <Card.Text>
                  <div style={{ fontSize: '10px', marginLeft: '60px' }}>
                    <p style={{ marginLeft: '6px' }}>SADAH WOMEN'S BLACK</p>
                    <p style={{ marginLeft: '6px' }}>FLORAL LEAF JAAL WALK</p>
                    <p style={{ marginLeft: '6px' }}>EMBRIODERY FINE WOOL</p>
                    <p style={{ marginLeft: '-5px' }}> BLEND SLEEVELESS CARDIGAN</p>
                    <p className='text-danger' style={{ marginLeft: '40px' }}>RS.7,490</p>
                  </div>

                </Card.Text>
                <Button variant="" style={{ marginLeft: '70px', color: 'black' }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Button>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>

            <Card className='border border-box' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.sadahglobal.com/cdn/shop/files/MRD00041-Edit_2faa02fa-1027-45bd-a452-e25059437172.webp?v=1727696347&width=400" />
              <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                <Card.Text>
                  <div style={{ fontSize: '10px', marginLeft: '60px' }}>
                    <p style={{ marginLeft: '6px' }}>SADAH WOMEN'S NAVY</p>
                    <p style={{ marginLeft: '6px' }}>FLORAL LEAF JAAL WALK</p>
                    <p style={{ marginLeft: '6px' }}>EMBRIODERY FINE WOOL</p>
                    <p style={{ marginLeft: '-5px' }}> BLENDCAPE (FREE SIZE)</p>
                    <p className='text-danger' style={{ marginLeft: '40px' }}>RS.4,625</p>
                  </div>

                </Card.Text>
                <Button variant="" style={{ marginLeft: '70px', color: 'black' }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>

            <Card className='border border-box' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.sadahglobal.com/cdn/shop/files/MRD00127-Edit-Edit_2d7e9e9e-ea87-467e-8ae7-e112003297e9.jpg?v=1727960403&width=400" />
              <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                <Card.Text>
                  <div style={{ fontSize: '10px', marginLeft: '60px' }}>
                    <p style={{ marginLeft: '6px' }}>SADAH WOMEN'S PISTA</p>
                    <p style={{ marginLeft: '6px' }}>WING WITH FEATHERS NALKI</p>
                    <p style={{ marginLeft: '6px' }}>EMBRIODERY FINE WOOL</p>
                    <p style={{ marginLeft: '-5px' }}>BLENDCAPE (FREE SIZE)</p>
                    <p className='text-danger' style={{ marginLeft: '40px' }}>RS.4,625</p>
                  </div>

                </Card.Text>
                <Button variant="" style={{ marginLeft: '70px', color: 'black' }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Button>
              </Card.Body>
            </Card>
          </div>

        </div>
        <div className='btn justify-content-center d-flex '>
          <button className='btn btn-warning '>View All</button>
        </div>
        <div className='d-flex justify-content-center' style={{ color: 'grey' }}>KANI

        </div>
        <div className='row mt-5 p-5'>

          <div className='col-lg-4'>

            <Card className='border border-box' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.sadahglobal.com/cdn/shop/files/MRD00602-Edit.webp?v=1727696592&width=400" />
              <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                <Card.Text>
                  <div style={{ fontSize: '10px', marginLeft: '60px' }}>
                    <p style={{ marginLeft: '22px' }}>SADAH WOMEN'S GREY</p>
                    <p style={{ marginLeft: '25px' }}>ALLOWER JAAL NALKI</p>
                    <p style={{ marginLeft: '15px' }}>EMBRIODERY FINE WOOL</p>
                    <p style={{ marginLeft: '40px' }}> BLEND STOLE</p>
                    <p className='text-danger' style={{ marginLeft: '50px' }}>RS.2,999</p>
                  </div>

                </Card.Text>
                <Button variant="" style={{ marginLeft: '70px', color: 'black' }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>

            <Card className='border border-box' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.sadahglobal.com/cdn/shop/files/MRD09988-Edit.webp?v=1727877006&width=400" />
              <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                <Card.Text>
                  <div style={{ fontSize: '10px', marginLeft: '60px' }}>
                    <p style={{ marginLeft: '22px' }}>SADAH WOMEN'S TOOSHI KANI</p>
                    <p style={{ marginLeft: '25px' }}>ALLOWER JAAL NALKI</p>
                    <p style={{ marginLeft: '15px' }}>EMBRIODERY FINE WOOL</p>
                    <p style={{ marginLeft: '40px' }}> BLEND STOLE</p>
                    <p className='text-danger' style={{ marginLeft: '50px' }}>RS.2,799</p>
                  </div>

                </Card.Text>
                <Button variant="" style={{ marginLeft: '70px', color: 'black' }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>

            <Card className='border border-box' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.sadahglobal.com/cdn/shop/files/MRD09978-Edit.webp?v=1727877086&width=400" />
              <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                <Card.Text>
                  <div style={{ fontSize: '10px', marginLeft: '60px' }}>
                    <p style={{ marginLeft: '22px' }}>SADAH WOMEN'S BLACK KANI</p>
                    <p style={{ marginLeft: '25px' }}>FLORAL JAAL NALKI</p>
                    <p style={{ marginLeft: '15px' }}>EMBRIODERY FINE WOOL</p>
                    <p style={{ marginLeft: '40px' }}> BLEND STOLE</p>
                    <p className='text-danger' style={{ marginLeft: '50px' }}>RS.2,799</p>
                  </div>

                </Card.Text>
                <Button variant="" style={{ marginLeft: '70px', color: 'black' }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='btn justify-content-center d-flex '>
          <button className='btn btn-warning '>View All</button>
        </div>
        {/* <div className='d-flex justify-content-between'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.sadahglobal.com/cdn/shop/collections/capes-906488.jpg?v=1727688121&width=600holder.js/100px180" />
      <Card.Body className='bg-white'>
        <Card.Text style={{color:'black'}}>
       CAPES
        </Card.Text>
        <Button variant="white" style={{color:'black'}}>Shop Now</Button>
      </Card.Body>
    </Card>
        </div> */}
        <div className='row mt-5 p-5'>
        <div className='col-lg-4'>
          <div ><img src="https://www.sadahglobal.com/cdn/shop/collections/capes-906488.jpg?v=1727688121&width=600holder.js/100px180" alt="" height={520} width={400} />
          <p style={{color:'white', marginTop:'-80px', marginLeft:'20px'}}>CAPES</p>
          <Button variant="white" style={{color:'black',marginTop:'-10px',backgroundColor:'white', marginLeft:'20px'}}>Shop Now</Button>

          </div>

        </div>
        <div className='col-lg-4'>
          <div ><img src="https://www.sadahglobal.com/cdn/shop/collections/kani-786748.jpg?v=1727688184&width=600" alt="" height={520} width={400} />
          <p style={{color:'white', marginTop:'-80px', marginLeft:'20px'}}>KANI</p>
          <Button variant="white" style={{color:'black',marginTop:'-10px',backgroundColor:'white', marginLeft:'20px'}}>Shop Now</Button>

          </div>

        </div>
        <div className='col-lg-4'>
          <div ><img src="https://www.sadahglobal.com/cdn/shop/collections/kalamkari-669612.jpg?v=1727688202&width=600" alt="" height={520} width={400} />
          <p style={{color:'white', marginTop:'-80px', marginLeft:'20px'}}>KALAMKARI</p>
          <Button variant="white" style={{color:'black',marginTop:'-10px',backgroundColor:'white', marginLeft:'20px'}}>Shop Now</Button>

          </div>

        </div>
      </div>
      <div className='row mt-5 p-5'>
        <div className='col-lg-4'>
          <div ><img src="https://www.sadahglobal.com/cdn/shop/collections/nalki-embroidery-550094.jpg?v=1727688107&width=600" alt="" height={520} width={400} />
          <p style={{color:'white', marginTop:'-80px', marginLeft:'20px'}}>NALKI EMBROIRDERY</p>
          <Button variant="white" style={{color:'black',marginTop:'-10px',backgroundColor:'white', marginLeft:'20px'}}>Shop Now</Button>

          </div>

        </div>
        <div className='col-lg-4'>
          <div ><img src="https://www.sadahglobal.com/cdn/shop/collections/stoles-577355.jpg?v=1727688165&width=600" alt="" height={520} width={400} />
          <p style={{color:'white', marginTop:'-80px', marginLeft:'20px'}}>STOLES</p>
          <Button variant="white" style={{color:'black',marginTop:'-10px',backgroundColor:'white', marginLeft:'20px'}}>Shop Now</Button>

          </div>

        </div>
        <div className='col-lg-4'>
          <div ><img src="https://www.sadahglobal.com/cdn/shop/collections/shawls-809087.jpg?v=1727688226&width=600" alt="" height={520} width={400} />
          <p style={{color:'white', marginTop:'-80px', marginLeft:'20px'}}>SHAWLS</p>
          <Button variant="white" style={{color:'black',marginTop:'-10px',backgroundColor:'white', marginLeft:'20px'}}>Shop Now</Button>

          </div>

        </div>
        
      </div>
      <div className='btn justify-content-center d-flex '>
          <button className='btn btn-warning '>View All</button>
        </div><br />
      <Container>
      <Row>
        <Col><img src="https://www.sadahglobal.com/cdn/shop/files/MRD08144-Enhanced-NR-Edit_6447f4f2-e0a7-4f9b-b8a4-92a1d1b602ed.png?v=1727689358&width=1000" alt="" height={400} width={700}/></Col>
        <Col><h3 style={{color:'grey', marginTop:'90px'}} className='d-flex justify-content-center' >Our story</h3>
        <p style={{color:'grey'}}>In a world where fashion often prioritizes fast trends over quality, we stand as a beacon for those who appreciate the finer things in life. Our brand was born out of a desire to offer more than just beautiful shawls and stoles—we aim to provide an experience, a story woven into every thread.</p></Col>
      </Row>
      </Container>


      </div>

    </>
  )
}

export default Home