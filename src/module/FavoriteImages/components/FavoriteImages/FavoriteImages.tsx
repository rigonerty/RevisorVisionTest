import { useAppSelector } from '../../../../hooks/reduxHooks'
import cl from "./FavoriteImages.module.scss"
import { PhotoItem } from '../../../../components/PhotoItem/PhotoItem'
import { Typography } from '@mui/material'
export const FavoriteImages = () => {
    const favorites = useAppSelector(state=>state.favorite)
  return (
    <>

      <div className={cl.FavoriteImages} style={favorites.length===0?{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}:{}}>
          {favorites.length===0?<>
            <img alt='' src='/NotFoundFavorite.svg'/>
            <Typography variant="h6" gutterBottom>
              Список избранного пуст
            </Typography>
            <Typography variant="body2" gutterBottom>
              Добавляйте изображения, нажимая на звездочки
            </Typography>
          
          </>:<></>}
          {favorites.map(a=>{
              return <PhotoItem url={a.url} title={a.title} id={a.id} key={a.id} titleIsVisible/>
          })}
      </div>    
    </>

  )
}
