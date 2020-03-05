import React from 'react';
import {Menu, Button, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

const NabBar:React.FC = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>                

                <Menu.Item as={Link} to='/' header>
                    <img src="/assets/logo.png" alt="logo"></img>
                    Administración de Usuarios
                </Menu.Item>                    


                <Menu.Item as={Link} to='/Usuarios' name='usuarios' />

                <Menu.Item as={Link} to='/Perfiles' name='perfiles'>
                    
                </Menu.Item>

                <Menu.Item as={Link} to='/Home' name='perfiles'>
                    <Button primary>Home</Button>
                </Menu.Item>

            </Container>
        </Menu>
    )
}

export default NabBar;