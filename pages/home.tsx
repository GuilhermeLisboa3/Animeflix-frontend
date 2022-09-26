import Head from "next/head";
import { FeaturedSection } from "../src/components/homeAuth/featuresSection";
import { NewestCategory } from "../src/components/homeAuth/newestCategory";

const HomeAuth = () => {
  return (
    <>
      <Head>
        <title>Animeflix - Home</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
       <FeaturedSection/>
       <NewestCategory/>
      </main>
    </>
  );
};

export default HomeAuth;
