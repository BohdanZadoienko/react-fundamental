import React from "react";
import classes from "./Input.module.css"


const MyInput = (props) => {

    return (
        <input className={classes.Input} {...props}></input>
    )
};

export default MyInput;