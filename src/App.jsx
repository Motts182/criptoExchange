import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import imgCripto from '../src/img/imagen-criptos.png'
import Formulario from './components/Form'
import Resultado from './components/Resultado'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto ;
  width: 90% ;
  @media(min-width: 900px){
    display: grid ;
    grid-template-columns:  repeat(2, 1fr);
    column-gap:  2rem;
  }
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center ;
  font-weight: 700 ;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
`

const Imagen = styled.img`
  max-width: 400px ;
  width: 80% ;
  margin: 100px auto 0 auto ;
  display: block;
`

function App() {

  const [monedas, setMonedas] = useState(null)

  const [resultado, setResultado] = useState(null)

  useEffect(() => {
    if (monedas) {
      const cotizarCripto = async () => {
        const { moneda, cripto } = monedas;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`

        const respuesta = await fetch(url);

        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[cripto][moneda])

      }

      cotizarCripto();
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen src={imgCripto} alt="imgCriptoMonedas" />
      <div>
        <Heading>Cotiza Criptos Al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {resultado ? <Resultado resultado={resultado} /> : null}
      </div>
    </Contenedor>
  )
}

export default App
