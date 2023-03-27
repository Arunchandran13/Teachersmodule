import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteField, updateDoc, deleteDoc } from "firebase/firestore"
import {db} from "./firebase"
import './App.css'

function NameList() {

  const [names, setNames] = useState([])

  const fetchNames = async() => {
    await getDocs(collection(db, "students")).then((result) => {
      const newData = result.docs
      .map((doc) => ({...doc.data(), id:doc.id }));
        setNames(newData);                
        console.log(names, newData);
    })
  }

  const deleteEntries = async() => {
    await deleteField(collection(db, "students", "name")).then((result) => {
      console.log(result)
    })
  }

  useEffect(() => {
    fetchNames()
  }, [])

  return (
    <div className="students-card">
      <div className='card'>
        <h3 className="title">Completed Students</h3>
        {names.map((name) => (
          <p className="names">{name.name}</p>
        ))}
      </div>
      <div>
        <button className='btn' onClick={deleteEntries}>Delete</button>
      </div>
    </div>
  )
}

export default NameList