import React from 'react'
import axios from 'axios/unsafe/axios.js';
import { useEffect } from 'react';


async function getProducts() {
        let res= await axios.get(`https://linked-posts.routemisr.com/posts?limit=50`)
        console.log(res);
        
    }
useEffect(()=>{  getProducts()}, [])

 
export default function Test() {
  return (

    <h1 className='bg-info'>test</h1>
    



    
  )
}
