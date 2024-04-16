import React from 'react'

const Languages = () => {
    let lang=["java","javascript","Kotlin","Python","c"];
  return (
    <div>
        <h1>Best Programming Languages</h1>
        <ul>
            {lang.map((item,index)=>(
              <li key={index}>{item}</li>
            ))}
        </ul>

    </div>
  )
  
}

export default Languages