type UserCardProps = {
    userName: string;
    handleSubmit: () => void;
    handleUserNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function UserCard({
    userName,
    handleSubmit,
    handleUserNameChange
}: UserCardProps) {
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
        </>
    );
}

export default UserCard;
