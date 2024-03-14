import React, { useState, useEffect } from 'react'

import { getCategories } from '../services/allApis';
import { deleteCategories, getSpecificVideo, updateCategories } from '../services/allApis';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';


function CategoryList({ status }) {

    const [cat, setCat] = useState([])
    const [delCat, setdelCat] = useState({})


    useEffect(() => {
        getCat() 
    }, [status, delCat])

    const getCat = async () => {

        const res = await getCategories()

        // console.log(res.data);

        setCat(res.data)


    }

    const handleDelete = async (id) => {

        console.log(id);

        const res = await deleteCategories(id)

        console.log(res);

        if (res.status >= 200 && res.status < 300) {

            setdelCat(res)
            toast.success("Category Delete Successfully!!")

        } else {
            toast.error("Category Deletion Failed!!")
        }




    }
    const handleDrop=async(e,id)=>{
        console.log("Category ID:"+id)
        const vid=e.dataTransfer.getData("videoId")
        console.log("Droped VideoId:"+vid)
        let Category=cat.find(item=>item.id==id)
        console.log(Category)
        const res=await getSpecificVideo(vid)
        console.log(res);
        Category.video.push(res.data)
        console.log(Category)
        const rescat=await updateCategories(Category,id)
        console.log(rescat);

        if(rescat.status>=200 && rescat.status<300){
            toast.success(`${res.data.caption} is added to ${Category.name}`)
            getCat()
        }
        else{
            toast.error("Video adding to category failed!!!")
        }

    }
    const handleDragOver = (e) => {

        e.preventDefault()
        console.log("Dragging Over Category")
    }




    return (

        <>
    <div className='border border-success p-3 mt-3'>
        {
            cat?
            cat.map(item=>(
                <div className='bg-primary mb-3 p-3 rounded shadow' onDragOver={e=>{handleDragOver(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}}>
                   <div>
                   <span  style={{color:'white'}}>{item.name}</span>
                     <i className='fa-solid fa-trash float-end'  onClick={()=>{handleDelete(item.id)}}   style={{color:'#ff0000'}}></i>
                   </div>
                   <div>
                    {
                        item?.video.map(v=>(
                            <VideoCard video={v} cat={true}/>
                        ))
                    }

                   </div>
                </div>
            ))
            :
            <h1>No Categories</h1>
        }
    </div>



    </>

    )
}

export default CategoryList