import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Form from '../components/form'
import Container from '../components/container'
import Input from '../components/input'
import Button from '../components/button'
import Link from '../components/link'

import api from '../services/api'



export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()
    try {
     const { data, status } = await api.post('/signin' , { email , password })
     if (status === 201) {
      localStorage.setItem("token" , data.token.token)
      history.push('/dashboard')
    }
    }catch(e) {
      const { data } = e.response;
      alert(data.rule)
    }
  }

  return (
    <Container>
      <h1 style={{fontSize:'22px' , marginBottom: '15px'}}>Entre em sua conta    ✌️</h1>
        <Form onSubmit={handleSubmit}>
            <Input label="Email" onChange={(e) => setEmail(e.target.value)}/>
            <Input label="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button>Entrar</Button>
            <Link to="/signup">Não possui uma conta ? Cadastre-se aqui!</Link>
        </Form>
    </Container>
  );
}
