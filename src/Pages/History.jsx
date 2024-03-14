import { useState, useEffect } from 'react'
import React from 'react'
import { getHistory,delHistory } from '../services/allApis'
import { toast } from 'react-toastify'

function History() {

  const [his, sethis] = useState([])

  const [del ,setDel] =useState([])


  useEffect(() => {
    getdata()
  }, [del])

  const getdata = async () => {

    const res = await getHistory()
    console.log(res.data);

    sethis(res.data)

  }

  const handleDelete=async(id)=>{

    const res =await delHistory(id)
    console.log(res);
    if (res.status>=200 && res.status<300) {
      toast.success("History Deleted Successfully!!")
       setDel(res)
    }else{
      toast.error("History Deletion Failed!!")
    }
  }



  return (
    <>

      <div className='p-5'>
        <h1>Watch History</h1>
        <table className='table table-bordered'>
          <tr>
            <th>Caption</th>
            <th>URL</th>
            <th>Date & Time</th>
          </tr>

          {
            his ?
              his.map(item => (

                <tr>
                  <th>{item.caption}</th>
                  <th>{item.url}</th>
                  <th>{item.datetime}</th>
                  <td>
                  <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}}  style={{ color: '#f00a0a' }}></i>

                  </td>
                </tr>
               

              ))

              :
              <tr>
                <p>No watch History</p>
              </tr>
        
        }




        </table>

      </div>

    </>
  )
}

export default History