
import { useState } from 'react'
import { Background,ButtonContainer,InputContainer,Wrapper } from './styles'

import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'

import Card from '../../components/Card/index'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {userSignIn} = useAuth();

    const handleToSignIn = async () => {
        
        const data = {
            email, 
            password
        }
        
        const response = await userSignIn(data)
        
        if (response.id) {
            navigate('/dashboard')
            return
        }

        alert('Usúario ou senha inválida.')
        
    }

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="clamp(40rem, 80%, 60rem)">
                <img src={logoInter} width={172} height={61} alt="Logo Banco Inter" />
                <InputContainer>
                    <Input placeholder="EMAIL" type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                    <Input placeholder="SENHA" type='password' value={password} onChange={e => setPassword(e.target.value)} required />
                </InputContainer>
                <ButtonContainer>
                    <Button type='button' onClick={handleToSignIn}>Entrar</Button>
                    <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;
