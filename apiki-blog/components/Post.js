import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { getDate } from '../utils/utils';

export default function Post({ post, featuredMedia, id }) {
    return (

        <div className="group relative bg-white p-4 rounded-lg self-start mb-4">
            <div className="relative w-full mt-6 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:h-48  shadow-md hover:brightness-50 transition ">
                <p className="card-text text-right absolute top-0 right-0 z-10 p-2 font-medium bg-white	rounded-bl-lg rounded-tr-lg">
                    {getDate(post.modified)}
                </p>
                <Link href={`/posts/${post.slug}`}>
                    <a>
                        <Image
                            src={featuredMedia['media_details'].sizes.large['source_url']}
                            width={featuredMedia['media_details'].sizes.medium_large['width']}
                            height={featuredMedia['media_details'].sizes.medium_large['height']}
                            alt={featuredMedia['alt_text']}
                        />

                    </a>
                </Link>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h2 className="text-2xl font-medium pb-4  h-20">{post.title.rendered} -- {post.id}</h2>
                    <div
                        className="card-text h-20"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    ></div>

                    <Link href={`/posts/${post.slug}`}>
                        <button
                            type="submit"
                            className="flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Ver post
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
}