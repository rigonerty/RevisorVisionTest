import { createAsyncThunk } from "@reduxjs/toolkit"
import CatalogService from "../../services/CatalogService"

export const getUsersThunk = createAsyncThunk("users/getUsers" ,async ()=>{
    const res = await CatalogService.getUsers()
    return {data:res.data}
})