import "../styles/global.scss"
import styles from "../styles/app.module.scss"

import Header from "../components/Header"
import Footer from "../components/Footer"

const MyApp = ({ Component, pageProps }) => {
  return (
    <main className={styles.container}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
