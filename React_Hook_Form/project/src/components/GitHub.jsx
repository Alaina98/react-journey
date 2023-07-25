import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';

export default function GitHub() {
    const {register,handleSubmit}=useForm();
    const [githubuser,setGithubuser] = useState([])
  return (
        <>
            <form className='form-group'onSubmit={handleSubmit(getAccount)}>
                <input type='text' {...register("username")}/>
                <input type='submit' value='send' />
            </form>
            <img src={githubuser.avatar_url} />
            <h1>{githubuser.name}</h1>
            <h2>{githubuser.bio}</h2>
        </>
  )
  function getAccount(data)
  {
    axios.get(`https://api.github.com/users/${data.username}`).then((res)=>{
        console.log(res.data)
        setGithubuser(res.data)

    })
    
  }
}
