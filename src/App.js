import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar';
import countryCodes from "./CountryCodes";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() { 
  const [country, setCountry] = useState("in");
  const [progress, setProgress] = useState(0) ;
  let countries = [{"name": "India", "value":"in"}, {"name":"United States", "value": "us"},
   {"name": "France", "value":"fr"}];
   countries = countryCodes; 
  function handleCountryChange(value){
    console.log("country set to change");
  setCountry(value);
  }


  useEffect(()=>{
    console.log("country code is " + country);
    document.title = "Quick News";
  });

 
  return (
    <div>
      <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar countries={countries} handleCountryChange={handleCountryChange}/>
      <Switch>
        <Route exact path="/"> <News key={"general" + country} country={country} category="general" 
        setProgress={(value) => {setProgress(value)}} /> </Route> 
        <Route exact path="/business"> <News key={"business"+country} country={country} category="business" 
        setProgress={(value) => {setProgress(value)}} /> </Route>
        <Route exact path="/health"> <News key={"health"+country} country={country} category="health" 
        setProgress={(value) => {setProgress(value)}} /> </Route>
        <Route exact path="/science"> <News key={"science" + country} country={country} category="science" 
        setProgress={(value) => {setProgress(value)}} /> </Route>
        <Route exact path="/technology"> <News key={"technology"+ country} country={country} category="technology" 
        setProgress={(value) => {setProgress(value)}} /> </Route>
        <Route exact path="/sports"> <News key={"sports"+ country} country={country} category="sports" 
        setProgress={(value) => {setProgress(value)}} /> </Route>
        <Route exact path="/entertainment"> <News key={"entertainment" + country} country={country} 
        category="entertainment" 
        setProgress={(value) => {setProgress(value)}} /> </Route>        
      </Switch>      
      </Router>
    </div>
  );
  
}



/*










*/