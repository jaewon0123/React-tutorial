import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Axios_Ex2 = () => {

    const [comments, setData] = useState(null);

    useEffect  (() => {
        //axios.get("https://localhost:8081/마이페이지/회원정보")
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setData(res.comments);
        })

        .catch(() => {
            alert("데이터를 불러오는데 실패했습니다.");
        })

    }, []);
    return (
        <>
        <h1>Axios 예제 2번</h1>
        <ul>
        {comments.map(comment => (
            <li key={comment.id}>
                <strong>UserID : </strong>{comment.id} <br/>
                <strong>Name : </strong>{comment.name} <br/>
                <strong>Email : </strong>{comment.email} <br/>
                <strong>Body : </strong>{comment.body} <br/>
            </li>
        ))}
        </ul>
        </>
    )
}
export default Axios_Ex2;