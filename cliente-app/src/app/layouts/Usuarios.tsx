import React,{Fragment} from 'react';
import axios from 'axios';
import IUsuario from '../modules/IUsuario';
import UsuarioDashboard from '../../features/usuarios/dashboard/UsuarioDashboard';
import './styles.css';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Api from '../../api/api'

interface IState{
    usuarios: IUsuario[],
    usuarioSeleccionado: IUsuario | null,
    obtuvoUsuarios: boolean,
    modoEdicion: boolean
}

class Usuarios extends React.Component{    

    readonly state: IState = {
        usuarios:[],
        usuarioSeleccionado: null,
        obtuvoUsuarios: false,
        modoEdicion: false
    }

    componentDidMount()
    {
        Api.Usuario.list()
        .then((Usuarios) => {
            this.setState({
                usuarios: Usuarios,
                obtuvoUsuarios: true
            })
        })
        
    }

    handleUsuarioSeleccionado = (id:number) => {
        console.log(id);

        let usuario = this.state.usuarios.filter(u => u.id === id)[0]

        this.setState({
            usuarioSeleccionado: usuario
        });
    }

    handleModoEdicion = (edicion:boolean) => {

        let usuario = edicion?this.state.usuarioSeleccionado : null

        this.setState({
            modoEdicion: edicion,
            usuarioSeleccionado: usuario
        });
    }    

    handleGuardarUsuario=(usuario:IUsuario)=>{
        let usuarios=this.state.usuarios

        // Si el objeto de usuario viene vacío significa que debe crear uno nuevo.
        if(usuario.id === 0){
            
        }
        else{
            Api.Usuario.update(usuario)
            .then((usuario)=> {
                let index = usuarios.findIndex(u=> u.id == usuario.id)
                usuarios[index] = usuario

                this.setState({
                    usuarios : usuarios,
                    usuarioSeleccionado : null,
                    modoEdicion : false
                })
            })
        }
    }

    
    render(){

        if(this.state.obtuvoUsuarios === false)
        {
            return(
            

                <Fragment>  
                    <Segment>
                    <Dimmer active>
                    <Loader />
                    </Dimmer>

                    <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                </Fragment>
            )
        }

        
        return(
            

            <Fragment>
                {/* Este componente de clase Usuarios es el componente principal desde aqui se llama
                    la API y recuperamos los usuarios de la db, y despues se lo pasamos al FC 
                    UsuarioDashboard como psrametro con el uso de props. */}
                <UsuarioDashboard                
                    usuarios={this.state.usuarios} 
                    usuarioSeleccion={this.handleUsuarioSeleccionado} 
                    usuarioSeleccionado={this.state.usuarioSeleccionado}
                    modoEdicion={this.state.modoEdicion}
                    activarEdicion={this.handleModoEdicion}
                    guardarUsuario = {this.handleGuardarUsuario}>

                </UsuarioDashboard>          
                
            </Fragment>
        )
        
    }
};

export default Usuarios;