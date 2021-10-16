import { IEmbedded } from "~/services/Posts/types";

interface ICard {
    date: string;
    embedded: IEmbedded;
    excerpt: string;
    first?: boolean;
    title: string;
}

export type { ICard };
