import axios from "axios";
import React, {  useState } from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [title , setTitle]=useState('')
    const [author , setAuthor]=useState('')
    const navigate = useNavigate()

    const titleHandler = (e) =>{
        setTitle(e.target.value)
    }

    const authorHandler  = (e) =>{
        setAuthor(e.target.value)
    }

   const sumbitHandler  = () =>{
        axios.post('http://localhost:3005/posts',{
            title,author
        }).then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        setTitle('')
        setAuthor('')
        navigate('/read')
   }
  

  return (
    <div className="container p-2">
      <div className="form-floating m-2">
        <input type="text" value={title} onChange={titleHandler} className="form-control" />
        <label htmlFor="floatingPassword">Title</label>
      </div>
      <div className="form-floating m-2">
        <input type="text" value={author} onChange={authorHandler} className="form-control" />
        <label htmlFor="floatingPassword">Author</label>
      </div>
      <button type="button " onClick={sumbitHandler} className="btn btn-warning">Add Data</button>
    </div>
  );
};

export default Create;
