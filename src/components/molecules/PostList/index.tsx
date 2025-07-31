import { memo } from "react";
import { PostCard } from "~components/atoms";
import type { IPostList } from "./types";
import "./styles.scss";

export const PostList = memo(function PostList({ items, batchSize }: IPostList) {
    const startIndex = items.length - batchSize;

    return (
        <ul className="post-list">
            {items.map((item, index) => {
                const order = index >= startIndex ? index - startIndex : 0;

                return (
                    <PostCard
                        key={item.id}
                        order={order}
                        data={item}
                    />
                );
            })}
        </ul>
    );
});
