import { useRef } from 'react';
import { nanoid } from 'nanoid';

export default function UrlForm() {
    const form = useRef(null);
    const auth = localStorage.getItem('access_token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        const apiUrl = 'http://localhost:8000/urls/';
        const data = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${auth}}`,
            },
            body: formData,
        }).then((response) => response.json());
        console.log('DATA', data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Link Title
                <input
                    type='text'
                    name='title'
                    value=''
                />
            </label>
            <label>
                Link Original URL
                <input
                    type='url'
                    name='url'
                    value=''
                />
            </label>
            <input type="hidden" name="short_url" value={nanoid(4)} />
            <input type="hidden" name="user" value="2" />
            <button type='submit'>Add URL</button>
        </form>
    );
}
