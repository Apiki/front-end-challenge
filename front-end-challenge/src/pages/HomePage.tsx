import { lazy, Suspense } from "react";

import AsyncFallback from "../components/layout/AsyncFallback";
import FallbackSpinner from "../components/layout/FallbackSpinner";
import Button from "../components/ui/Button";
import { useInfinitePosts } from "../hooks/useInfinitePosts";

const CardItems = lazy(() => import("../components/layout/CardItems"));
const MainNews = lazy(() => import("../components/layout/MainNews"));

function HomePage() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinitePosts();

  return (
    <AsyncFallback isLoading={isLoading} isError={isError}>
      <div className="home mt-22">
        <h1 className="home__title text-6xl lg:text-8xl font-bold text-center mb-8">
          Últimas Notícias
        </h1>
        <p className="text-md text-center mb-6 font-light">
          Receba as últimas atualizações e uma experiência mais profunda do
          Apiki
        </p>

        {data && (
          <>
            {(() => {
              const allPosts = data.pages.flatMap((page) => page.posts);
              const [firstPost, ...otherPosts] = allPosts;

              return (
                <>
                  {firstPost && (
                    <Suspense fallback={<FallbackSpinner />}>
                      <MainNews key={firstPost.id} {...firstPost} />
                    </Suspense>
                  )}

                  <div className="home__grid mt-4">
                    {otherPosts.map((post) => (
                      <Suspense key={post.id} fallback={<FallbackSpinner />}>
                        <CardItems key={post.id} {...post} />
                      </Suspense>
                    ))}
                  </div>
                </>
              );
            })()}
          </>
        )}

        {hasNextPage && (
          <div className="mt-8 w-full flex items-center justify-center">
            <Button
              type="button"
              className="!bg-transparent border border-secondary !text-secondary py-2 px-5 rounded-none cursor-pointer"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Carregando…" : "Carregar mais..."}
            </Button>
          </div>
        )}
      </div>
    </AsyncFallback>
  );
}

export default HomePage;
