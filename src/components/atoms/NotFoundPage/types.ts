import type { ImgHTMLAttributes } from "react";

export interface INotFoundPage extends Pick<ImgHTMLAttributes<HTMLImageElement>, "src"> {
    title: string;
    description: string;
}
