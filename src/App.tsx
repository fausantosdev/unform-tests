import React from 'react'
import './App.css'

function App() {
  return (
    <div className='app'>
        <form className='form'>
          <input type='text' name='name' placeholder='Nome' />
          <input type='email' name='email' placeholder='E-mail' />
          <button type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}

export default App
