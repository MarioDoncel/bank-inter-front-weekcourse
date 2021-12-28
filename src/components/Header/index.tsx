import {HeaderContainer, HeaderWrapper, UserInfo} from './styles';
import UserCircle from '../UserCircle';

import logoInter from '../../assets/images/Inter-orange.png';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth'

const Header = () => {
   
    const navigate = useNavigate();
    const {user} = useAuth()
    const initials = `${user.firstName[0] + user.lastName[0]}`

    const handleLogoff = () => {
        navigate('/')
    }
    return (
        <HeaderContainer>
            <HeaderWrapper>
                   <img src={logoInter} width={172} height={61} alt="Logo Banco Inter" />
                <UserInfo>
                  <UserCircle initials={initials} />
                  <div>
                      <p>Olá, <span className="primary-color font-bold">{user.firstName} {user.lastName}</span></p>
                      <strong>{user.accountNumber}-{user.accountDigit}</strong><br/>
                      <a href="/" onClick={handleLogoff}>Sair</a>
                  </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header
