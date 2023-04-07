import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleAnnonce from '../components/AnnonceStates/SingleAnnonce';
import { Annonce } from '../types/annonce';

type AnnoncesProps = {
    isPrivate: boolean;
};

function Annonces({ isPrivate }: AnnoncesProps) {
    const [annonces, setAnnonces] = useState<Annonce[]>([]);
    const [search, setSearch] = useState<string>('');
    const [allAnnonces, setAllAnnonces] = useState<Annonce[]>([]);

    const handleResponse = async (response: Response) => {
        if (response.ok) {
            const annonces = await response.json();
            setAnnonces(annonces);
            setAllAnnonces(annonces);
        } else {
            const error = await response.text();
            console.error(error);
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        const filteredAnnonces = allAnnonces.filter((annonce) =>
            annonce.title
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
        );
        setAnnonces(filteredAnnonces);
    };

    useEffect(() => {
        const fetchAnnonces = async () => {
            if (isPrivate) {
                console.log('isPrivate');
                const userId = Number(localStorage.getItem('userId'));
                const response = await fetch(
                    `http://localhost:3005/api/annonce/${userId}`
                );
                handleResponse(response);
            } else {
                const response = await fetch(
                    `http://localhost:3005/api/annonce`
                );
                handleResponse(response);
            }
        };
        fetchAnnonces();
    }, [isPrivate]);

    return (
        <div className="flex flex-col gap-5 w-5/6 justify-center items-center">
            {isPrivate && (
                <h1 className="text-4xl text-center">Mes annonces</h1>
            )}
            {!isPrivate && (
                <h1 className="text-4xl text-center">Toutes les annonces</h1>
            )}

            <label htmlFor="search" className="text-2xl text-center">
                Rechercher une annonce
            </label>
            <input
                type="text"
                id="search"
                className="border-2 w-1/2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="Rechercher une annonce"
                onChange={handleSearchChange}
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {annonces.map((annonce) => (
                    <SingleAnnonce key={annonce.id} annonce={annonce} />
                ))}
            </div>
            {isPrivate && (
                <div className="flex justify-center">
                    <Link to="/annonces/new">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Ajouter une annonce
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Annonces;
