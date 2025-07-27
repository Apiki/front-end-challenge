import Link from 'next/link';
import Image from 'next/image';
import { PostType } from '@/types/post';

interface PostInfoProps {
  post: PostType;
}

export function PostInfo({ post }: PostInfoProps) {
  return (
    <div className="mt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <div className="flex items-center gap-2">
        <Image
          src={post._embedded.author[0].avatar_urls['24']}
          alt={post.yoast_head_json.author}
          width={24}
          height={24}
          className="rounded-full"
          loading="lazy"
        />

        <span className="text-sm text-muted-foreground">
          Escrito por{' '}
          <Link href={post._embedded.author[0].link} target="_blank" className="text-blue-600 hover:underline">
            {post._embedded.author[0].name}
          </Link>{' '}
          em {new Date(post.date).toLocaleString('pt-BR')}
        </span>
      </div>

      <span className="text-sm text-muted-foreground leading-none">
        Tempo estimado de leitura: {post.yoast_head_json.twitter_misc['Est. tempo de leitura']}
      </span>
    </div>
  );
}
