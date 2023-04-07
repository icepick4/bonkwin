import { Annonce } from '../../types/annonce';

type AnnonceNewProps = {
    annonce: Annonce;
};

function SingleAnnonce({ annonce }: AnnonceNewProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
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
        </div>
    );
}

export default SingleAnnonce;
