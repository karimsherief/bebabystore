export interface CategoriesProps {
    name: string;
    slug: string;
    icon: string
}

export interface ProductProps {
    name: string;
    description: string;
    sizes: Size[];
    slug: string;
    images: Image[];
}

export interface Image {
    secure_url: string;
    public_id: string;
    _id: string;
}

export interface Size {
    size: string;
    price: number;
    colors: Color[];
    _id: string;
}

export interface Color {
    name: Name;
    hex: string;
    quantity: number;
    _id: string;
}

export enum Name {
    Graphite = "graphite",
    Green = "green",
    Grey = "grey",
    PostalRed = "postal red",
    White = "white",
    Yellow = "yellow",
}
