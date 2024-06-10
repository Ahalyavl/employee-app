import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ViewEmployee from './components/ViewEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import SearchEmployee from './components/SearchEmployee';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div >
      
     <BrowserRouter>
     <Routes>
     <Route path='/' element ={<AddEmployee/>}/>
      <Route path='/search' element ={<SearchEmployee/>}/>
      <Route path='/delete' element ={<DeleteEmployee/>}/>
      <Route path='/ViewEmployee' element ={<ViewEmployee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
