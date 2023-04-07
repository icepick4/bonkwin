import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        const userId = Number(localStorage.getItem('userId'));
        setIsLogged(!!userId); // set isLogged to true if userId exists, otherwise set to false
    }, []);
    return (
        <div className="w-1/4 h-screen bg-[#802922] flex items-center justify-center">
            <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
                <h1 className="text-2xl">BONKWIN</h1>
                <div className="flex flex-col gap-5">
                    <NavLink
                        className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/user/annonces"
                    >
                        Mes Annonces
                    </NavLink>
                    <NavLink
                        className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/annonces"
                    >
                        Les Annonces
                    </NavLink>
                    {isLogged && (
                        <>
                            <NavLink
                                className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                                to="/user"
                            >
                                Mon Profil
                            </NavLink>

                            <NavLink
                                className=" rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                                to="/login"
                            >
                                Se déconnecter
                            </NavLink>
                        </>
                    )}
                    {!isLogged && (
                        <NavLink
                            className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                            to="/login"
                        >
                            Se connecter
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
