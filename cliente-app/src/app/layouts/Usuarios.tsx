import React,{Fragment} from 'react';
import axios from 'axios';
import IUsuario from '../modules/IUsuario';
import UsuarioDashboard from '../../features/usuarios/dashboard/UsuarioDashboard';
import './styles.css'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

interface IState{
    usuarios: IUsuario[],
    usuarioSeleccionado: IUsuario | null,
    obtuvoUsuarios: boolean;
}

class Usuarios extends React.Component{    

    readonly state: IState = {
        usuarios:[],
        usuarioSeleccionado: null,
        obtuvoUsuarios: false
    }

    componentDidMount()
    {
        setTimeout(() => {
            axios.get<IUsuario[]>('http://localhost:5000/api/usuarios').then((response) => {

                
                    this.setState({
                        usuarios: response.data,
                        obtuvoUsuarios: true
                    });
                
                
            });
        },4000);

        //this.setState({usuarios:[{id:1,nombre:'Omar'},{id:2,nombre:'Uriel'}]});

        
    }

    handleUsuarioSeleccionado = (id:number) => {
        console.log(id);

        let usuario = this.state.usuarios.filter(u => u.id === id)[0]

        this.setState({
            usuarioSeleccionado: usuario
        });
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
                    usuarioSeleccionado={this.state.usuarioSeleccionado}>

                </UsuarioDashboard>          
                
            </Fragment>
        )
        
    }
};

export default Usuarios;