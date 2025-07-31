import { ErrorCard, Loader } from "~components/atoms";
import { PageButton, PostList } from "~components/molecules";
import { applyClassNameIfTrue, renderElementIfTrue } from "~utils";
import { PaginationControl } from "../PaginationControl";
import { useController } from "./useController";
import "./styles.scss";

export const PostsLayout = () => {
    const { isLoading, isError, content, toggleListMode, resetList, changePage } = useController();

    return (
        <section className="posts-layout">
            <section className="posts-layout__box posts-layout__box--control">
                <section className="posts-layout__box posts-layout__box--mode">
                    <button
                        type="button"
                        aria-label="Toggle list mode to load"
                        onClick={() => toggleListMode("loadMore")}
                        className={
                            "posts-layout__btn-mode posts-layout__btn-mode--list" +
                            applyClassNameIfTrue(content.listMode === "loadMore", "posts-layout__btn-mode--active")
                        }
                    >
                        Load
                    </button>
                    <button
                        type="button"
                        aria-label="Toggle list mode to pagination"
                        onClick={() => toggleListMode("pagination")}
                        className={
                            "posts-layout__btn-mode posts-layout__btn-mode--pagination" +
                            applyClassNameIfTrue(content.listMode === "pagination", "posts-layout__btn-mode--active")
                        }
                    >
                        Página
                    </button>
                </section>
                <button
                    type="button"
                    aria-label="Reset list config"
                    onClick={resetList}
                    className="posts-layout__btn-reset"
                >
                    Resetar
                </button>
            </section>
            <section className="posts-layout__box">
                <p className="posts-layout__text">
                    {renderElementIfTrue(
                        content.listMode === "loadMore",
                        `Posts: ${content.data.loadedPosts}/${content.data.totalPosts}`,
                        `Página: ${content.pagination.page}/${content.pagination.totalPages}`
                    )}
                </p>
                <section className="posts-layout__box posts-layout__box--data">
                    {renderElementIfTrue(
                        isError,
                        <ErrorCard />,
                        <>
                            <PostList
                                items={content.data.posts}
                                batchSize={content.data.batchSize}
                            />
                            {renderElementIfTrue(isLoading, <Loader />)}
                            {renderElementIfTrue(
                                content.listMode === "loadMore",
                                renderElementIfTrue(
                                    content.data.loadedPosts < content.data.totalPosts,
                                    <PageButton
                                        aria-label="Load next page"
                                        onClick={() => changePage("loadNextPage")}
                                        label="Carregar mais..."
                                    />
                                ),
                                <PaginationControl
                                    page={content.pagination.page}
                                    totalPages={content.pagination.totalPages}
                                    changePage={changePage}
                                />
                            )}
                        </>
                    )}
                </section>
            </section>
        </section>
    );
};
