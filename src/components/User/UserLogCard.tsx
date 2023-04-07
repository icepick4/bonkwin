import { Link } from 'react-router-dom';

type UserCardProps = {
    title: string;
    userName: string;
    handleSubmit: () => void;
    handleUserNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function UserCard({
    title,
    userName,
    handleSubmit,
    handleUserNameChange
}: UserCardProps) {
    return (
        <>
            <div className="flex flex-col p-4 gap-3">
                <h1 className="text-center text-2xl">{title}</h1>
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
                    {title}
                </button>
                {title === 'Inscription' && (
                    <p className="text-center">
                        Vous avez déjà un compte ?{' '}
                        <Link to="/login" className="hover:underline font-bold">
                            Connectez-vous
                        </Link>
                    </p>
                )}
                {title === 'Connexion' && (
                    <p className="text-center">
                        Vous n'avez pas de compte ?{' '}
                        <Link
                            to="/register"
                            className="hover:underline font-bold"
                        >
                            Inscrivez-vous
                        </Link>
                    </p>
                )}
            </div>
        </>
    );
}

export default UserCard;
