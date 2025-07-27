import Link from 'next/link';
import Image from 'next/image';
import { PostInfo } from './post-info';
import { Button } from './ui/button';
import { User, Clock, Calendar, ArrowRight } from 'lucide-react';
import { PostType } from '@/types/post';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  return (
    <div className="border border-slate-700 bg-slate-800/90 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div className="space-y-4">
        <Link href={`/posts/${post.slug}`} className="block">
          <Image
            src={post._embedded['wp:featuredmedia']?.[0]?.source_url}
            alt={post._embedded['wp:featuredmedia']?.[0]?.alt_text}
            width={post._embedded['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.width}
            height={post._embedded['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.height}
            className="w-full h-auto rounded-lg mb-4"
            loading="lazy"
          />
        </Link>

        <div className="bg-yellow-500 w-54 flex justify-center p-0.5 rounded-lg">
          <span className="text-sm text-white font-semibold">Desenvolvimento WordPress</span>
        </div>

        <h2 className="font-bold text-lg capitalize">{post.title.rendered}</h2>

        <div className="flex items-center gap-3 flex-wrap">
          <PostInfo icon={User} text={post.yoast_head_json.author} />
          <PostInfo icon={Clock} text={post.yoast_head_json.twitter_misc['Est. tempo de leitura']} />
          <PostInfo icon={Calendar} text={new Date(post.date).toLocaleDateString('pt-BR')} />
        </div>
      </div>

      <Button
        asChild
        className="bg-transparent border-slate-500 border text-foreground mt-4 text-sm w-full flex items-center justify-center"
      >
        <Link href={`/posts/${post.slug}`} className="flex items-center gap-2">
          Ler artigo
          <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
