import React, { FC, InputHTMLAttributes, ButtonHTMLAttributes, useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import { useField } from '@unform/core'

import './App.css'
import { type } from 'os'

function App() {

  const handleRegister = (data: object): void => {
    console.log('--- Evento do Formulário ---')
    console.log(data)
  }

  return (
    <div className='app'>
        <Form className='form' onSubmit={handleRegister}>
          <Input type='text' name='name' placeholder='Nome' />
          <Input type='email' name='email' placeholder='E-mail' />
          <Button type='submit' text='Cadastrar' />
        </Form>
    </div>
  )
}

// Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string// Já existe nas propriedades, mas fazendo isso ele se torna obrigatório
}

const Input: FC<InputProps> = (props) => {
  const { fieldName, defaultValue, error, registerField } = useField(props.name)

  const inputRef = useRef(null)

  useEffect(() => {
    registerField({// Registro do input, necessário assim que o input for exibido em tela
      name: fieldName,// Necessário ser o fieldName pois unform as vezes altera o noem do campo baeado em algumas condições
      ref: inputRef.current,// Referência do input
      path: 'value'// Quando o unform precisar acessar o valor do input, só procurar na variável path
    })
  }, [fieldName, registerField])

  return (
    <>
        <input {...props} ref={inputRef} />
    </>
  )
}

// Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string
}

const Button: FC<ButtonProps> = ({ type, text }) => {
  return (
    <>
        <button type={type}>{text}</button>
    </>
  )
}

export default App
