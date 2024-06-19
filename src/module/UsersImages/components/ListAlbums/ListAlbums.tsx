import {useLayoutEffect, useState} from 'react'
import { Collapse} from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { getImagesByAlbumIdThunk } from '../../store/images/thunks';
import cl from "./ListAlbums.module.scss"
import { PhotoItem } from '../../../../components/PhotoItem/PhotoItem';
import { ListItemButtonCustom } from '../ListItemButtonCustom/ListItemButtonCustom';

interface props{
    albumId: string;
    title:string;
}

export const ListAlbums = ({albumId,title}:props) => {
    const [isOpen,setOpen] = useState(false)
    const images = useAppSelector(state=>state.images)
    const dispatch = useAppDispatch()
    useLayoutEffect(()=>{
        dispatch(getImagesByAlbumIdThunk(albumId))
    },[])
  return (
    <>
        <ListItemButtonCustom isOpen={isOpen} setOpen={setOpen} title={title} sx={{pl:8}}/>
        <Collapse in={isOpen} timeout="auto" unmountOnExit sx={{ pl: 16 }}>
            <div className={cl.ImagesContainer}>
                {images.map(a=>{
                    if(a.albumId ===albumId){
                        return <PhotoItem id={a.id} title={a.title} url={a.url} key={a.id}/>
                    }
                    return <></>
                })}
            </div>
        </Collapse>
    </>

  )
}
