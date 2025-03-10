import React, {createContext} from "react";

// 로그인을 한 다음에 로그인한 정보를 모든 창에 띄워주기
// App.js에서 <div> 태그 대신에 <LoginContext> 태그로
// return 시작하자마자 감싸주면 <LoginContext> 태그 안에 있는
// 모든 태그에서는 로그인/로그아웃 한 정보가 공유됨
const LoginContext = createContext();

export default LoginContext;