import { useEffect, useState, useRef, useCallback } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Post from '../components/Post'
import Banner from '../components/Banner'
import getPosts from './api/getPosts'

const Home = () => {
  // const [posts, setPosts] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  const { posts, loading } = getPosts(pageNumber)

  const observer = useRef()
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading]
  )

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
          {posts.map((post) => {
            const { id, userId, title, body, index } = post

            return (
              <div
                key={id}
                className="max-w-8xl container  mx-auto flex flex-col items-center"
              >
                <Post id={id} userId={userId} title={title} body={body} />
                {id % 3 == 0 ? <Banner /> : null}
              </div>
            )
          })}
        </div>
        <div ref={lastPostElementRef}>{!loading && 'Load More'}</div>
        <div className="mt-4 text-teal-400">{loading && 'Loading...'}</div>
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
