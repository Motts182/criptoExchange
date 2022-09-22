import React from 'react';

const Resultado = ({ resultado }) => {

    console.log(resultado)

    const { PRICE } = resultado;
    return (
        <h1>
            <p>El valor es de: {PRICE}</p>
        </h1>
    );
}

export default Resultado;