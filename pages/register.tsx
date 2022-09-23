import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { HeaderGeneric } from "../src/components/common/headerGeneric";

const Register = () => {
  return (
    <>
      <Head>
        <title>Animeflix - Registro</title>
        <link rel="shortcut icon" href="/buttonPlay.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero fazer login"
        />
      </main>
    </>
  );
};

export default Register;
