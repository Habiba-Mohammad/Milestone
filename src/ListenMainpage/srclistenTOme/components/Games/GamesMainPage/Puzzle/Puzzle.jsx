import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Hero from '../../../Hero/Hero'
const Puzzle = () => {
const[name,setname]=useState()
const[posts,setPosts]=useState([])
useEffect(()=>{
axios.get('https://rickandmortyapi.com/api/character/108')
.then((response)=>{
    // console.log(response)
    setPosts(response.data)
},[])
.catch((error)=>{
    console.log(error)
})

})
  return (
<>
<input type="text" onChange={(e)=>{
    setname(e.target.value)
}}/>

</>  )
}

export default Puzzle