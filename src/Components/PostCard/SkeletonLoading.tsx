import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useBlogData } from '../../Contexts/BlogContext';

export function SkeletonLoading() {

    const { blogData } = useBlogData()

    return (
        <>
            {
                blogData && blogData.map((post, index) => (
                    <div key={index}>
                        <Skeleton height={224} width={384} count={1} borderRadius={12} />
                        <Skeleton className="skeleton-h" height={28} width={384} count={1} />
                        <Skeleton className="skeleton-p" height={16} width={384} count={5} />
                    </div>
                ))
            }
        </>
    )
}
