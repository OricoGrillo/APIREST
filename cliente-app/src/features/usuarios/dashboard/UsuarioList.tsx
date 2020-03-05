import React from 'react'
import {Segment,Item,Button} from 'semantic-ui-react';
import IUsuario from '../../../app/modules/IUsuario'

interface IProps{
    usuarios: IUsuario[],
    usuarioSeleccion: (id:number)  => void
}

const UsuarioList:React.FC<IProps> = (props:IProps) => {
    return (
        <Segment clearing>
            <Item.Group divided>
                {   
                    // map is a array type in typescript, by every user received from props in the object usuarios create a new Item.
                    // dentro del map se crea una instancia de IUsuario para poder acceder a sus propiedades y usarlas ej {usuario.nombre}.
                    props.usuarios.map((usuario:IUsuario) => (
                        // Se debe de definir una key para que cada Item tenga su id y poder identificar que elemento es.
                        <Item key={usuario.id}>
                            <Item.Image size='tiny' src='/assets/usuarios/chango2.jpeg' />                    
                            <Item.Content>
                            <Item.Header as='a'>{usuario.nombre}</Item.Header>
                            <Item.Meta>Software Developer</Item.Meta>
                            <Item.Description>
                                A job description is an internal document that clearly states the essential job requirements, job duties,
                                job responsibilities, and skills required to perform a specific role.
                                A more detailed job description will cover how success is measured in the role so it can be used during performance evaluations.
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => props.usuarioSeleccion(usuario.id) } floated='right' content='Ver' color='blue'></Button>
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))
                }

                
            </Item.Group>
        </Segment>
    )
}

export default UsuarioList;