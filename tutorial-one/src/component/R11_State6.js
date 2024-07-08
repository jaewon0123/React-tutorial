import React, {useState} from "react";

const 댓글내용 = (props) => {

    const {handler} = props;

    return (
        <>
            <label>댓글내용</label>
            <input type="text" id="inputComment" onChange={handler}/>
        </>
    )
}

const 작성자 = ({handler}) => {

    return (
        <>
            <label>작성자</label>
            <input type="text" id="inputWriter" onChange={handler}/>
        </>
    )
}

const 댓글창 = () => {
    //상태 변수 선언
    const [comment, setComment] = useState(''); // '' 나 아무것도 안써도 됨
    const [writer, setWriter] = useState('');


    const 댓글값조종 = (e) => {
        setComment(e.target.value)
    }
    
    const 작성자값조종 = (e) => {
        setWriter(e.target.value)
    }
    return (
        <>
            {/* 댓글 입력 창과 댓글작성자창 보여주고
                댓글과 댓글작성자가 모두 안적혀있으면 버튼 비활성화
                모두 적혀있으면 버튼 활성화
            */}
            <댓글값 handler = {댓글값조종}/>
            <작성자값 handler = {작성자값조종}/>

            <div className="Commentboard">

            <label>작성자</label>
            <input type="text" id="inputWriter" onChange={handler}/>

            <label>댓글내용</label>
            <input type="text" id="inputComment" onChange={handler}/>

            <button disabled={comment.length === 0 || writer.length === 0}></button>
            </div>
        </>
    )
}

export default 댓글창;