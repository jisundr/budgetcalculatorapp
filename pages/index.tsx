import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Budget Calculator</title>
        <meta
          name="description"
          content="Your guide for managing your wealth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Budget Calculator</h1>

        <p className={styles.description}>
          Get started by pressing the start button
        </p>

        <Input type="text" />

        <Button color="primary" size="xlarge">
          Start
        </Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
