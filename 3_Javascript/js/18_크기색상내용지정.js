

const apply = document.getElementById("apply");
const size = document.getElementById("size");
const color = document.getElementById("color");
const content = document.getElementById("content");
const registration = document.getElementById("registration");
const result = document.getElementById("result");


apply.addEventListener("click", () => {
content.style.fontSize = size.value + "px";
content.style.color = color.value;
});
registration.addEventListener("click", () => {
const p = document.createElement("p");
p.innerText = content.value;
p.setAttribute("style", content.getAttribute("style"));
result.append(p);
});