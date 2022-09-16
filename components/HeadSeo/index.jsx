import parse from "html-react-parser";
import Head from "next/head";
const HeadSeo = ({ props }) => {
  const link = parse(`${props}`);

  return (
    <>
      <Head>{link}</Head>
    </>
  );
};

export default HeadSeo;
