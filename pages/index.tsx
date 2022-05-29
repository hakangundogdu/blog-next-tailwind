import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Post from '../components/Post'
import Banner from '../components/Banner'

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    props: { data },
  }
}

const Home: NextPage = ({ data }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-8 flex w-full flex-1 flex-col items-center px-20 text-center">
        <h1 className="bg-gradient-to-r from-teal-400 to-cyan-500  bg-clip-text py-2 text-6xl font-bold text-transparent">
          Blog Page
        </h1>
        <div className="mt-8 flex flex-col items-center ">
          {data.map((post) => {
            const { id, userId, title, body } = post
            return id % 3 == 0 ? (
              <>
                <Post key={id} userId={userId} title={title} body={body} />
                <Banner />
              </>
            ) : (
              <Post key={id} userId={userId} title={title} body={body} />
            )
          })}
        </div>
      </main>

      <footer className="flex h-12 w-full items-center justify-center border-t">
        <a
          className="text-base  "
          href="https://github.com/hakangundogdu"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Hakan Gundogdu
        </a>
      </footer>
    </div>
  )
}

export default Home
