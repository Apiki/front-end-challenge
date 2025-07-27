'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface PostCardProps {
    title: string;
    imageUrl: string;
    slug: string;
}

export default function PostCard({ title, imageUrl, slug }: PostCardProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative">
            <Link href={`/post/${slug}`} className="post-card block">
                <div className="relative w-full h-[250px]">
                    {isLoading && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
                    )}

                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className={`object-cover rounded-2xl transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoadingComplete={() => setIsLoading(false)}
                        loading="lazy"
                    />
                </div>

                <h2
                    className="post-card__title font-extrabold text-xl text-gray-800 text-center mt-3"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </Link>
        </div>
    );
}
