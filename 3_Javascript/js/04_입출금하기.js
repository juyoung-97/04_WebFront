function test() {
  const password = prompt("비밀번호를 입력하세요");

  console.log(password);

  // 확인 -> 입력한 값이 문자열로 저장

  // 취소 -> null
  
  if(password==null){ // 취소
    alert("취소");
  } else { // 확인
    if(password == '1234') { // 비밀번호가 같을 때
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치");
    }
  }

}

const amount = document.getElementById("amount");

const output = document.getElementById("output");

const pw = '1234';
let balance = 10000;

output.innerText = balance;

// 입금 함수
function deposit(){
  // input 에 입력된 금액 구하기
  
  // amount.value.length == 0
  if(amount.value.length == 0) {
    alert("금액을 입력해주세요 !");
  } else { // 입력이 되었다면
    // 구한 금액을 잔액(balance)에 누적
    // 구한 금액(amount.value)이 현재 string
    // -> Number()를 이용하여 number(숫자) 타입으로 형변환
    balance += Number(amount.value);
    
    output.innerText = balance; // 화면에 잔액 업데이트
    amount.value = ''; // input 에 작성된 값 제거
  }

}

// 출금 함수
function withdrawal(){
  if(amount.value.length == 0) {
    alert("금액을 입력해주세요 !");
  } else  {
  const password = prompt("비밀번호를 입력하세요");

  if(password == null) { // 취소버튼 누름
    alert("취소됨");
  } else { // 확인버튼 누름
    if(password != pw) { // 비밀번호 불일치
      alert("비밀번호가 일치하지 않습니다");
  } else { // 비밀번호 일치
    const money = Number(amount.value);

    // 출금할 금액이 잔액보다 큰 경우
    if(money > balance){
      alert("출금 금액이 잔액보다 클 수 없습니다");
    } else { // 출금할 금액이 잔액보다 작거나 같은 경우
      balance -= money;
      output.innerText = balance;
      amount.value = '';
      alert(`${money}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
      // 템플릿 리터럴 : 백틱(``)을 사용하여 문자열을 감싸고,
      // ${} 안에 변수/값을 넣어 동적으로 문자열을 생성하는 방식
    }
    }
  }
 }
  }