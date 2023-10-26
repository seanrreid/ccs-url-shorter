import { redirect, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import LinkList from '../components/LinkList';
import UrlForm from '../components/UrlForm';

const Column = styled.div`
    flex: 1 0 320px;
    padding: 0 16px;
`;

export async function loader() {
    try {
        const url = 'http://localhost:8000/urls/';
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

    return (
        <>
            <Column>
                <UrlForm />
            </Column>
            <Column>
                <LinkList linkList={linkList} />
            </Column>
        </>
    );
}
