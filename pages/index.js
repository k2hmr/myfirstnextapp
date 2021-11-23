import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/header'
import Content from './components/content'
import useSWR from 'swr'

export default function Home() {
  let title = 'ともすた'
  const {data, error} = useSWR('/api/message')
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <Header title={ title } />
    <Content>
      <p>{data.message}</p>
    </Content>
    </>
  )
}
