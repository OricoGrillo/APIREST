import React,{Fragment} from 'react';
import axios from 'axios';
import IUsuario from '../modules/IUsuario';
import NavBar from '../../features/nav/NabBar';
import {Container} from 'semantic-ui-react';
import UsuarioDashboard from '../../features/usuarios/dashboard/UsuarioDashboard';

interface IState{
    usuarios: IUsuario[]
}

class App2 extends React.Component{

    readonly state: IState = {
        usuarios:[]
    }

    componentDidMount()
    {
        axios.get<IUsuario[]>('http://localhost:5000/api/usuarios').then((response) => {
            this.setState({
                usuarios: response.data
            });
        });

        //this.setState({usuarios:[{id:1,nombre:'Omar'},{id:2,nombre:'Uriel'}]});
    }
    
    render(){
        return(
            
            <Fragment>
                <NavBar></NavBar>
                <Container style={{marginTop:'7em'}}>
      
                    <UsuarioDashboard usuarios={this.state.usuarios}></UsuarioDashboard>
               
                </Container>
            </Fragment>
        )
    }
};

export default App2;