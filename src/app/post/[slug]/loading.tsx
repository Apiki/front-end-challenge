'use client';

import Header from '@/components/Header/Header';
import LoadingSpinner from '@/components/Loading/LoadingSpinner';

export default function Loading() {
    return (
        <>
            <Header />
            <main className="px-4 py-8 max-w-4xl mx-auto">
                <LoadingSpinner />
            </main>
        </>
    );
}
