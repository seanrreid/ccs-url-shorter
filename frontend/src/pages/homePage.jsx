import { useLoaderData } from 'react-router-dom';
import LinkList from '../components/LinkList';

export async function loader() {
    const url = 'http://localhost:8000/urls/';
    const linkList = await fetch(url, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    }).then((response) => response.json());

    return { linkList };
}

export default function Homet() {
    const { linkList } = useLoaderData();
    return (
        <>
            <LinkList linkList={linkList} />
        </>
    );
}
