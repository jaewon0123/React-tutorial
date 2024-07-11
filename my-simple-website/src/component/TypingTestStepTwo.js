import React, {useState} from "react";

const 타자대회2 = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(false);

    const TypingQ = "";

    const 값변경 = (e) => {
        setText(e.target.value);

        if (e.target.value === TypingQ) {
            setResult(true);
        }
    }
    const Restart = () => {
        setResult(false);
        setText('');
    }
    return (
        <div className="typing-test">
            <h1>타자대회 2</h1>
            <p>두 번 째 문제 : {TypingQ}</p>
            <div className="typing-container">
                <img src="/hancom.jpg" className="character-image"/>
                <textarea
                    value={text}
                    onChange={값변경}
                    disabled={결과확인}
                />
            </div>
            {결과확인 && <Result inputText={텍스트입력} correctText={타이핑문제}/> }
            {결과확인 && <button onClick={다시시작}>다시 시작하는버튼</button>}
        </div>
    )
}
export default 타자대회2;