import { useEffect, useState } from 'react';
import UserCard from '../../components/User/UserCard';

function Profil() {
    const userId = Number(localStorage.getItem('userId'));
    const [userName, setUserName] = useState<string>('');

    const handleUserNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserName(event.target.value);
    };

    const handleSubmit = async () => {
        const response = await fetch(
            `http://localhost:3005/api/user/edit/${userId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: userName, id: userId })
            }
        );
        if (!response.ok) {
            const error = await response.text();
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(
                `http://localhost:3005/api/user/${userId}`
            );
            if (response.ok) {
                const user = await response.json();
                setUserName(user.userName);
            } else {
                const error = await response.text();
                console.error(error);
            }
        };
        fetchUser();
    }, [userId]);

    if (userId === -1) {
        return <h1>You are not logged in</h1>;
    }

    return (
        <div className="flex flex-col gap-5">
            <UserCard
                userName={userName}
                userId={userId}
                handleSubmit={handleSubmit}
                handleUserNameChange={handleUserNameChange}
            />
        </div>
    );
}

export default Profil;
