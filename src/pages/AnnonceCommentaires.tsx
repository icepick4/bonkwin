import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Commentaire } from '../types/annonce';

function AnnonceCommentaires() {
    const { id } = useParams();
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [prix, setPrix] = useState<number>(0);
    const [commentaires, setCommentaires] = useState<Commentaire[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [commentaire, setCommentaire] = useState<string>('');

    useEffect(() => {
        const fetchAnnonce = async () => {
            console.log(id);
            const response = await fetch(
                `http://localhost:3005/api/annonce/content/${id}`
            );
            if (response.ok) {
                const annonce = await response.json();
                setDescription(annonce.description);
                setPrix(annonce.prix);
                setTitle(annonce.title);
                setCommentaires(annonce.commentaires);
                setIsLoaded(true);
            } else {
                const error = await response.text();
                console.error(error);
            }
        };
        fetchAnnonce();
    }, [id]);

    const handleAddCommentaire = async () => {
        const lastIdCommentaire = commentaires[commentaires.length - 1].id;
        const response = await fetch(
            `http://localhost:3005/api/annonce/${id}/commentaire`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: commentaire,
                    userName: 'test'
                })
            }
        );
        if (response.ok) {
            const newCommentaire = await response.json();
            setCommentaires([...commentaires, newCommentaire]);
        } else {
            const error = await response.text();
            console.error(error);
        }
    };

    return (
        <>
            {!isLoaded && <div className="p-4 text-center">Chargement...</div>}
            {isLoaded && (
                <div className="flex flex-col gap-10">
                    <h1 className="text-5xl text-center">Annonce {title}</h1>
                    <div className="flex flex-col items-center space-y-6">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h1 className="text-xl font-bold">Description</h1>
                            <p>{description}</p>
                            <p>Prix : {prix} €</p>
                        </div>
                        <div className="w-full max-w-lg">
                            <h1 className="text-xl font-bold">Commentaires</h1>
                            {commentaires.map((commentaire) => (
                                <div
                                    key={commentaire.id}
                                    className="p-4 bg-white rounded-lg shadow-md mb-4"
                                >
                                    <p>{commentaire.content}</p>
                                    <p className="text-sm font-medium">
                                        {commentaire.userName}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <label
                        htmlFor="commentaire"
                        className="block font-medium text-lg text-gray-700"
                    >
                        Nouveau commentaire
                    </label>
                    <input
                        id="commentaire"
                        type="text"
                        className="block w-full  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-black border-[1px]"
                        value={commentaire}
                        onChange={(e) => setCommentaire(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-[#802922] text-white font-bold rounded-lg p-2 mt-5"
                        onClick={handleAddCommentaire}
                    >
                        Envoyer
                    </button>
                </div>
            )}
        </>
    );
}

export default AnnonceCommentaires;
