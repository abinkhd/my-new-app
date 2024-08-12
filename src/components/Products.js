import React, { useEffect, useState } from 'react'
import CardData from './NewCards/common/CardData';
import axios from 'axios';

const Products = () => {
    const [products,setProducts]=useState([])
    async function fetch(){
        try{
            const response= await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data)
     }
     catch(error){
         console.log(error)
     }
    }

    useEffect(()=>{
        fetch();
    },[])
  return (
    <CardData data={products}/>
  )
}

export default Products