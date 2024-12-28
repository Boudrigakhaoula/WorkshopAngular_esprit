export class Categorie {
    id: number;
    title: string;
    image: string;
    description: string;
    available: boolean;

    constructor(id: number, title: string, image: string, description: string, available: boolean) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;
        this.available = available;
    }
}