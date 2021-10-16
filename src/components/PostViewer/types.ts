import { IPost } from "~/services/Posts/types";

interface IPostViewer {
    firstPost?: IPost;
    posts: IPost[];
    handleOnClick: () => Promise<void>;
}

export type { IPostViewer };
