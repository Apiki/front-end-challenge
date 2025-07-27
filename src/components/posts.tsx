'use client';

import { Post } from './post';
import { Button } from './ui/button';
import { LoaderCircle } from 'lucide-react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts } from '@/lib/fetchPosts';
import { PostType } from '@/types/post';

interface PostsProps {
  initialData: {
    posts: PostType[];
    totalPages: number;
    totalPosts: number;
    nextPage: number | undefined;
    hasNextPage: boolean;
  };
}

export function Posts({ initialData }: PostsProps) {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: ({ hasNextPage, nextPage }) => (hasNextPage ? nextPage : undefined),
    initialPageParam: 1,
    initialData: {
      pages: [initialData],
      pageParams: [1],
    },
  });

  if (isLoading) {
    return <LoaderCircle className="w-10 h-10 mx-auto mt-10 animate-spin text-primary" />;
  }
  if (isError) return <p className="text-center text-red-500">Erro ao carregar os artigos. Tente novamente!</p>;

  const allPosts = data?.pages.flatMap(page => page.posts) ?? [];
  const totalPages = data?.pages.flatMap(page => page.totalPages)[0] ?? 0;
  const totalPosts = data?.pages.flatMap(page => page.totalPosts)[0] ?? 0;
  const totalCurrentPosts = allPosts.length;

  return (
    <div className="py-10 flex flex-col gap-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {allPosts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </div>

      <div className="flex flex-col items-center gap-y-6">
        <div className="space-y-2">
          <p className="font-medium text-gray-500 text-sm text-center">
            Página {data?.pages.length} de {totalPages}
          </p>

          <p className="font-medium text-gray-500 text-sm text-center">
            Exibindo {totalCurrentPosts} de {totalPosts} artigos
          </p>
        </div>

        {hasNextPage && (
          <Button
            size="lg"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="text-foreground cursor-pointer font-semibold uppercase w-full sm:w-120"
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais artigos'}
          </Button>
        )}
      </div>
    </div>
  );
}
