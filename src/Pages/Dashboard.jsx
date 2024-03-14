import React ,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../Components/Addvideos'
import Categories from '../Components/Categories'
import Videos from '../Components/Videos'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'



function Dashboard() {

  const [AddStatus,setAddStatus]=useState([])

  return (
    <>

      <div>

            <h1>Dashboard</h1>
            <a style={{textDecoration:'none'}} href="/his">Wacth History</a>

        <Row>

          <Col sm='1' md='2'>

              <Addvideos setAddStatus={setAddStatus} />

          </Col>

          <Col sm='4' md='6'>

          <Videos AddStatus={AddStatus}/>


          </Col>
          <Col sm='2' md='4'>

          <Categories/>


          </Col>



        </Row>



      </div>

      <ToastContainer/>

    </>


  )

}

export default Dashboard