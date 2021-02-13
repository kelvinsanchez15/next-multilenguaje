import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export async function getStaticProps({ locale }) {
  const res = await import(`../locales/${locale}.json`);

  return {
    props: {
      t: res.default,
    },
  };
}

export default function Home({ t }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{t.meta.titulo}</title>
      </Head>

      <div className={styles.contenedor}>
        <header>
          <nav className={styles.navbar}>
            <div className={styles.logo}>ACME</div>
            <a href="#" className={styles.navbarLink}>
              {t.navbar.inicio}
            </a>
            <a href="#" className={styles.navbarLink}>
              {t.navbar.precios}
            </a>
            <a href="#" className={styles.navbarLink}>
              {t.navbar.contacto}
            </a>
            <a href="#" className={styles.navbarLink}>
              {t.navbar.blog}
            </a>
          </nav>
        </header>

        <main className={styles.main}>
          <h1>{t.hero.titulo}</h1>

          <p className={styles.descripcion}>{t.hero.parrafo}</p>

          <button>{t.hero.boton}</button>
        </main>
      </div>
    </>
  );
}
