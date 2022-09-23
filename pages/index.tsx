import { GetStaticProps } from "next";
import Head from "next/head";
import DescriptionSection from "../src/components/homeNoAuth/descriptionSection";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import { SlideSection } from "../src/components/homeNoAuth/slideSection";
import animeService, { AnimeType } from "../src/services/animesService";
import styles from "../styles/HomeNoAuth.module.scss";
import {ReactNode, useEffect} from 'react'
import { Footer } from "../src/components/common/footer";
import { CompatibleDevices } from "../src/components/homeNoAuth/compatibleDevices";
import AOS from 'aos'
import "aos/dist/aos.css"

interface IndexPageProps {
  chrildren?: ReactNode
  anime: AnimeType[]
}

const HomeNoAuth = ({anime}:IndexPageProps) => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>
      <Head>
          <title>Animeflix</title>
          <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
          <meta property="og:title" content="Animeflix" key="title"/>
          <meta name="description" content="Tenha acesso aos melhores conteúdos de anime de uma forma simples e fácil"/>
      </Head>
      <main>
          <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
            <HeaderNoAuth/>
            <PresentationSection/>
          </div>
          <div data-aos="fade-right" data-aos-duration="1200">
            <DescriptionSection/>
          </div>
          <div data-aos="fade-up" data-aos-duration="1350">
            <SlideSection newestAnimes={anime}/>
          </div>
          <div data-aos="fade-down" data-aos-duration="1200">
            <CompatibleDevices />
          </div>
          <Footer/>
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
