import { NavLink } from 'react-router-dom';

function Header() {
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
                    <NavLink
                        className="rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                        to="/user"
                    >
                        Mon Profil
                    </NavLink>
                </div>
                <NavLink
                    className=" rounded-lg text-lg text-white font-bold hover:text-black hover:bg-white p-5"
                    to="/login"
                >
                    Se déconnecter
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
