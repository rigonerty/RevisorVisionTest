import { createAsyncThunk } from "@reduxjs/toolkit"
import CatalogService from "../../services/CatalogService"

export const getImagesByAlbumIdThunk = createAsyncThunk("users/getPhotosByAlbumId" ,async (id:string)=>{
    const res = await CatalogService.getPhotosByAlbumId(id)
    return {data:res.data,albumId:id}
})