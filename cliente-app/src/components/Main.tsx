import React from 'react';

interface IProp{
    titulo?:string,
    // This param is send within of <>
    children?:any
};

const Main:React.FC<IProp> = (props:IProp) => {
    return(
        <div>
            <p>{props.titulo}</p>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Main;