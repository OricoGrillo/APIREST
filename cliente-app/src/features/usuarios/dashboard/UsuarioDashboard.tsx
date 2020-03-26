import React from 'react'
import {Grid,List} from 'semantic-ui-react';
import IUsuario from '../../../app/modules/IUsuario';
import UsuarioList from './UsuarioList';
import UsuarioDetail from '../detail/UsuarioDetail'
import UsuarioForm from '../forms/UsuarioForm'

interface IProps{
    usuarios: IUsuario[],
    usuarioSeleccion: (id:number)  => void,
    usuarioSeleccionado: IUsuario | null,
    modoEdicion: boolean,
    activarEdicion: (edicion:boolean) => void,
    guardarUsuario : (usuario:IUsuario) => void
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

                {/* Con la flag modoEdicion se muestra o no los componentes funcionales. */}

                {
                    // Si usuarioSeleccionado es true y modoEdicion es falso mostramos UsuarioDetail.
                    props.usuarioSeleccionado && !props.modoEdicion &&
                    <UsuarioDetail 
                        usuarioSeleccionado={props.usuarioSeleccionado}
                        activarEdicion={props.activarEdicion}>

                    </UsuarioDetail>
                }

                { 
                    // Si modoEdicion es true y el FC no es null se muestra el componente UsuarioForm.
                    props.modoEdicion && <UsuarioForm usuario={props.usuarioSeleccionado} guardarUsuario={props.guardarUsuario}> </UsuarioForm>

                }
            </Grid.Column>
        </Grid>
    )
}

export default UsuarioDashboard;