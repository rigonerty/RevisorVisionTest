import { CircularProgress, Collapse, List } from '@mui/material'
import { useLayoutEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { ListAlbums } from '../ListAlbums/ListAlbums';
import { getAlbumsByUserIdThunk } from '../../store/albums/thunks';
import { ListItemButtonCustom } from '../ListItemButtonCustom/ListItemButtonCustom';


interface props{
    id:string;
    title:string;
}

export const ListItem = ({id,title}:props) => {
    const [isOpen,setOpen] = useState(false)
    const albums = useAppSelector(state=>state.albums)
    const dispatch = useAppDispatch()
    useLayoutEffect(()=>{
      dispatch(getAlbumsByUserIdThunk(id))
    },[])
  return (
    <>
     {albums.isFetching?<CircularProgress />:''}
      <ListItemButtonCustom isOpen={isOpen} setOpen={setOpen} title={title}/>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            albums.albums.map(a=>{
              return <ListAlbums albumId={a.albumId} title={a.title} key={a.albumId}/>
            })
          }
        </List>
      </Collapse>
    </>
  )
}
