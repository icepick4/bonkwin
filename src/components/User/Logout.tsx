import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem('userId', '-1');
    }, []);

    useEffect(() => {
        navigate('/login');
    }, []);

    return <h1>Logging out...</h1>;
}

export default Logout;
