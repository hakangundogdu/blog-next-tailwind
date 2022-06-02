import { useEffect, useState } from 'react'
import axios from 'axios'

export default function getPosts(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts',
      params: { _page: pageNumber },
    }).then((res) => {
      setPosts((prevPosts) => {
        return [...prevPosts, ...res.data]
      })
      setLoading(false)
    })
  }, [pageNumber])

  return { loading, posts }
}
