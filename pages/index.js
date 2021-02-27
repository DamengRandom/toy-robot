import Head from 'next/head';
// css
import styles from '../styles/Home.module.css';
// constants
import { appTitle } from '../constants';
// components
import Layout from '../components/templates/Layout';
import Footer from '../components/atoms/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toy Robot Movement Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className="app-name title">{appTitle}</h2>
        <Layout />
      </main>

      <Footer id="dashboardFooter" classes={styles.footer}>
        Developed by ~ 
        <a
          href="https://github.com/DamengRandom"
          target="_blank"
          rel="noopener noreferrer"
        >
          DamengRandom
        </a>
      </Footer>
    </div>
  );
};
