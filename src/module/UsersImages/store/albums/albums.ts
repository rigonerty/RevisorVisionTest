import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IAlbum} from './types'
import { getAlbumsByUserIdThunk } from './thunks'




interface IState{
    error:string|null;
    isFetching:boolean;
    albums:IAlbum[]
}

const initialState:IState = {
    error:null,
    isFetching: false,
    albums: []
}
 

export const albumsSlice = createSlice({
    name:"albums",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
            .addCase(getAlbumsByUserIdThunk.fulfilled, (state,action)=>{
                const {data,userId} = action.payload
                const newArr = state.albums.filter(item=>item.userId!==userId)
                newArr.push(...data)
                state.albums = newArr
            })
    },
})

export const {} = albumsSlice.actions
