import Head from "next/head";

type SEOProps = {
  pageTitle: string;
  pageDescription: string;
  siteName: string;
  title: string;
  description: string;
  image: string;
};

export function SEO({
  pageTitle,
  pageDescription,
  siteName,
  title,
  description,
  image,
}: SEOProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="768" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
