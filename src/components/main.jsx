import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import KeepMain from "./KeepMain";
import Emogi from "./Emogi";

function Main(){
    return (
        <Router>
        <Routes>
            <Route path="*" element={<App/>}/>
            <Route exact path='/' element={<KeepMain/>}></Route>
            <Route exact path='/contacts' element={<Contact/>}></Route>
            <Route exact path='/emogi' element={<Emogi/>}></Route>
        </Routes>
        </Router>
    )
}

export default Main