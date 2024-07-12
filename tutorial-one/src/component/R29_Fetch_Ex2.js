import React, { useEffect, useState } from "react";
import 패치예제 from "./R28_Fetch_ex";

const 사진리스트 = () => {

    const [사진들, set사진들] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            return res.json();
        })
        .then(데이터 => {
            //set사진들(데이터); api 주소에 작성된 모든 데이터 가져오기
            // 데이터의 일부분만 가져오길 원한다면 slice를 이용
            // slice(처음 가져올 범위,어디까지 가져올지 마무리하는 마무리범위) 
            set사진들(데이터.slice(0,10));//데이터 처음 ~ 10개 사진만 가져오기
        })
        .catch(에러 => {
            alert("정보를 불러오는데 실패했습니다." + 에러);
        })
    }, [])

    return (
        <>
        <h1>사진리스트</h1>
        
        <ul>
            {사진들.map(사진 => (
                <li key={사진.id}>
                    <img src={사진.thumbnailUrl}/>
                    <p>{사진.title}</p>
                </li>
            ))}    
        </ul>
        
        </>
    )
}

export default 사진리스트;
//export default를 맨 위에 작성하면 에러가 발생하기 때문에 맨 밑에 작성