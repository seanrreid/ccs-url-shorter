import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '../components/Wrapper';

const Nav = styled.nav`
    width: 100%;

    ul {
        display: flex;
        list-style: none;
        width: 100%;
    }
`

export default function Root() {
    return (
        <>
            <h1>URL Shortening</h1>
            <Wrapper>
                <Nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
}
