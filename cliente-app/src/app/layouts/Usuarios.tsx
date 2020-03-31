import React,{useState,useEffect} from 'react';
import axios from 'axios';
import IUsuario from '../modules/IUsuario';
import UsuarioDashboard from '../../features/usuarios/dashboard/UsuarioDashboard';
import './styles.css';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Api from '../../api/api'


const Usuarios = () =>{

    const [usuarios,setUsuarios] = useState<IUsuario[]>([])
    const [modoEdicion,setModoEdicion] = useState(false)
    const [cargado,setCargado] = useState(false)
    const [usuarioSeleccionado,setUsuarioSeleccionado] = useState<IUsuario | null>(null)

    useEffect(()=>{
        Api.Usuario.list()
        .then((usuarios) =>{
            setUsuarios(usuarios)
            setCargado(true)
        })
    })

  
    const handleUsuarioSeleccionado = (id:number) =>{
        let usuario = usuarios.filter(u=> u.id===id)[0]
        setUsuarioSeleccionado(usuario)
    }

    const handleModoEdicion  = (edicion:boolean) => {

      let usuario = edicion?usuarioSeleccionado : null

      setModoEdicion(edicion)
      setUsuarioSeleccionado(usuario)
         
    }

    const handleGuardarUsuario = (usuario:IUsuario) =>{
        let usuariosTemp = usuarios 
        
        if(usuario.id === 0){
            Api.Usuario.create(usuario)
            .then((usuario) => {

                usuariosTemp.push(usuario)
                setUsuarios(usuariosTemp)
                setUsuarioSeleccionado(null)
                setModoEdicion(false)
            })
        }
        else {

            Api.Usuario.update(usuario)
            .then((usuario) => {

                let index = usuariosTemp.findIndex(u=> u.id == usuario.id)

                usuariosTemp[index] = usuario

                setUsuarios(usuariosTemp)
                setUsuarioSeleccionado(null)
                setModoEdicion(false)

            })

        }

    }

    const handleModoNuevoUsuario = () =>{
        setUsuarioSeleccionado(null)
        setModoEdicion(true)
    }

    
    if(cargado == false){
        return(
            <React.Fragment>
                Loading.... 
            </React.Fragment>
        )

    }

    return (
        <React.Fragment>
            <UsuarioDashboard 
            activarNuevo = {handleModoNuevoUsuario}
            guardarUsuario = {handleGuardarUsuario}
            activarEdicion = {handleModoEdicion}
            modoEdicion = {modoEdicion}
            usuarioSeleccionado ={usuarioSeleccionado} 
            usuarioSeleccion={handleUsuarioSeleccionado} 
            usuarios={usuarios} >
            </UsuarioDashboard>
        </React.Fragment>
    )
       
    
}

export default Usuarios