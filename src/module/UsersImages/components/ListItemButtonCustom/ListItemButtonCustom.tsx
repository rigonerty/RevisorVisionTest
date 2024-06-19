import {ListItemButton, ListItemIcon, ListItemText, SxProps, Theme } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import cl from "./ListItemButtonCustom.module.scss"

interface props{
    isOpen:boolean;
    setOpen:(smth:boolean)=>void;
    title:string;
    sx?: SxProps<Theme>
}

export const ListItemButtonCustom = ({isOpen,setOpen,title,sx={}}:props) => {
  return (
    <ListItemButton onClick={()=>setOpen(!isOpen)} className={cl.ListItemButtonCustom} sx={sx}>
        <ListItemIcon>
                {isOpen ? <RemoveCircleIcon sx={{color:"#117DC1"}}/> : <AddCircleIcon sx={{color:"#117DC1"}}/>}
        </ListItemIcon>
        <ListItemText primary={title} />
    </ListItemButton>
)
}
