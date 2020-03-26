import React from 'react';
import {Segment,Form,Button} from 'semantic-ui-react';
import IUsuario from '../../../app/modules/IUsuario';

interface IProps{
    usuario: IUsuario | null,
    guardarUsuario : (usuario:IUsuario) => void
}

interface IState{
    usuario:IUsuario
}

// Se cambia el componete FC a componete de clase para poder manejar su state y hacer modificaciones cuándo seleccione algún botón.
class UsuarioForm extends React.Component<IProps> {

    // Preguntar al profe por que podemos acceder a la variable props antes de haberla declarado en el ctor, y en FC si sedeclara la variable así: UsuarioList:React.FC<IProps> = (props:IProps).
    inicializa = () => {
        if(this.props.usuario){
            return this.props.usuario;
        }
        return {
            id: 0,
            nombre: ''
        }
    }

    readonly state:IState = {
        usuario : this.inicializa()
    }

    /**
     *
     */
    constructor(props:IProps) {
        super(props);
        
    }

    // Función para controlar las modificaciones que sehagan en el input, esto es por que el input es ReadOnly ya que REACT es unidireccional.
    handleInputChanges = (event:any) =>{
        
        // Destructurar lo que viene en event en la propiedad target.
        const{name, value} = event.target

        this.setState({
            usuario : {...this.state.usuario, [name]:value}
        })
    }

    render() {
        return (
            <Segment clearing>
                <Form>
                    <Form.Input onChange={this.handleInputChanges} name='nombre' value={this.state.usuario.nombre} placeholder='Nombre' />
                    <Form.TextArea rows={2} placeholder='Descripción' />
                    <Form.Input placeholder='Perfil' />
                    <Button onClick={() => this.props.guardarUsuario(this.state.usuario)} floated='right' positive type="submit" content="Guardar"></Button>
                    <Button floated='right' type="submit" content="Cancelar"></Button>
                </Form>
            </Segment>
        )
    }
}

export default UsuarioForm;