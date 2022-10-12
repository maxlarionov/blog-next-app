import Head from 'next/head'
import Link from 'next/link'
import A from '../components/A'
import MainContainer from '../components/MainContainer'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <MainContainer title={'Main - Blog IT'}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </MainContainer>
  )
}
