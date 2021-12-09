import {CircleContainer} from './styles';


interface UserInfo {
    initials: string;
}

const UserCircle = ({initials}: UserInfo) => {
    return (
        <CircleContainer>
            <p>{initials}</p>    
        </CircleContainer>
    )
}

export default UserCircle