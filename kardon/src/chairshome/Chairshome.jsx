import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Chairshome.css'

function Chairshome() {
    let [db, setDb] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:5700/api/furniture/chairshome')
        .then(res=>{
          setDb(res.data);
        })
        .catch(err=>{
          console.log(err.message);
        })
    }, [db])
  return (
    <div className='chairshome'>
      {
       db && db.map(prod=>(
          <img src={prod.prodImg_url} alt="" className='chairshome-img' />
        ))
      }
    </div>
  )
}

export default Chairshome