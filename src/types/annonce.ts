export type Annonce = {
    id: number;
    title: string;
    description: string;
    prix: number;
    commentaires: Commentaire[];
    categories: Categorie[];
    userId: number;
};

export type Commentaire = {
    userName: string;
    content: string;
};

export type Categorie = {
    name: string;
};
