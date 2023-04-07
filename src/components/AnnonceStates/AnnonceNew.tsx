import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Annonce, Categorie } from '../../types/annonce';
import ManageCategoriesAnnonce from './manage/ManageCategoriesAnnonce';
import ManageHeadAnnonce from './manage/ManageHeadAnnonce';
import ManageSaveAnnonce from './manage/ManageSaveAnnonce';

type AnnonceNewProps = {
    userId: number;
};

function AnnonceNew({ userId }: AnnonceNewProps) {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [prix, setPrix] = useState<number>(0);
    const [categories, setCategories] = useState<Categorie[]>([]);

    const navigate = useNavigate();
    if (userId === undefined) {
        return <div>Vous devez être connecté pour accéder à cette page</div>;
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(e.target.value);
    };

    const handlePrixChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrix(Number(e.target.value));
    };

    const handleAddCategorie = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //todo
    };

    const handleSubmit = async () => {
        const newId = await fetch('http://localhost:3005/api/annonce/new/id');
        let newAnnonce: Annonce = {
            id: parseInt(await newId.text()),
            title: title,
            description: description,
            prix: prix,
            categories: categories,
            commentaires: [],
            userId: userId
        };
        const response = await fetch('http://localhost:3005/api/annonce/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAnnonce)
        });
        if (response.ok) {
            navigate(`/annonces/user`);
        } else {
            const error = await response.text();
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col h-4/6 gap-5">
            <ManageHeadAnnonce
                title={title}
                description={description}
                prix={prix}
                handleTitleChange={handleTitleChange}
                handleDescriptionChange={handleDescriptionChange}
                handlePrixChange={handlePrixChange}
            />
            <div className="flex flex-col gap-5">
                <h2 className="font-medium text-lg text-gray-700 mb-2">
                    Catégories
                </h2>
                <ManageCategoriesAnnonce />
                <ManageSaveAnnonce
                    handleSubmit={handleSubmit}
                    title={title}
                    description={description}
                    prix={prix}
                />
            </div>
        </div>
    );
}

export default AnnonceNew;
