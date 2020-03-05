import React from 'react'
import {Segment,Form,Button} from 'semantic-ui-react';

const UsuarioForm:React.FC = () => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Nombre' />
                <Form.TextArea rows={2} placeholder='Descripción' />
                <Form.Input placeholder='Perfil' />
                <Button floated='right' positive type="submit" content="Guardar"></Button>
                <Button floated='right' type="submit" content="Cancelar"></Button>
            </Form>
        </Segment>
    )
}

export default UsuarioForm;