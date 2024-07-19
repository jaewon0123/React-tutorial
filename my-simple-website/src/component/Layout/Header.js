import React from "react";
// return 안에 html을 작성하지 않으면 화면에 돌려보낼 html 코드가 없기 때문에
// 화면에서 보이지 않음
const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT로 포트폴리오 만들기</h1>
      </header>
    </div>
  );
};
export default Header;
