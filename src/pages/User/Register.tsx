import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../components/User/UserLogCard';

function Register() {
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    const handleUserNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserName(event.target.value);
    };

    const handleSubmit = async () => {
        const newUserId = await fetch('http://localhost:3005/api/user/new/id');
        const response = await fetch(
            'http://localhost:3005/api/user/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: userName,
                    id: parseInt(await newUserId.text())
                })
            }
        );
        if (response.ok) {
            const user = await response.json();
            localStorage.setItem('userId', user.id.toString());
            navigate(`/user`);
        } else {
            const error = await response.text();
            console.error(error);
        }
    };

    return (
        <UserCard
            title="Inscription"
            userName={userName}
            handleSubmit={handleSubmit}
            handleUserNameChange={handleUserNameChange}
        />
    );
}

export default Register;
