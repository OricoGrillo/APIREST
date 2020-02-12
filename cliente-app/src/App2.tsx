import React from 'react';
import axios from 'axios';


class App2 extends React.Component{

    state = {
        usuarios:[]
    }

    componentDidMount()
    {
        axios.get('http://localhost:5000/api/usuarios').then((response) => {
            this.setState({
                usuarios: response.data
            });
        });

        //this.setState({usuarios:[{id:1,nombre:'Omar'},{id:2,nombre:'Uriel'}]});
    }
    
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.usuarios.map((usuario:any) => (
                            <li key={usuario.id}>{usuario.nombre}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
};

export default App2;