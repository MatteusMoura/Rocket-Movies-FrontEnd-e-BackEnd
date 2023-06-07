import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ ...props }){
    const { signOut, user } = useAuth();
    const navigation = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignOut(){
        navigation('/')
        signOut();
    }
    return(
        <Container>
            <Profile>
 
            <Link to='/'><h1>RocketMovies</h1></Link> 

            <Input placeholder='Pesquisar pelo título' type='search' {...props}/>

            <div className='profile'>
            <Link to='/profile'>
                <img
                    src={avatarUrl} 
                    alt={user.name}
                />
            </Link>
                <div className='dates'>
                    <strong>{user.name}</strong>
                    <button onClick={handleSignOut}>Sair</button>
                </div>
            </div>

            </Profile>
        </Container>
    )
}