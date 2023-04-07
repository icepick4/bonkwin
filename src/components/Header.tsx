import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        const userId = Number(localStorage.getItem('userId'));
        if (userId === -1) {
            setIsLogged(false);
        } else {
            setIsLogged(true);
        }

        // Ajouter un écouteur d'événement pour les modifications du localStorage
        window.addEventListener('storage', handleStorageChange);

        // Retirer l'écouteur d'événement lors de la suppression du composant
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    });

    // Fonction de rappel pour l'événement storage
    const handleStorageChange = () => {
        const userId = Number(localStorage.getItem('userId'));
        if (userId === -1) {
            setIsLogged(false);
        } else {
            setIsLogged(true);
        }
    };
    return (
        <div className="w-1/4 h-screen bg-[#802922] flex items-center justify-center">
            <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
                <h1 className="text-2xl">BONKWIN</h1>
                <div className="flex flex-col gap-5">
                    <NavLink
                        className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/"
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/annonces/user"
                    >
                        Mes Annonces
                    </NavLink>
                    <NavLink
                        className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/annonces"
                    >
                        Les Annonces
                    </NavLink>
                    <NavLink
                        className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/user"
                    >
                        Mon Profil
                    </NavLink>

                    <NavLink
                        className=" rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/logout"
                    >
                        Se déconnecter
                    </NavLink>
                    <NavLink
                        className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/login"
                    >
                        Se connecter
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
