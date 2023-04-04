import "./styles/styles-global.css"
import { useState, useMemo } from "react";
import PostList from "./components/UI/PostItem/PostList";
import PostForm from "./components/UI/PostItem/PostForm";
import PostFilter from "./components/UI/PostItem/Postfilter";

function App() {

  const [posts, setPosts] = useState([

    { id: 1, title: 'JavsScript', body: 'JS' },
    { id: 2, title: 'C++', body: 'C plus plus' },
    { id: 3, title: 'C#', body: 'C sharp' },
    { id: 4, title: 'Python', body: 'Anakonda' },
    { id: 5, title: 'TypeScript', body: 'TS' },

  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    console.log('working')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} ></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="List of PL 2023 " />
    </div>
  );
};

export default App;
