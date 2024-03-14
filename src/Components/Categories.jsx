import React ,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategories } from '../services/allApis';
import CategoryList from './CategoryList';

function Categories() {
  const [show, setShow] = useState(false);
  const [addstatus,setAddStatus]=useState([])

  const [category,setCategory] = useState({

    name:''      ,video:[]
  })

  const handleClose = () =>{
    setShow(false);  

    setCategory({
      name:'',video:[]
    })
  }         
  const handleShow = () => setShow(true);            

    const getCategory=(val)=>{
      

      if (val) {              
         
          setCategory({...category,name:val})             
      }
      
      console.log(category);


    }

    const uploadCategory=async()=>{
         
      const  {name}= category

      if (!name) {

        toast.info("Enter a Valid Category Name !!")
        
      }else{

        const res= await addCategories(category)
        console.log(res);   
        
         if (res.status>=200 && res.status<300) {
          
            toast.success("Category Added Succefully!!")

            setAddStatus(res.data)

            handleClose()

         }  else{
            toast.error("Category Adding Failed")
         }

      }                 


    }                           

  return (
    <>
      <div className='d-grid mt-5'>
        <Button variant='primary' className='btn' onClick={handleShow}>Add Category</Button>
      </div>

      <CategoryList status={addstatus}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>                                   
        </Modal.Header>
        <Modal.Body>                                                            
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>category</Form.Label>
              <Form.Control type="text" name='caption' onChange={(e)=>{getCategory(e.target.value)}} placeholder="eg:romantic" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close                  
          </Button>
          <Button variant="primary" onClick={uploadCategory}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Categories