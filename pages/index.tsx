import { GetStaticProps } from "next";
import Head from "next/head";
import CompatibleSection from "../src/components/homeNoAuth/compatibleSection";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import { SlideSection } from "../src/components/homeNoAuth/slideSection";
import animeService, { AnimeType } from "../src/services/animesService";
import styles from "../styles/HomeNoAuth.module.scss";
import {ReactNode} from 'react'

interface IndexPageProps {
  chrildren?: ReactNode
  anime: AnimeType[]
}

const HomeNoAuth = ({anime}:IndexPageProps) => {
  return (
    <>
      <Head>
          <title>Animeflix</title>
          <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
          <meta property="og:title" content="Animeflix" key="title"/>
          <meta name="description" content="Tenha acesso aos melhores conteúdos de anime de uma forma simples e fácil"/>
      </Head>
      <main>
          <div className={styles.sectionBackground}>
            <HeaderNoAuth/>
            <PresentationSection/>
          </div>
          <CompatibleSection/>
          <SlideSection newestAnimes={anime}/>
      </main>
    </>
  );
};

export const getStaticProps:GetStaticProps = async()=>{
  const res = await animeService.getNewestAnimes();
  return {
    props:{
      anime: res.data
    },
    revalidate: 3600 * 24
  }
}

export default HomeNoAuth;
