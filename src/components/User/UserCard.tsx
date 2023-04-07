import { useEffect, useState } from 'react';

type UserCardProps = {
    userName: string;
    userId: number;
    handleSubmit: () => void;
    handleUserNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function UserCard({
    userName,
    userId,
    handleSubmit,
    handleUserNameChange
}: UserCardProps) {
    const [numberAnnonces, setNumberAnnonces] = useState<number>(0);
    const [numberCommentaires, setNumberCommentaires] = useState<number>(0);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(
                `http://localhost:3005/api/user/annonces/${userId}`
            );
            if (response.ok) {
                const annonces = await response.json();
                console.log(annonces);
                setNumberAnnonces(annonces);
            } else {
                const error = await response.text();
                console.error(error);
            }
        };
        fetchUser();
    }, [userId]);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(
                `http://localhost:3005/api/user/commentaires/${userId}`
            );
            if (response.ok) {
                const commentaires = await response.json();
                setNumberCommentaires(commentaires);
            } else {
                const error = await response.text();
                console.error(error);
            }
        };
        fetchUser();
    }, [userId]);

    return (
        <>
            <h1 className="text-5xl text-center">Bonjour {userName} !</h1>
            <div className="flex flex-col p-4 gap-3">
                <label
                    htmlFor="userName"
                    className="block font-medium text-lg text-gray-700"
                >
                    Nom d'utilisateur
                </label>
                <input
                    id="userName"
                    type="text"
                    className="block w-full  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-black border-[1px]"
                    value={userName}
                    onChange={handleUserNameChange}
                />
                <button
                    type="submit"
                    className="bg-[#802922] text-white font-bold rounded-lg p-2 mt-5"
                    onClick={handleSubmit}
                >
                    Modifier le nom d'utilisateur
                </button>
            </div>

            <div className="flex flex-col p-4 gap-3">
                <h2 className="text-2xl text-center">
                    Vous avez posté {numberAnnonces} annonces
                </h2>
                <h2 className="text-2xl text-center">
                    Vous avez posté {numberCommentaires} commentaires
                </h2>
            </div>
        </>
    );
}

export default UserCard;
