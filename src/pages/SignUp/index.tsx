import { Background,ButtonContainer,InputContainer,Wrapper } from './styles'
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'
import Card from '../../components/Card/index'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import useAuth from '../../hooks/useAuth'

type UserSignUp = {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    passwordConfirmation:string;
}

const SignUp = () => {
    const navigate = useNavigate()
    const {userSignUp} = useAuth();


    const checkFields = (userData:UserSignUp):boolean => {
        Object.keys(userData).forEach(key => {
            if(userData[key as keyof UserSignUp]=== '' ) return false
        })
        return true
    }

    const handleToSignUp = async () => {
        const fieldsFullFilled = checkFields(user)
        if(!fieldsFullFilled) return alert('Preencha todos os campos.')
        if(user.password !== user.passwordConfirmation) return alert('Password não confirmado')
        const {firstName, lastName, email, password} = user
        await userSignUp({firstName, lastName, email, password})
        navigate('/dashboard')
    }

    const [user, setUser] = useState<UserSignUp>({
                                                    firstName:'',
                                                    lastName:'',
                                                    email:'',
                                                    password:'',
                                                    passwordConfirmation:''
                                                })

    const handleChange =( event:ChangeEvent) =>{
        const input = event.target as HTMLInputElement
        const value = { [input.name]:input.value }
        setUser((prevstate) => ({...prevstate ,...value}))
    }

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width='clamp(40rem, 80%, 60rem)'>
                <img src={logoInter} width={172} height={61} alt="Logo Banco Inter" />
                <InputContainer>
                    <Input placeholder="NOME" type='text' name='firstName' required onChange={handleChange}/>
                    <Input placeholder="SOBRENOME" type='text' name='lastName' required onChange={handleChange}/>
                    <Input placeholder="EMAIL" type='email' name='email' required onChange={handleChange}/>
                    <Input placeholder="SENHA" type='password' name='password' required onChange={handleChange}/>
                    <Input placeholder=" CONFIRMAR SENHA" type='password' name='passwordConfirmation' required onChange={handleChange}/>
                </InputContainer>
                <ButtonContainer>
                    <Button type='button' onClick={handleToSignUp}>Cadastrar</Button>
                    <p>Já é cadastrado? <Link to="/">Entre Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;
