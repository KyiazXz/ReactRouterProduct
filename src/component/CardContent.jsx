import React from 'react';
import { useState,useEffect } from 'react';
import { useParams} from 'react-router-dom';
import Loading from './Loading'
import "./cardContent.css"
export default function CardContent() {
    let {name} = useParams();
    const [data , setData] = useState ([ ])
    const [loading , setLoading] = useState (false)

    const fetchedData = async () => {
        setLoading (true)
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

const myData = data.filter((el)=> el.firstName===name)

console.log(myData)
if (loading){
    return (
        <main>
            <Loading />
        </main>
    )
}

  return (
<div>
        {myData.map((item)=>{
            return (
            <div className='main' key={item.id}>
                <div><img src={item.image} alt={item.firstName}/></div>
                
                  <div>
                    <h3>Name : {item.firstName}</h3>
                    <h3>Number : {item.phone}</h3>
                    <h3>university : {item.university}</h3>
                  </div>
                    
             
            </div>
            
            )
        })}
</div>
  )
    
}
