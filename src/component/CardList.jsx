import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import './cardList.css'
export default function CardList() {
    const [data , setData] = useState ([ ])
    const [loading , setLoading] = useState (false)

    const fetchedData = async () => {
        
        const res = await fetch ('https://dummyjson.com/users/');
        const json = await res.json () ;
        setData(json.users)	  
    }

useEffect (()=>{
    setLoading(true)
    setTimeout(() => {
        setLoading(false);
      }, 1000);
    fetchedData ()
} , [ ] )

if (loading){
    return (
        <main>
            <Loading />
        </main>
    )
}

  return (
    <main>
    {data.map ((el)=>{
return (
    <div className='card' key={el.id}>
    <Link to={`/${el.firstName}`}>

       <div> <img src={el.image} alt={el.firstName}/> </div>
        <div ><h3>{el.firstName}</h3> <h3>{el.lastName}</h3></div>
        <div><p>{el.phone}</p></div>
         
    </Link>
    </div>
)
    })}
    </main>
  )
}
