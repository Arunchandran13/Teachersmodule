import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import AddNameForm from './AddNameForm';import NameList from "./NameList";
;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddNameForm />}/>
        <Route path="/namelist" element={<NameList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
