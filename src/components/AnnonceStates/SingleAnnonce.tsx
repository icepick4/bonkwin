import { Link } from 'react-router-dom';
import { Annonce } from '../../types/annonce';

type AnnonceNewProps = {
    annonce: Annonce;
    isPrivate: boolean;
    handleDelete: (annonceId: number) => void;
};

function SingleAnnonce({ annonce, isPrivate, handleDelete }: AnnonceNewProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 relative flex flex-col gap-5">
            <h1 className="text-2xl font-bold mb-2">{annonce.title}</h1>
            <p className="text-gray-700 mb-4">{annonce.description}</p>
            <div className="flex justify-between items-center mb-2 gap-10">
                <p className="text-lg font-medium text-gray-800">
                    {annonce.prix} €
                </p>
                <p className="text-sm font-medium text-gray-500">
                    {annonce.categories
                        .map((categorie) => categorie.name)
                        .join(', ')}
                </p>
            </div>
            {isPrivate && (
                <div className="absolute top-0 right-0">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleDelete(annonce.id)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            )}
            <div className="flex justify-center">
                <Link to={`/annonces/${annonce.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Voir l'annonce
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SingleAnnonce;
