import { useRef } from 'react';
import { useRevalidator } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Form } from './UI/Form';
import { Button } from './UI/Button';

export default function UrlForm() {
    const revalidator = useRevalidator();
    const updateForm = useRef(null);
    const auth = localStorage.getItem('access_token');
    const userId = localStorage.getItem('user_id');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(updateForm.current);

        const apiUrl = 'http://localhost:8000/urls/';
        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${auth}`,
            },
            body: formData,
        });
        updateForm.current.reset();
        revalidator.revalidate();
    };

    return (
        <Form onSubmit={handleSubmit} ref={updateForm}>
            <label>
                Link title
                <input
                    type='text'
                    name='title'
                    placeholder='Title of the Site'
                />
            </label>
            <label>
                Link you want to shorten
                <input
                    type='url'
                    name='original_url'
                    placeholder='https://website.com'
                />
            </label>
            <input type='hidden' name='short_url' value={nanoid(8)} />
            <input type='hidden' name='user' value={userId} />
            <Button type='submit'>Add URL</Button>
        </Form>
    );
}
