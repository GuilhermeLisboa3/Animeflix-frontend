import Head from "next/head";
import { FavoriteCategory } from "../src/components/homeAuth/favoriteCategory";
import { FeaturedCategory } from "../src/components/homeAuth/featuredCategory";
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
       <FavoriteCategory/>
       <FeaturedCategory/>
      </main>
    </>
  );
};

export default HomeAuth;
