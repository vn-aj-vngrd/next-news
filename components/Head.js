import NextHead from "next/head";

const Head = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="News" />
    </NextHead>
  );
};

export default Head;
