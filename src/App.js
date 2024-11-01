
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
function App() {
  const times = [
    {
      nome: 'Marketing',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7d9'
    },

    {
      nome: 'RH',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },

    {
      nome: 'Desenvolvimento',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },

  ]
  const [colaboradores, setColaboradores] = useState([])
  const aoAdicionarColaboradorNovo = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoAdicionarColaboradorNovo(colaborador)} />
      {times.map(time => <Time key={time.nome} nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}

      />)}

    </div>
  );
}

export default App;

