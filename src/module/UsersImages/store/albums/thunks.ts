import { createAsyncThunk } from "@reduxjs/toolkit"
import CatalogService from "../../services/CatalogService"

export const getAlbumsByUserIdThunk = createAsyncThunk("users/getAlbumsByUserIdThunk" ,async (id:string)=>{
    const res = await CatalogService.getAlbumsByUserId(id)
    return {data:res.data,userId:id}
})