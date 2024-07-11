import React,{useEffect, useRef} from 'react';

/*
만약에 export default를 컴포넌트에 한 번에 작성하길 원한다면

const로 컴포넌트가 시작하는 경우
export const 컴포넌트명 = () => {
    }

function으로 컴포넌트가 시작하는 경우
export default function 컴포넌트명 {
}
*/
export const RefEx = () => {

    const pwRef = useRef(null);

    useEffect(() => {
        if (useRef.current) {
            pwRef.current.focus();
        }
    }, []);



    return (
        <>
        <form method='post'>
        <label>이름</label>
        <input type='text' placeholder='이름을 입력해주세요.'/>

        <label>비밀번호</label>
        <input type='password' ref={pwRef} 
        placeholder='비밀번호를 입력해주세요.'/>
        </form>
        </>
    )
}

export default RefEx;