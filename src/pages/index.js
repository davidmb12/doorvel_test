import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {ChildElementsBox} from '@/components/ChildElementsBox'
import { useState } from 'react'
import { VerticalTabs } from '@/components/VerticalTabs'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {

 
  return (
    <>
      <Head>
        <title>Doorvel Test</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <VerticalTabs></VerticalTabs>
      </main>
    </>
  )
}
