import { Base_url } from "./base_url"
import commonApi from "./commonApi"



export const uploadVideo = async (data) => {

    return await commonApi("post", `${Base_url}/allVideos`, data)

}

export const getVideos = async () => {

    return await commonApi("GET", `${Base_url}/allVideos`, "")
}

export const deleteVideo = async (id) => {

    return await commonApi("DELETE", `${Base_url}/allVideos/${id}`, {})
}

export const addCategories = async (data) => {

    return await commonApi("Post", `${Base_url}/categories`, data)


}

export const getCategories = async () => {
    return await commonApi("GET", `${Base_url}/categories`, "")
}

export const deleteCategories = async (id)=>{
   return await commonApi("DELETE",`${Base_url}/categories/${id}`,{})
}

export const addHistory=async(data)=>{
    return await commonApi("POST",`${Base_url}/History`,data)
}

export const getHistory=async()=>{
    return await commonApi("GET",`${Base_url}/History`,"")
}

export const delHistory=async(id)=>{
    return await commonApi("DELETE",`${Base_url}/History/${id}`,{})
}
export const getSpecificVideo=async(id)=>{
		
	return await commonApi("GET",`${Base_url}/allVideos/${id}`,"")

  }

  
  export const updateCategories=async(data,id)=>{


	return await commonApi("PUT",`${Base_url}/Categories/${id}`,data)	

}

