import React from 'react'


function Footer() {
  return (
    <>
  <div className='container mt-5 w-100' style={{height:'300px'}}>

      <div className='row'>
        <div className='col-lg-5'>
          FOOTER MENU
          <div style={{textDecoration:'none',color:'GREY'}}>Search</div>
        <div style={{textDecoration:'none',color:'GREY'}}>Refund policy</div>
        <div style={{textDecoration:'none',color:'GREY'}}>Terms of Service</div>
        <div style={{textDecoration:'none',color:'GREY'}}>Shipping Policy</div>
        <div style={{textDecoration:'none',color:'GREY'}}>Privacy Policy</div>
        <div style={{textDecoration:'none',color:'GREY'}}>Blogs</div>
        <div style={{textDecoration:'none',color:'GREY'}}>About Us</div>
        </div>
        <div className='col-lg-4'>
  NEWSLETTER
  <div style={{color:'grey'}}>Sign up to our newsletter to receive exclusive offers.</div>
  <div><input type="email" className='bg-dark' placeholder='E-mail'/></div><br />
  <div><button className=' btn' style={{backgroundColor:'wheat', color:'black'}}>SUBSCRIBE</button></div>
  
  </div>
  <div className='col-lg-3'>ABOUT THE SHOP
    <div><p style={{color:'grey'}}>Uncover the Timeless Elegance of Indian Shawls and Stoles.</p></div>
  </div>
  <div className='d-flex justify-content-center'>© 2024 - Sadah Global BRAND OF SADAH ENTERPRISES 03AFHFS5887F1ZO</div>
  
        </div>
 </div>
    </>
  )
}

export default Footer