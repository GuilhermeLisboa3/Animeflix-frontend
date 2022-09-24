import Head from "next/head";
import { FeaturedSection } from "../src/components/homeAuth/featuresSection";

const HomeAuth = () => {
  return (
    <>
      <Head>
        <title>Animeflix - Home</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
       <FeaturedSection/>
      </main>
    </>
  );
};

export default HomeAuth;
