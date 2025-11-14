const add = document.querySelector("#add");
const calc = document.querySelector("#calc");
const container = document.querySelector(".container");


add.addEventListener("click", () => {
  const row = document.createElement("div");
  row.classList.add("row");

  const input = document.createElement("input");
  input.classList.add("input-number");
  // input.type = "number";
  input.setAttribute("type", "number"); // <input type = "number">

  // span 태그 생성하기 <span class="remove-row">&times;</span>
  const span = document.createElement("span");
  span.classList.add("remove-row");
  span.innerHTML = "&times;";

  row.append(input, span);
  container.append(row);

  // ******************************

  // 1. 만들어진 X버튼(span)에 이벤트리스너/핸들러 추가
  // 클릭된 x 버튼의 input 요소를 제거
  span.addEventListener("click", (e) => {

    // 2. 현재 이벤트가 발생한 요소의 부모 요소를 탐색(선택)
    const parent = e.target.parentElement; // div.row

    // 3. 부모 요소 제거하기
    parent.remove();

  })



});

calc.addEventListener("click", () => {
  const numbers = document.querySelectorAll(".input-number");

  let sum = 0;

  for(let i = 0; i < numbers.length; i++){
    sum += Number(numbers[i].value);
  }

  alert("결과 : " + sum);
  

});