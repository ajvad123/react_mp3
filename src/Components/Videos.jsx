import React,{useState,useEffect} from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis'


function Videos({ AddStatus}) {

  const [allVideos,setAllVideos]=useState([])
  const [delStatus,setDeleStatus]=useState({})


useEffect(()=>{
  getdata()
},[ AddStatus ,delStatus])


  const getdata=async()=>{
    const res= await getVideos()
    // console.log(res.data);

    setAllVideos(res.data)

    // console.log(allVideos); 

  }

  return (
    <div className='bg-dark row border border-3 border-dark p-5 mb-5'>
      {

          allVideos?
          allVideos.map(item=>(

            <VideoCard video={item} setDeleStatus={setDeleStatus} />

          ))
          : 
            <h1>No videos</h1>

      }

    </div>

  )
}

export default Videos