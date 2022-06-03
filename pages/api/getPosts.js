import { useEffect, useState } from 'react'
import axios from 'axios'

export default function getPosts(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts',
      params: { _page: pageNumber },
    })
      .then((res) => {
        setPosts((prevPosts) => {
          return [...prevPosts, ...res.data]
        })
        setHasMore(res.data.length > 0)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
      })
  }, [pageNumber])

  return { loading, posts, hasMore, error }
}
