import { PostList } from "~components/molecules";
import { renderElementIfTrue } from "~utils";
import { useController } from "./useController";
import "./styles.scss";

export const PostsLayout = () => {
    const { isLoading, isError, content, loadNextPage } = useController();

    return (
        <section className="posts-layout">
            <p className="posts-layout__text">
                Posts: {content.data.loadedPosts}/{content.data.totalPosts}
            </p>
            <section className="posts-layout__box">
                {renderElementIfTrue(
                    isError,
                    <div>isError</div>,
                    <>
                        <PostList
                            items={content.data.posts}
                            batchSize={content.data.batchSize}
                        />
                        {renderElementIfTrue(isLoading, <div>isLoading</div>)}
                        {renderElementIfTrue(
                            content.data.loadedPosts < content.data.totalPosts,
                            <button
                                type="button"
                                aria-label="Load next page"
                                onClick={loadNextPage}
                                className="posts-layout__btn"
                            >
                                Carregar mais...
                            </button>
                        )}
                    </>
                )}
            </section>
        </section>
    );
};
