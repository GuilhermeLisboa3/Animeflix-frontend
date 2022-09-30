import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "../src/components/common/footer";
import { PageSpinner } from "../src/components/common/spinner";
import { FavoriteCategory } from "../src/components/homeAuth/favoriteCategory";
import { FeaturedCategory } from "../src/components/homeAuth/featuredCategory";
import { FeaturedSection } from "../src/components/homeAuth/featuresSection";
import { ListCategories } from "../src/components/homeAuth/listCategory";
import { NewestCategory } from "../src/components/homeAuth/newestCategory";
import { PopularAnime } from "../src/components/homeAuth/popularAnime";
import { WatchingTime } from "../src/components/homeAuth/watchingTime";

const HomeAuth = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(!sessionStorage.getItem("animeflix-token")){
      router.push("/login")
    }else{
      setLoading(false)
    }
  },[])

  if(loading){
    return <PageSpinner/>
  }
  return (
    <>
      <Head>
        <title>Animeflix - Home</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
       <FeaturedSection/>
       <WatchingTime/>
       <FavoriteCategory/>
       <PopularAnime/>
       <NewestCategory/>
       <FeaturedCategory/>
       <ListCategories/>
       <Footer/>
      </main>
    </>
  );
};

export default HomeAuth;
