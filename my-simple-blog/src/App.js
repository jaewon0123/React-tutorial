import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header.js";
import NavBar from "./component/NavBar.js";
import Main from "./component/Main.js";


function App() {
  return (
    <div>
      <Header className="App-header"/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
