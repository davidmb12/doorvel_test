import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { VerticalTabs } from '@/components/VerticalTabs'
import { createContext, useEffect, useState } from 'react'
import { fetchDataChild, fetchDataParent } from '@/helpers/fetchData'


export const DataContext = createContext({})


export default function Home() {
  const [parentData,setParentData] = useState([]);
  const [childData,setChildData] = useState([]);
  useEffect(() => {
    fetchDataParent(setParentData);  
    fetchDataChild(setChildData);
  }, [])
  
  
  return (
    <DataContext.Provider value={{parentData:parentData,childData:[childData,setChildData]}}>
      <Head>
        <title>Doorvel Test</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <VerticalTabs></VerticalTabs>
      </main>
    </DataContext.Provider>
  )
}
