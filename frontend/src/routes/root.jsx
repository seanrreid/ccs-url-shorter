import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from '../AuthContext';
import { Wrapper } from '../components/UI/Wrapper';
import MainNav from '../components/MainNav';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        line-height: 1.75;
    }

    p { margin-bottom: 1rem; }
    h1, h2, h3, h4, h5 {
        margin: 3rem 0 1.38rem;
        font-weight: 400;
        line-height: 1.3;
    }
    h1 {
        margin-top: 0;
        font-size: 3.052rem;
        font-weight: 700;
    }
    h2 { font-size: 2.441rem; }
    h3 { font-size: 1.953rem; }
    h4 { font-size: 1.563rem; }
    h5 { font-size: 1.25rem;}
    button, button:focus{
        outline: none;
        background: transparent;
        border: 1px solid transparent;
    }
    button:active{
        outline: none;
        background: transparent;
        border: 1px solid grey;
    }
`;

export default function Root() {
    return (
        <AuthProvider>
            <GlobalStyle />
            <header>
                <Wrapper>
                    <h1>URL Shortening</h1>
                    <MainNav />
                </Wrapper>
            </header>
            <main>
                <Wrapper>
                    <Outlet />
                </Wrapper>
            </main>
        </AuthProvider>
    );
}
