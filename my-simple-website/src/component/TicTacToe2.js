import React, {useState} from "react";

const 숫자섞기 = (숫자) => {

    return 숫자.sort(() => Math.random() - 0.5);
}

const TicTacToe2 = () => {

    const [numbers, setNumbers] = useState(
        숫자섞기([...Array(20).keys()].map((n) => n + 1))
    );
    

    const [nextNumber, setNextNumber] = useState(1);

    const [message, setMessage] = useState("");

    const 숫자클릭 = (number) => {
        if (number === nextNumber) {
            if (number === 20) {
                setMessage("성공입니다. 모든 숫자를 클릭하셨습니다.");
                //숫자를 2
            } else {
                setNextNumber(nextNumber + 1);
            }
        } else {
            setMessage("틀렸습니다. 다시시작해주세요.");
        }
    }
    const 재시작버튼 = () => {
        setNumbers(숫자섞기([...Array(20).keys()].map((n) => n + 1)));
        setMessage("");
        setNextNumber(1);
    }
    return (
        <div className="tictaptoe-container">
          <h1>틱탭토</h1>
          <div className="tictaptoe-two-grid">
            {numbers.map((number) => (
              <button className="tictaptoe-button" key={number} onClick={() => 숫자클릭(number)}>
                {number}
              </button>
            ))}
          </div>
          <p>{message}</p>
          {/* 예를들어 수를 모두 맞추면 처음으로 이동하기 */}
          <button className="restart-button" onClick={재시작버튼}>게임 재시작</button>
        </div>
      );
    };

export default TicTacToe2;