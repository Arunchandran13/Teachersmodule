import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import AddNameForm from './AddNameForm';;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddNameForm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
