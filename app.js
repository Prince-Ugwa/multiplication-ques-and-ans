const num1 = document.querySelector("#firstnmber");
const num2 = document.querySelector("#secondnmber");
const form = document.querySelector("#form");
const question = document.querySelector("#question");
const inputEL = document.querySelector("#input");
const scoreEl = document.querySelector(".score-rate");

//getting random numbers for multiplication
const num01 = Math.trunc(Math.random() * 10);
const num02 = Math.trunc(Math.random() * 10);
const btn = document.querySelector(".btn");

//change the question  content
question.textContent = `What is ${num01} multiply by ${num02}`;

//get the correct ans
const correctAns = num01 * num02;
console.log(correctAns);

//set initial score
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerText = score;
//store the scorevalue to the local storage to avoid loosing data after each submit
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

form.addEventListener("click", () => {
  const userAns = +inputEL.value;
  if (userAns === "") {
    return;
  }
  // if (userAns === correctAns) {
  //   score = score + 1;
  //   updateLocalStorage();
  // } else {
  //   score = score - 1;
  //   updateLocalStorage();
  // }
  userAns === correctAns ? score++ : score--;
  updateLocalStorage();
});
