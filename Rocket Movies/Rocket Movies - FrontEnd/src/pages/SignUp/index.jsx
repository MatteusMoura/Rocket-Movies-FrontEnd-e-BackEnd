import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'


export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    // cria um estado para capturar de forma dinamica determinada função

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email , password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch( error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })

    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                placeholder='Nome'
                type='text'
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder='E-mail'
                type='email'
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
              />

                <Input 
                placeholder='Senha'
                type='password'
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title='Cadastrar'
                    onClick={handleSignUp}
                /> 
               
                <Link to='/'><BiArrowBack/>Voltar para o login</Link>
            </Form>
            <Background />
        </Container>
    )
}