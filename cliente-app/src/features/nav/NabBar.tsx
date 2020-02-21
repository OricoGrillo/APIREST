import React from 'react';
import {Menu, Button, Container} from 'semantic-ui-react';

const NabBar:React.FC = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo"></img>
                    Administración de Usuarios
                </Menu.Item>
                    


                <Menu.Item
                name='Usuarios'

                />

                <Menu.Item>
                    <Button primary>Nuevo Usuario</Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NabBar;