import React, {useState} from "react";

import React,{useState} from "react";
import 유저정보전달 from "./유저정보모두저장.js";
import 작성공간 from "./작성공간.js";


const 최종출력공간 = () => {
    const [userList, setUserList] = useState([]);

    return (
        <유저정보전달.Provider value={[userList, setUserList]}>

        <작성공간/>
        {/* 가입한 유저의 정보를 출력하기 */}
        <div>
            
        </div>

        </유저정보전달.Provider>
    )
}

export default 최종출력공간;