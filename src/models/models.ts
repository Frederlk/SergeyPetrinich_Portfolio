export interface ILink {
    title: string;
    link: string;
}

export interface IImg {
    alt: string;
    webp: string;
    img: string;
}

export interface IPet {
    id: string;
    title: string;
    description: string;
    releaseDate: number;
    stack: string[];
    externalLinks: ILink[];
}
