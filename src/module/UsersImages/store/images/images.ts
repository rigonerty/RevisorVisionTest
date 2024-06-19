import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IImage} from './types'
import { getImagesByAlbumIdThunk } from './thunks'




const initialState:IImage[] = []
 

export const imagesSlice = createSlice({
    name:"images",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
            .addCase(getImagesByAlbumIdThunk.fulfilled,(state,action)=>{
                const {data,albumId} = action.payload
                const newArr = state.filter(item=>item.albumId!==albumId)
                newArr.push(...data)
                return newArr
            })
    },
})

export const {} = imagesSlice.actions
