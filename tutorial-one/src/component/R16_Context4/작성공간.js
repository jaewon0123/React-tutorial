import React, {useState, useContext} from "react";

import 유저정보전달 from "./유저정보모두저장.js";

// input 타입을 만들고 저장하는 버튼을 생성
const 작성하는공간 = () => {

    const {userList, setUserList} = useContext(유저정보전달);

    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    const 유저추가 = () => {

        const user = ( "inputName" : inputName , "inputPhone" : inputPhone );

        const newUser = [...userList, user];
        setUserList(newUser);

        return (
        <div>
            <label htmlFor="inputName">이름</label>
            <input type="text" id="inputName" onChange={setInputName}/>

            <label htmlFor="inputPhone">전화번호</label>
            <input type="text" id="inputPhone" onChange={setInputPhone}/>

            <button onClick={유저추가}>등록하기</button>
        </div>
        )
    }
}

export default 작성하는공간;