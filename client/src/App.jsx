import React, {useEffect} from "react";
import {useDispatch} from 'react-redux'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css'
import { fetchUser } from "./utilities/slices/authSlice";




const Landing =() => <h4>Landing</h4>
const Marketing =() => <h4>Marketing</h4>
const Dashboard =() => <h4>Dashboard</h4>

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  })
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element= {<Landing/> }></Route>
            <Route path="/Marketing" element= {<Marketing/> }/>
            <Route path="/Surveys" element= {<Dashboard/> }/>
        </Routes>
        
    </div>
  )
};

export default App;
