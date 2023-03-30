import React from "react";
import "./style-post.css"
import Counter from "../../UI/Counter/Counter.jsx"
import MyButton from "../button/Button";


const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post_content">
                <strong> {props.number}. {props.post.title} </strong>
                <div>
                    {props.post.body}
                    <Counter />
                </div>
            </div>
            <div className="post_btn">
                <MyButton onClick={()=> props.remove(props.post)}>Delete</MyButton>

            </div>
        </div>
    )
};

export default PostItem;