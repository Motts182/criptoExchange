import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
color: white;
display: block ;
font-family: 'Lato', sans-serif ;
font-size:  24px;
font-weight: 700;
margin: 15px 0;
`

const Select = styled.select`
width: 100%;
font-size:  18px;
padding: 14px;
border-radius: 10px ;
`

const useSelectMonedas = (labelText, opciones) => {

    const [state, setState] = useState('');

    const SelectMonedas = () => (
        <>
            <Label>{labelText}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value=""> seleccione</option>

                {opciones.map(a => (
                    <option
                        key={a.id}
                        value={a.id}
                    >
                        {a.nombre}</option>
                ))}
            </Select>
        </>
    )

    return [state, SelectMonedas]
}

export default useSelectMonedas;