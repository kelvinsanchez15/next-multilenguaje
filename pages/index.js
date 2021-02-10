import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Multilenguaje</title>
      </Head>

      <div className={styles.contenedor}>
        <header>
          <nav className={styles.navbar}>
            <div className={styles.logo}>ACME</div>
            <a href="#" className={styles.navbarLink}>
              Inicio
            </a>
            <a href="#" className={styles.navbarLink}>
              Precios
            </a>
            <a href="#" className={styles.navbarLink}>
              Contacto
            </a>
            <a href="#" className={styles.navbarLink}>
              Blog
            </a>
          </nav>
        </header>

        <main className={styles.main}>
          <h1>Bienvenido al sitio oficial de productos ACME</h1>

          <p className={styles.descripcion}>
            Acá encontrarás un catálogo de productos diseñados especialmente
            para ti.
          </p>

          <button>Registrate gratis</button>
        </main>
      </div>
    </>
  );
}
