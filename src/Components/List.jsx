import React, { useEffect, useState } from 'react'
import "./list.css"

const List = () => {
  const [list, setList] = useState([]);
  const [meaning, setMeaning] = useState('')
const [malumot, setMalumot] = useState([])


  const create = (e) => {
    setMeaning(e.target.value)
  }

  const qosh = () => {
    let yangiText = { id: list.length + 1, title: meaning }
    setList([yangiText, ...list])
    setMeaning('')
  }


  const del = (Caught) => {
    let nowData = list.filter((value) => value.id !== Caught)
    setList(nowData)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setList(data))
  }, [])


  return (
    <div className='list'>
      <div className="header">
        <h1>To-Do List</h1>
      </div>

      <input onChange={create} type="text" placeholder='yarat' value={meaning} />
      <button className='btn' onClick={qosh}>create</button>


      {
        list.map((value, index) => {
          return (
            <div className='card' key={value.id}>
              <h3>{index + 1}</h3>
              <h3 >{value.title}</h3>
              <button onClick={() => del(value.id)}>Delete</button>
            </div>
          )
        })
      }



    </div>
  )
}

export default List