const imgLeft = document.getElementById("imgLeft");
const imgRight = document.getElementById("imgRight");
const startBtn = document.getElementById("start");
const secretBtn = document.getElementById("secret");
const arrayFete = [
  0,
  "dice-six-faces-one.png",
  "dice-six-faces-two.png",
  "dice-six-faces-three.png",
  "dice-six-faces-four.png",
  "dice-six-faces-five.png",
  "dice-six-faces-six.png",
];
const scoreH1 = document.getElementById("scoreH1");

startBtn.addEventListener("click", function () {
  let rightNumber = Math.floor(Math.random() * 6) + 1;
  let leftNumber = Math.floor(Math.random() * 6) + 1;
  imgLeft.src = arrayFete[leftNumber];
  imgRight.src = arrayFete[rightNumber];
  let score = rightNumber + leftNumber;
  console.log(rightNumber);
  console.log(leftNumber);
  scoreH1.textContent = "Score: " + score;
});

secretBtn.addEventListener("click", function () {
  imgLeft.src = arrayFete[6];
  imgRight.src = arrayFete[6];
  scoreH1.textContent = "Score: 12";
});
