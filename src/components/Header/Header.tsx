'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-3 border-b shadow-sm bg-black">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/apiki-logo.png" alt="Logo" width={150} height={64} />
                </Link>
            </div>
            <div className="flex-1"></div>
            <button className="md:hidden">
                <Menu className="w-6 h-6 text-amber-300" />
            </button>
        </header>
    );
}
