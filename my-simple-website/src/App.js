import logo from "./logo.svg";
import "./App.css";
import Game from "./component/Game";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Layout/Header"
import NavBar from "./component/Layout/NavBar" // Can't resolve './component/NavBar' ===> 에러가 발생한 파일 위치 App.js에서 해당 파일 위치 찾을 수 없음 이라는 에러 발생
// in 'C:\Users\user1\react-workspace\my-simple-website\src'
import GameTwoStep from "./component/GameTwoStep";
import TodoList from "./component/TodoList";
import TicTapToe from "./component/TicTacToe/TicTacToe";
import TicTacToe2 from "./component/TicTacToe/TicTacToe2";
import TypingTest from "./component/TypingTest";
import MovieRating from "./component/Movie/MovieGrade";
import './css/TicTacToe.css';
import Footer from "./component/Layout/Footer";

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes> {/* 링크 모음 예전에는 Switch 라고 작성했지만 v6부터 Routes 이름 사용 */}
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/game-twoStep" element={<GameTwoStep/>}/>
        <Route path="/todoList" element={<TodoList/>}/>
        <Route path='/tictaptoe' element={<TicTapToe/>}/>
        <Route path="/ttt-twoStep" element={<TicTacToe2/>}/>
        <Route path="/typingTest" element={<TypingTest/>}/>
        <Route path="/movieRate" element={<MovieRating/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;