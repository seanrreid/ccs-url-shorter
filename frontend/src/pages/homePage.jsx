import { redirect, useLoaderData } from 'react-router-dom';
import {useRefreshToken} from '../hooks/useRefreshToken'
import styled from 'styled-components';
import LinkList from '../components/LinkList';
import UrlForm from '../components/UrlForm';

const Column = styled.div`
    flex: 1 0 320px;
    padding: 0 16px;
`;

export async function loader() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/urls/`;
        const linkList = await fetch(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
        }).then((response) => response.json());
        if (!Array.isArray(linkList)) {
            throw Error('Not an array of links');
        }
        return { linkList };
    } catch (error) {
        return redirect('/login');
    }
}

export default function Home() {
    const { linkList } = useLoaderData();
    const { accessToken, setAccessToken } = useRefreshToken();

    const handleClick = () => {
        console.log(accessToken)
    };

    return (
        <>
            <Column>
                <button onClick={handleClick}>Click Me To Refresh</button>
                <UrlForm />
            </Column>
            <Column>
                <LinkList linkList={linkList} />
            </Column>
        </>
    );
}
