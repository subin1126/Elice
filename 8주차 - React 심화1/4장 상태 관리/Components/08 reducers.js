//3. memoReducer의 ADD_MEMO 부분을 완성하세요.
//리듀서 함수들을 포함하는 파일
//리듀서 함수들은 액션(aciton)을 받아 상태(state)를 업데이트하는 역할을 수행

//이 함수는 MemoStore 컴포넌트에서 사용되는 memo 상태를 업데이트하는 역할을 한다
//                          상태    액션 {객체 type, payload }
export const memoReducer = (memo, {type, payload}) => {
    //액션 타입에 따라 처리할 로직을 실행하고 결과를 반환함
      switch (type) { //action.type
        case "ADD_MEMO": //'ACTION_TYPE'
        //상태 업데이트 로직
          return [
              ...memo, { //이번 메모
                  title: payload, // 메모의 제목
                  id: memo.length, // 현재 상태 배열의 길이를 이용하여 고유 식별자(id) 할당
                  status: 'memo', //상태 배열에 추가된 메모의 상태(status)는 'memo'로 설정
              }, //새로운 메모
          ];
      
      //아래 두 case의 경우 요구사항에 따라 action.payload 값을 반환
      //payload 값을 그대로 반환하여 상태를 업데이트
        case "SET_INIT_DATA": // 다른 액션 타입
        case "CHANGE_MEMO_STATUS":
          return payload;
        
        default:
          return memo; //아무 작업 없이 이전의 상태(state)를 그대로 바
    
      }
      
    }
    
    //딕셔너리는 key와 value로 구성된 데이터 구조
    //key를 사용하여 값을 참조하고, 키-값 쌍을 사용하여 데이터를 저장하고 관리할 수 있다
    
    //JS에서 딕셔너리는 객체로 표현된다
    //객체는 중괄호 {}로 감싸고, 키와 값은 : 으로 구분하여 정의한다
    // { key: value }
    
    //여러 속성을 하나의 객체로 묶어서 관리할 수 있고,
    //각각의 속성에 효율적으로 접근할 수 있다
    