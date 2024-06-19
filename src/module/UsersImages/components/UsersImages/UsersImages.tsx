import React, { useLayoutEffect } from 'react'
import { ListContainer } from '../ListContainer/ListContainer'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { ListItem } from '../ListItem/ListItem'
import { getUsersThunk } from '../../store/users/thunks'
import { CircularProgress } from '@mui/material'

export const UsersImages = () => {
  const users = useAppSelector(state=>state.users)
  const dispatch = useAppDispatch()
    useLayoutEffect(()=>{
      dispatch(getUsersThunk())
    },[])
  return (
    <div>
        {users.isFetching?<CircularProgress />:''}
        <ListContainer>
            {
              users.users.map(a=>{
                return <ListItem id={a.id} title={a.username} key={a.id}/>
              })
            }
        </ListContainer>
    </div>
  )
}
