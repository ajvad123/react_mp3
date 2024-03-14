import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <>
      <div style={{paddingLeft:'100px'}} className='w-100  d-flex flex-column justify-content-center bg-dark'>

        <div className='row p-5'>
          <div className='col'>
          <h4 style={{ color:'white'}}>Media Player 2024</h4>

            <p style={{textAlign:'justify' , color:'white'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas iure vero laboriosam ex ducimus est molestiae commodi corporis quam consectetur culpa ratione libero aliquam natus magni exercitationem, praesentium expedita.
            </p>
          </div>
          <div className='col ' style={{paddingLeft:'200px'}}>

            <h4 style={{ color:'white'}}>Links</h4>
             <Link to={'/'} style={{textDecoration:'none' , color:'yellow'}}>Landing</Link> <br/>
             <Link to={'/Dash'} style={{textDecoration:'none' , color:'yellow'}}>Dashboard</Link> <br />
             <Link to={'/His'} style={{textDecoration:'none' , color:'yellow'}}>History</Link>


          </div>
          <div className='col'>

            <h4 style={{ color:'white'}}>References</h4>

            <a href="https://getbootstrap.com/" style={{textDecoration:'none' , color:'yellow'}} target='_blank'>Bootstrap</a> <br />
            <a href="https://react-bootstrap.netlify.app/"  style={{textDecoration:'none' , color:'yellow'}} target='_blank'>React-Bootstrap</a> <br />
            <a href="https://react.dev/"  style={{textDecoration:'none' , color:'yellow'}} target='_blank'>React</a>


          </div>

        </div>
        <div className='text-center'>

          <p style={{ color:'white'}}> &copy; Media Player</p>       
          
        </div>

      </div>
    </>

  )
}

export default Footer