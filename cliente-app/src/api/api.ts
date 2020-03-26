import axios,{AxiosResponse} from 'axios'
import IUsuario from '../app/modules/IUsuario'

axios.defaults.baseURL = 'http://localhost:5000/api/'

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    put: (url: string,body:{}) => axios.put(url,body).then(responseBody)
}

const Usuario = {
    list: () => request.get('usuarios'),
    update: (usuario:IUsuario) => request.put('usuarios',usuario)
}


export default{
    Usuario
}