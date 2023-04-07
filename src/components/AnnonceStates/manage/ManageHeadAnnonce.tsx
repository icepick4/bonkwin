type ManageHeadAnnonceProps = {
    title: string;
    description: string;
    prix: number;
    handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handlePrixChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ManageHeadAnnonce({
    title,
    description,
    prix,
    handleTitleChange,
    handleDescriptionChange,
    handlePrixChange
}: ManageHeadAnnonceProps) {
    return (
        <div className="flex flex-col gap-5">
            <label
                htmlFor="title"
                className="block font-medium text-lg text-gray-700"
            >
                Titre
            </label>
            <input
                id="title"
                type="text"
                className="block w-full  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-black border-[1px]"
                value={title}
                onChange={handleTitleChange}
            />
            <label
                htmlFor="description"
                className="block font-medium text-lg text-gray-700"
            >
                Description
            </label>
            <textarea
                id="description"
                className=" block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-black border-[1px]"
                rows={3}
                value={description}
                onChange={handleDescriptionChange}
            ></textarea>
            <label
                htmlFor="prix"
                className="block font-medium text-lg text-gray-700"
            >
                Prix
            </label>
            <input
                id="prix"
                type="number"
                className="block w-full  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-black border-[1px]"
                value={prix}
                onChange={handlePrixChange}
            />
        </div>
    );
}

export default ManageHeadAnnonce;
