import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { Nav } from './UI/Nav';

export default function MainNav() {
    const { isAuth } = useAuth();
    return (
        <Nav>
            <ul>
                <li>{isAuth ? <Link to='/'>Home</Link> : null}</li>
                <li>
                    {isAuth ? (
                        <Link to='/logout'>Logout</Link>
                    ) : (
                        <Link to='/login'>Login</Link>
                    )}
                </li>
            </ul>
        </Nav>
    );
}
