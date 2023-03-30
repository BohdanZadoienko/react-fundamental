import "./styles/styles-global.css"
import { useState, useMemo } from "react";
import PostList from "./components/UI/PostItem/PostList";
import PostForm from "./components/UI/PostItem/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/Input";

function App() {

  const [posts, setPosts] = useState([

    { id: 1, title: 'Neonila Makedonska', body: 'Miss Universe 2023' },
    { id: 2, title: 'C++', body: 'Description' },
    { id: 3, title: 'C#', body: 'Description' },
    { id: 4, title: 'Python', body: 'Description' },
    { id: 5, title: 'TypeScript', body: 'Description' },

  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('working')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;

  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery)) 
  }, [searchQuery, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} ></hr>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search..."

        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            { value: 'title', name: 'By Name' },
            { value: 'body', name: 'By Description' },
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Top Celebrities 2023" />
        :
        <h1
          style={{ textAlign: 'center' }}>
          Posts not found
        </h1>
      }

    </div>
  );
};

export default App;
