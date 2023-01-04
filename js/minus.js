const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
let answer = 0;


  function generateEquation() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let dummyAnswer1 = Math.floor(Math.random() * 100);
    let dummyAnswer2 = Math.floor(Math.random() * 100);
    let allAnswer = [];
    let swithAnswer = [];

    answer = num1 - num2;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswer = [answer, dummyAnswer1, dummyAnswer2];

    for (i = allAnswer.length; i--; ) {
      swithAnswer.push(
        allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
      );
    }

    option1.innerHTML = swithAnswer[0];
    option2.innerHTML = swithAnswer[1];
    option3.innerHTML = swithAnswer[2];
  }

  option1.addEventListener("click", () => {
    if (option1.innerText == answer) {
      generateEquation();
    } else {
      alert("Не правильный ответ");
    }
  });

  option2.addEventListener("click", () => {
    if (option2.innerText == answer) {
      generateEquation();
    } else {
      alert("Не правильный ответ");
    }
  });

  option3.addEventListener("click", () => {
    if (option3.innerText == answer) {
      generateEquation();
    } else {
      alert("Не правильный ответ");
    }
  });

  generateEquation();

