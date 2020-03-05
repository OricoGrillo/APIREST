import React from 'react'
import {Grid,List} from 'semantic-ui-react';
import IUsuario from '../../../app/modules/IUsuario';
import UsuarioList from './UsuarioList';
import UsuarioDetail from '../detail/UsuarioDetail'
import UsuarioForm from '../forms/UsuarioForm'

interface IProps{
    usuarios: IUsuario[],
    usuarioSeleccion: (id:number)  => void,
    usuarioSeleccionado: IUsuario | null
}

export const UsuarioDashboard:React.FC<IProps> = (props:IProps) => {
    return (
        <Grid>
            {/* Columna de listado de Usuarios. */}
            <Grid.Column width={10}>
                <UsuarioList usuarios={props.usuarios} usuarioSeleccion={props.usuarioSeleccion}></UsuarioList>
            </Grid.Column>

            {/* Columna de detalle del Usuario, el componente funcional UsuarioDetail usa Cards, 
                el otro FC UsuarioForm es el que se muestra debajo de la Card de detalle del Usuario. */}
            <Grid.Column width={6}>
                <UsuarioDetail usuarioSeleccionado={props.usuarioSeleccionado}></UsuarioDetail>
                <UsuarioForm></UsuarioForm>
            </Grid.Column>
        </Grid>
    )
}

export default UsuarioDashboard;