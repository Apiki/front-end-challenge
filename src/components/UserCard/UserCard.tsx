'use client';

import { formattedDate } from '@/utils/FormatedDate';
import Image from 'next/image';

interface UserCardProps {
    slug: string;
    name: string;
    avatarUrl: string;
    date: string;
}

export default function UserCard({ name, avatarUrl, date, slug }: UserCardProps) {
    return (
        <div className="flex items-center gap-4 border border-gray-100 p-4 rounded-xl shadow-sm bg-white w-full mb-5">
            <Image
                key={slug}
                src={avatarUrl}
                alt={name}
                width={48}
                height={48}
                className="rounded-full object-cover"
            />

            <div className="flex-1">
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-sm text-gray-500">{formattedDate(date)}</p>
            </div>

            <button
                className="px-4 py-1 text-sm border text-gray-800 rounded-full hover:bg-gray-700 hover:text-white hover:cursor-pointer transition"
            >
                Follow
            </button>
        </div>
    );
}
