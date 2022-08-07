import axios from "axios";
import Image from "next/image";
// import { useRouter } from "next/router";

const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed";

export const Post = ({ title, content, imageURL, imageHeight, imageWidth }) => {
  return (
    <main>
      <h2>{title}</h2>
      <Image width={imageWidth} height={imageHeight} src={imageURL} />

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
};

export const getServerSideProps = async (ctx) => {
  const { data: postData } = await axios.get(url, {
    params: { slug: ctx.query.slug },
  });
  const post = postData;
  return {
    props: {
      // @TODO: DRY
      title: post[0].title.rendered,
      content: post[0].content.rendered,
      imageURL: post[0]._embedded["wp:featuredmedia"]?.[0]?.source_url ?? "",
      imageWidth:
        post[0]._embedded["wp:featuredmedia"]?.[0]?.media_details?.width ?? "",
      imageHeight:
        post[0]._embedded["wp:featuredmedia"]?.[0]?.media_details?.height ?? "",
    },
  };
};

// export const getStaticPaths = async () => {
//   const router = useRouter();
//   const slug = router.query.slug as string;
//   const { data: post } = await axios.get(url, { params: { slug } });

//   return {
//     paths: [{ params: { slug: post[0].slug } }],
//     fallback: true,
//   };
// };

export default Post;
