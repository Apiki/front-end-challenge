'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const isPostPage = pathname.startsWith('/posts/');

  return (
    <header className="p-4 fixed w-full bg-slate-900 border-b border-yellow-500">
      <div
        className={cn(
          'max-w-[960px] mx-auto flex sm:flex-row items-center justify-between gap-2',
          isPostPage ? 'flex-row' : 'flex-col'
        )}
      >
        <h1 className="text-2xl font-bold text-primary">Apiki DevBlog</h1>

        {isPostPage ? (
          <Link href="/">
            <ArrowLeft />
          </Link>
        ) : (
          <p className="text-foreground">O blog da Apiki para desenvolvedores!</p>
        )}
      </div>
    </header>
  );
}
