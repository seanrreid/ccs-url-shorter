import { useLoaderData } from 'react-router-dom';
import LinkList from '../components/LinkList';

// const openLink = (url) => window.open(url, '_blank')?.focus();

export async function loader() {
    const url = 'http://localhost:8000/urls/';
    const linkList = await fetch(url).then((response) => response.json());

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
