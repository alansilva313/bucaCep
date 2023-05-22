import {useState } from 'react'
import './App.css';
import { FiSearch } from 'react-icons/fi';
import './style.css';

import api  from './services/api'
//teste

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState('')

 async  function handleSearch(e){
  e.preventDefault()
    // 1984000/json/

    if(input === ''){
      alert('Preencha algum cep');

      return;
    }

    try{

      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('')
      


    }catch{
          alert('Ops, erro ao buscar')
          setInput('')
    }
    
  }





  return (
    <div className="container">

<div>
            <form>
             
            <h3 className="title">Buscador CEP</h3>
                <div className="containerInput">
             
                    
                    <input type="text" name="cep" id="cep" placeholder="Digite seu cep...." value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button className="buttonSearch" onClick={handleSearch}>
                 <FiSearch size="25" color="#fff"/>
                </button>
                </div>

              

            </form>


        </div>

        {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}</span>
        

      </main>
        )}
        
      
      
    </div>
  );
}

export default App;
