import { useNavigate } from 'react-router-dom';

type ManageAnnonceProps = {
    handleSubmit: () => void;
    prix: number;
    title: string;
    description: string;
};

function ManageSaveAnnonce({
    handleSubmit,
    prix,
    title,
    description
}: ManageAnnonceProps) {
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate(`/annonces/user`);
    };
    return (
        <>
            <div className="flex flex-row gap-5">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}
                    disabled={!title || !description || prix <= 0}
                >
                    Enregistrer l'annonce
                </button>
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700"
                        onClick={handleCancel}
                    >
                        Annuler
                    </button>
                </div>
            </div>
        </>
    );
}

export default ManageSaveAnnonce;
