import './App.css';
import {useState} from 'react';
function App() {

  // 초기 변수 users 가 아무런 유저 목록을 담고 있지 않기 때문에 users = []; 빈 배열로 설정
  const [users, setUsers] = useState([]); 
  const [name, setName] = useState('');
  // 모두 초기값이 아무것도 없는 상태
  // useState(''); useState(""); useState(null);
  
  // 빈 배열인 상태 useState([]); = 목록이 비어있음

  /*
1번
  const 기능 = () => {
      return 리턴값; // return 구문이 필수가 아니고, 작성할 수 있다는 의미
    }
2번
  const 기능 = () => (
      //return 없음
    )

  ========================
1번
  const 인사기능 = () => {
      const 인사메세지 = "안녕하세요.";

      return 인사메세지;
    }
      <p> {인사기능} </p>
2번
  const 인사기능 = () => (
      alert("좋은아침입니다~!");
    )
  */
  const addbutton = () => {
    setUsers([...users, name]); // ...기존유저목록 , 사용자가 입력한 이름
    setName('');
  }

  // filter = 배열에서 결과가 true 값만 반환

  const deletebutton = (index) => {
    //users에 있는 유저 목록 user = 유저명, i = users에 있는 유저가 저장된 번호
    const deleteUserList = users.filter((user, i) => i !== index)

    /*
    const deleteUserList = users.filter((user, i) => i !== index)
    위 삭제 후 유저목록 기능은 삭제하기를 선택한 번호 1개만 삭제

    const deleteUserList = users.filter((user, i) => i === index)
    위 삭제 후 유저목록 기능은 삭제하기를 선택한 번호 이외 모든 번호 지우기
    */

    /*
    users.filter((user,         i) => i !== index)
    유저목록들  (유저명,각 유저가 가입한 번호) => 배열에 저장된번호 같지 않은 유저번호만 삭제할려고 누른 번호가
    유저 목록에 넣어주겠다.
    */

    setUsers(deleteUserList); //유저목록 교체하기
  }
  return (
    <div className="App">
      <h1>유저 리스트</h1>
      <h3>유저 추가하기</h3>
      <input type='text' 
      value={name} 
      onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addbutton}>추가하기</button>
      <h3>유저 리스트 목록보기</h3>
      <pre><li>인덱스 - 유저명</li></pre>
      {users.map((user, index) => (
        <li key={index}>{index} - {user}
        <button onClick={() => deletebutton(index)}>삭제하기</button>
        </li>
      ))}
    </div>
  );
}

export default App;
