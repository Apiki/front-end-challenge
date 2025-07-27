import { Posts } from '@/components/posts';
import { fetchPosts } from '@/lib/fetchPosts';

export default async function Home() {
  const firstPage = await fetchPosts({ pageParam: 1 });

  return (
    <main className="px-6 lg:px-16 pt-36">
      <div className="flex flex-col sm:items-center">
        <h1 className="text-3xl font-bold">Últimos Artigos</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Confira os artigos mais recentes sobre Desenvolvimento WordPress!
        </p>
      </div>

      <Posts initialData={firstPage} />
    </main>
  );
}
