import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { albumsSlice, imagesSlice, usersSlice } from '../module/UsersImages'
import { favoriteSlice } from './slices/favorite/favorite'


const rootReducer = combineReducers({
    users: usersSlice.reducer,
    images:imagesSlice.reducer,
    albums: albumsSlice.reducer,
    favorite:favoriteSlice.reducer
})
const store = configureStore({
    reducer:rootReducer,
})

  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
