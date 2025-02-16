import React from 'react'

export default async function UserList() {

    const res  = await fetch('https://dummyjson.com/users');
    const data = await res.json();

    console.log('redering userlist');
    
  return (
    <>
       {data.users.map(({firstName,age,gender})=>{
        return <div key={firstName}>
            <h3>{firstName}</h3>
            <p>Age : {age}</p>
            <p>Gender : {gender}</p>
        </div>
       })}
    </>
  )
}
