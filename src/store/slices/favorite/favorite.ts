import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IFavorite} from './types'






const initialState:IFavorite[] = JSON.parse(localStorage.getItem("favoritePhotos")||"[]")
 

export const favoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        addFavorite:(state,action:PayloadAction<IFavorite>)=>{
            const {id} = action.payload
            const newArr = state.filter(a=>a.id!==id)
            if(newArr.length === state.length){
                newArr.push(action.payload)
            }
            localStorage.setItem("favoritePhotos", JSON.stringify(newArr))
            return newArr
        }
    }
})

export const {addFavorite} = favoriteSlice.actions
