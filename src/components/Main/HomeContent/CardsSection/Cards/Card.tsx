import { Timer } from "phosphor-react";
import { Link } from "react-router-dom";
import { ApikiLogoBg } from "../../../../../assets/ApikiLogoBg";
import { CardContent } from "../../../../../interfaces/interfaces";

export function Card({title, _embedded, yoast_head_json, slug}: CardContent) {
    return (
        <Link to={slug} className="h-max-[280px] flex flex-col bg-gray-800 rounded-lg border overflow-hidden mb-[50px] hover:border-orange-500 hover:scale-105">
            <img 
                loading="lazy"
                alt={slug && slug}
                src={_embedded && _embedded["wp:featuredmedia"] && _embedded["wp:featuredmedia"][0] && _embedded["wp:featuredmedia"][0].media_details && _embedded["wp:featuredmedia"][0].media_details.sizes && _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"] && _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"].source_url ? _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"].source_url : "https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/apiki-blog-institucional-blue-turquoise.png"}
                className="h-48 object-cover"
            />
            <div className="p-3 text-start h-full">
                <div className="h-3/4">
                    <h1 className="py-2 font-bold text-xl h-max-9 mb-4">
                        {title ? title.rendered : 'Título Indisponível'}
                    </h1>
                    <span className="text-gray-200 text-xs font-light">
                        {yoast_head_json.description && yoast_head_json.description}
                    </span>
                </div>
                <div className="flex items-end mt-4">
                    <img 
                        className="rounded-full border-4 border-blue-500 "
                        src={_embedded.author[0].name
                            ? _embedded.author[0].avatar_urls[96]
                            : "https://apiki-blog.vercel.app/assets/favicon.ec8db4ec.svg"
                            }
                        width={50}
                    />
                    <div className="w-full flex justify-between p-2 items-center">
                        <p className="flex flex-col">
                            <strong className="text-sm font-normal">
                                {_embedded.author[0].name ? _embedded.author[0].name : 'Apiki Blog'}
                            </strong>
                            <span className="text-xs font-ligt text-gray-200 flex">
                                <Timer size={16} color="#f57e14" weight="thin" />
                                {yoast_head_json.twitter_misc['Est. tempo de leitura'] && yoast_head_json.twitter_misc['Est. tempo de leitura']}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}