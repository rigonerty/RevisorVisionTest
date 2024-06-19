import { Dialog, IconButton, Tooltip, Typography, tooltipClasses } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react'
import cl from "./PhotoItem.module.scss"
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addFavorite } from '../../store/slices/favorite/favorite';
interface props{
    url:string;
    title:string;
    id:string;
    titleIsVisible?:boolean;
}

export const PhotoItem = ({url,title,id,titleIsVisible=false}:props) => {
  const [isOpen,setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(state=>state.favorite)
  return (
    <div className={cl.PhotoItem}>
        <Tooltip title={titleIsVisible?"":title} followCursor slotProps={{
        popper: {
          sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
              {
                marginTop: '30px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
              {
                marginLeft: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
              {
                marginRight: '0px',
              },
          },
        },
      }}>
          <div className={cl.smallImageDiv}>
              <img src={url} alt={title} onClick={()=>setOpen(true)}/>
              <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>dispatch(addFavorite({url,title,id}))}>
                <StarRoundedIcon sx={{ color: favorites.find(a=>a.id===id)?"#FFAF37":"#D0D0D0"}}/>
              </IconButton>
          </div>
        </Tooltip>
        {titleIsVisible?
          <Typography variant="body2">
            {title}
          </Typography>:<></>}
      <Dialog
          open={isOpen}
          onClose={()=>setOpen(false)}
          maxWidth={"sm"}
          fullWidth
        >
          <img src={url.replace("/150/150/","/600/600/")} alt={title}/>
        </Dialog>
    </div>
    
  )
}
