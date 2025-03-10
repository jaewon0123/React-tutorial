const 페이지네이션 = () => {
    return (
      <>
        <h1>페이지네이션 종류</h1>
        <pre>
          페이지네이션 
          1. 기본 페이지네이션      
              1 2 3 4 5 6 7 8 9 10 11 12 13 
          2. 순차 페이지네이션 
              이전으로 10 11 12 13 14 15 다음으로 
          3. 더보기 페이지네이션 
              세로로 특정 내용까지만 보여주고 더보기 버튼을 누르면 보이는 페이지네이션 
          4. 무한 스크롤 페이지 네이션 
              세로로 계속 보여주는 페이지네이션
              스크롤 페이지네이션을 작성하기 위해서
              npm 에서 scroll과 관련된 라이브러리를 가지고와서 install 해주는 것이 좋음
              npm i react-infinite-scroller
        </pre>
      </>
    );
  };