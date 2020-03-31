import React,{useState} from 'react'
import {Segment,Form,Button} from 'semantic-ui-react';
import IUsuario from '../../../app/modules/IUsuario';

interface IProps{
    usuario: IUsuario | null,
    guardarUsuario: (usuario:IUsuario) => void
}


const UsuarioForm: React.FC<IProps> = (props:IProps)=> {

    
    const inicializa = ()=>{
        if(props.usuario){
            return props.usuario
        }

        return {
            id : 0, 
            nombre : ''
        }
    }

    const [usuario,setUsuario] = useState<IUsuario>(inicializa)


    const handleInputChanges = (event:any) =>{
        const {name,value} = event.currentTarget
        setUsuario({...usuario,[name]:value})
    }

    return(
        <Segment clearing>
            <Form>
                <Form.Input 
                    name='nombre'
                    onChange = {handleInputChanges}
                    value={usuario.nombre}
                    placeholder='Nombre'  />
                <Form.TextArea rows={2} placeholder='Descripción' />
                <Form.Input placeholder='Perfil' />

                <Button floated='right' 
                onClick ={()=> props.guardarUsuario(usuario)} 
                positive type='submit'content='Guardar' ></Button>

                <Button floated='right'  type='submit'content='Cancelar' ></Button>
            </Form>
        </Segment>
    )
   
}


export default UsuarioForm