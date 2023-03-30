import React, { useState } from "react";
import MyButton from "../button/Button"
import MyInput from "../input/Input"


const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }


    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Post Name" />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Post Description" />
                <MyButton onClick={addNewPost}> Create </MyButton>


            </form>
        </div>
    )
};

export default PostForm;