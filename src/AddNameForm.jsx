import { db } from './firebase';
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddNameForm