import { db } from './firebase';
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import './Home.css'

function AddNameForm() {
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "teacher"), {
        name: name,    
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="students-card">
      <form onSubmit={handleSubmit} className="form-tag">
        <h1 className='title'>Enter your number</h1>
        <input placeholder='Enter Roll Number' type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <button className='btn' type="submit"><a href='https://finalyrproject.netlify.app/'>Submit</a></button>
      </form>
    </div>
  );
}

export default AddNameForm