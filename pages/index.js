import { useState } from 'react';

function Home (){
  return (
    <div>
      <h1>Home</h1>
      <Contador />
      </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(0);

  function adicionarContador() {
    setContador(contador + 1);
  }
  return( 
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar contador</button>
    </div>
  )
}

export default Home;