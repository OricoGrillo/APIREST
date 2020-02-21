import React from 'react'
import {Grid,List} from 'semantic-ui-react';
import IUsuario from '../../../app/modules/IUsuario';

interface IProps{
    usuarios: IUsuario[]
}

export const UsuarioDashboard:React.FC<IProps> = (props:IProps) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <List>
                    {
                        // map is a array type in typescript.
                        props.usuarios.map((usuario:IUsuario) => (
                            <List.Item key={usuario.id}>{usuario.nombre}</List.Item>
                        ))
                    }
                </List>
            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
        </Grid>
    )
}

export default UsuarioDashboard;