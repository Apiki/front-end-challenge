
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import UserCard from '@/components/UserCard/UserCard';
import { fetchPostBySlug } from '@/services/api';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await fetchPostBySlug(params.slug);
    if (!post) return notFound();

    return (
        <>
            <Header />
            <article className="max-w-4xl mx-auto p-4 md:p-6">
                <Image
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    width={800}
                    height={400}
                    className="w-full rounded-lg mb-6"
                />

                <h1
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    className="text-2xl lg:text-4xl font-extrabold leading-tight mb-6 text-gray-900 text-left"
                />

                <UserCard
                    slug={post.slug}
                    name={post._embedded['author'][0].name}
                    avatarUrl={post._embedded['author'][0].avatar_urls[96]}
                    date={post.date}
                />

                <div
                    className="post-body prose prose-base md:prose-lg max-w-none text-gray-800 leading-7"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
            </article>
            <Footer />
        </>
    );
}
