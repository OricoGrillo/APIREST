import React from 'react';
import CSS from 'csstype';

interface IProp{
    titulo:string,
    descripcion?:string
};

const style:CSS.Properties = {
    backgroundColor : 'red',
    color : 'white'
};

const Header:React.FC<IProp> = (props:IProp) => {
    return(
        <div style={style}>
            <p>{props.titulo}</p>
            {props.descripcion}
        </div>
    );
};

export default Header;