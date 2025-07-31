import type { IPost } from "~types";

export const Seo = ({ meta }: Pick<IPost, "meta">) => (
    <>
        <title>{meta?._yoast_wpseo_title}</title>
        <meta
            name="description"
            content={meta?._yoast_wpseo_metadesc}
        />
        <meta
            property="og:title"
            content={meta?._yoast_wpseo_opengraph_title}
        />
        <meta
            property="og:description"
            content={meta?._yoast_wpseo_opengraph_description}
        />
        <meta
            property="og:image"
            content={meta?._yoast_wpseo_facebook_image}
        />
        <meta
            name="twitter:title"
            content={meta?._yoast_wpseo_twitter_title}
        />
        <meta
            name="twitter:description"
            content={meta?._yoast_wpseo_twitter_description}
        />
        <meta
            name="twitter:image"
            content={meta?._yoast_wpseo_twitter_image}
        />
    </>
);
