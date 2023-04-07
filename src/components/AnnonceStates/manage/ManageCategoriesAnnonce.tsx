import { useEffect, useState } from 'react';
import { Categorie } from '../../../types/annonce';

function ManageCategoriesAnnonce() {
    const [categories, setCategories] = useState<Categorie[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Categorie[]>(
        []
    );

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('http://localhost:3005/api/categorie');
            if (response.ok) {
                const categories = await response.json();
                console.log(categories);
                setCategories(categories);
            } else {
                const error = await response.text();
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                {categories.map((categorie) => (
                    <div
                        key={categorie.name}
                        className="flex flex-row gap-5 items-center"
                    >
                        <input
                            type="checkbox"
                            id={categorie.name}
                            name={categorie.name}
                            value={categorie.name}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setSelectedCategories([
                                        ...selectedCategories,
                                        categorie
                                    ]);
                                } else {
                                    setSelectedCategories(
                                        selectedCategories.filter(
                                            (selectedCategorie) =>
                                                selectedCategorie.name !==
                                                categorie.name
                                        )
                                    );
                                }
                            }}
                        />
                        <label htmlFor={categorie.name}>{categorie.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageCategoriesAnnonce;
