import { Route, Routes } from 'react-router-dom';
import AnnonceNew from '../components/AnnonceStates/AnnonceNew';
import Logout from '../components/User/Logout';
import Annonces from '../pages/Annonces';
import Home from '../pages/Home';
import Login from '../pages/User/Login';
import Profil from '../pages/User/Profil';
import Register from '../pages/User/Register';
function App() {
    const userId = Number(localStorage.getItem('userId'));

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<Profil />} />
            <Route path="/annonces">
                <Route path="" element={<Annonces isPrivate={false} />} />
                <Route path="user" element={<Annonces isPrivate={true} />} />
                <Route path="new" element={<AnnonceNew userId={userId} />} />
            </Route>
        </Routes>
    );
}

export default App;
