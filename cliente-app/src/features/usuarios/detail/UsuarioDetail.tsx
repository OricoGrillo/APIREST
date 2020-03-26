import React from 'react'
import {Card,Image,Button} from 'semantic-ui-react';
import IUsuario from '../../../app/modules/IUsuario'

interface IProps{
    usuarioSeleccionado: IUsuario | null,
    activarEdicion: (edicion:boolean) => void
}


export const UsuarioDetail:React.FC<IProps> = (props:IProps) => {
    return (
        <Card fluid>
            <Image size='small' circular centered src="/assets/usuarios/chango2.jpeg"></Image>
            <Card.Content>
                <Card.Header>{props.usuarioSeleccionado?.nombre}</Card.Header>
                <Card.Meta>
                <span className='date'>Software Developer</span>
                </Card.Meta>
                <Card.Description>
                A job description is an internal document that clearly states the essential job requirements, job duties, job responsibilities,
                and skills required to perform a specific role.
                A more detailed job description will cover how success is measured in the role so it can be used during performance evaluations.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={()=> props.activarEdicion(true)} basic color='blue' content = 'Editar'></Button>
                    <Button onClick={()=> props.activarEdicion(false)} basic color='grey' content = 'Cancelar' ></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default UsuarioDetail;