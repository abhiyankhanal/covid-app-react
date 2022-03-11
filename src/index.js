import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/Menu';
import CovidData from './components/CovidData';
import reportWebVitals from './reportWebVitals';
import About from './components/About';

export default function App() {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
    
    <Route index element={<CovidData />} />
    <Route path="/about" element={<About />} /> 
    </Routes>
      
    </BrowserRouter>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
