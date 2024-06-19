import Button from "@mui/material/Button"
import { Link, useLocation } from "react-router-dom"
import cl from "./Navbar.module.scss"


export const Navbar = () => {
    const {pathname} = useLocation()
  return (
    <div className={cl.Navbar}>
        <Link to="/Catalog" className={pathname=="/Catalog"?cl.Selected:""}><Button variant={pathname=="/Catalog"?"contained":"text"} fullWidth>Каталог</Button></Link>
        <Link to="/Favorite" className={pathname=="/Favorite"?cl.Selected:""}><Button variant={pathname=="/Favorite"?"contained":"text"} fullWidth>Избранное</Button></Link>
    </div>
  )
}
