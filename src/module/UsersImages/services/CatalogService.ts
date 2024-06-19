import { AxiosResponse } from "axios"
import $api from "../../../http"
import { IUser } from "../store/users/types"
import { IImage } from "../store/images/types"
import { IAlbum } from "../store/albums/types"



export default class CatalogService{
    static async getUsers():Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>("/users")
    }
    static async getPhotosByAlbumId(id:string):Promise<AxiosResponse<IImage[]>>{
        return $api.get<IImage[]>("/photos/"+id)
    }
    static async getAlbumsByUserId(id:string):Promise<AxiosResponse<IAlbum[]>>{
        return $api.get<IAlbum[]>("/albums/"+id)
    }
}