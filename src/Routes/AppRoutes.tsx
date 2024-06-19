import { Navigate, Route, Routes } from "react-router-dom"
import { routesArr } from "./routes"


export const AppRoutes = () => {
  return (
    <Routes>
        {
          routesArr.map(a=>{
            return <Route path={a.path} element={a.component}/>
          })
        }
        <Route path="*" element={<Navigate to={"/Catalog"} replace/>}/>
    </Routes>
  )
}
