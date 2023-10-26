import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form } from '../components/UI/Form';
import { Button } from '../components/UI/Button';

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username,
            password,
        };

        try {
            const url = 'http://localhost:8000/token/';
            const data = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            }).then((response) => response.json());

            const { access, refresh, userId } = data;
            localStorage.clear();
            localStorage.setItem('user_id', userId);
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            console.log('LOGGED IN');
            return navigate(`/`, { replace: true });
        } catch (error) {
            console.error('ERROR: ', error);
            return navigate(`/login`, { replace: true });
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <label>
                Username
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChangeUsername}
                />
            </label>
            <label>
                Password
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChangePassword}
                />
            </label>
            <Button type='submit'>Login</Button>
        </Form>
    );
}
