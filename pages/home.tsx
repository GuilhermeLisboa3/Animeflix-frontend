import Head from "next/head";
import { Footer } from "../src/components/common/footer";
import { FavoriteCategory } from "../src/components/homeAuth/favoriteCategory";
import { FeaturedCategory } from "../src/components/homeAuth/featuredCategory";
import { FeaturedSection } from "../src/components/homeAuth/featuresSection";
import { ListCategories } from "../src/components/homeAuth/listCategory";
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
       <FavoriteCategory/>
       <NewestCategory/>
       <FeaturedCategory/>
       <ListCategories/>
       <Footer/>
      </main>
    </>
  );
};

export default HomeAuth;
