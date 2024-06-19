import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IUser} from './types'
import { getUsersThunk } from './thunks'



interface IState{
    error:string|null;
    isFetching: boolean;
    users: IUser[]
}
const initialState:IState ={
    error:null,
    isFetching:false,
    users:[]
}
 

export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder 
            .addCase(getUsersThunk.fulfilled, (state,action)=>{
                state.isFetching = false
                state.users = action.payload.data
            })
            .addCase(getUsersThunk.pending,(state,action)=>{
                state.isFetching = true
            })
    },
})

export const {} = usersSlice.actions
