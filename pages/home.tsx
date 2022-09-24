import Head from "next/head";
import { HeaderAuth } from "../src/components/common/headerAuth";

const HomeAuth = () => {
  return (
    <>
      <Head>
        <title>Animeflix - Home</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
       <HeaderAuth/>
      </main>
    </>
  );
};

export default HomeAuth;
