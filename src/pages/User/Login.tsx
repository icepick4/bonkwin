import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../components/User/UserLogCard';

function Login() {
    const [userName, setUserName] = useState('');
    const [validUserName, setValidUserName] = useState(true);

    const navigate = useNavigate();

    const handleUserNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserName(event.target.value);
    };

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:3005/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName: userName })
        });
        if (response.ok) {
            const user = await response.json();
            localStorage.setItem('userId', user.id.toString());
            navigate(`/user/annonces/${user.id}`);
            setValidUserName(true);
        } else {
            const error = await response.text();
            console.error(error);
            setValidUserName(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 items-center">
            {!validUserName && (
                <div className="flex justify-center">
                    <p className="text-red-500">Nom d'utilisateur invalide</p>
                </div>
            )}
            <UserCard
                title="Connexion"
                userName={userName}
                handleSubmit={handleSubmit}
                handleUserNameChange={handleUserNameChange}
            />
        </div>
    );
}

export default Login;
