import { Background,ButtonContainer,InputContainer,Wrapper } from './styles'
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'
import Card from '../../components/Card/index'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    const handleToSignIn = () => {
        navigate('/dashboard')
    }

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="clamp(40rem, 80%, 60rem)">
                <img src={logoInter} width={172} height={61} alt="Logo Banco Inter" />
                <InputContainer>
                    <Input placeholder="EMAIL" type='email' required />
                    <Input placeholder="SENHA" type='password' required />
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
