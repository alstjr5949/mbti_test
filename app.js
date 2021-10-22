const mainPage = document.querySelector(".start_page");
const qnaPage = document.querySelector(".qna");
const questionBox = document.querySelector(".question");
const answerBox1 = document.querySelector(".answer1");
const answerBox2 = document.querySelector(".answer2");
const resultPage = document.querySelector(".result");
let questionIndex = 0;
const QUESTION_NUM = 12;

// 버튼 클릭 이벤트 //
answerBox1.addEventListener("click", function(){
  qnaPage.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    if(questionIndex == QUESTION_NUM){
      result();
    } else {
    qnaPage.style.animation = "fadeIn 0.5s";
    next(++questionIndex);
    }
  }, 450)
  if(questionIndex == 0){
    value.MW = value.MW + 1
  } else if (questionIndex == 1 || questionIndex == 5 || questionIndex == 9){
    value.EI = value.EI + 1
  } else if (questionIndex == 2 || questionIndex == 6 || questionIndex == 10){
    value.SN = value.SN + 1
  } else if (questionIndex == 3 || questionIndex == 7 || questionIndex == 11){
    value.TF = value.TF + 1
  } else {
    value.JP = value.JP + 1
  }
});

answerBox2.addEventListener("click", function(){
  qnaPage.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    if(questionIndex == QUESTION_NUM){
      result();
    } else {
    qnaPage.style.animation = "fadeIn 0.5s";
    next(++questionIndex);
    }
  }, 450)
})

//next 함수
function next(questionIndex){
  questionBox.innerHTML = qna[questionIndex].question;
  answerBox1.innerHTML = qna[questionIndex].a1;
  answerBox2.innerHTML = qna[questionIndex].a2;
  }

// main-page 버튼 클릭 함수 //
function start(){
  mainPage.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qnaPage.style.animation = "fadeIn 1s";
    setTimeout(() => {
      mainPage.style.display = "none";
      qnaPage.style.display = "flex";
    }, 450)
    next(questionIndex);
  }, 450)
}

// 결과 함수 //
function result(){
  qnaPage.style.animation = "fadeOut 0.5s";
  qnaPage.style.display = "none";
  setTimeout(() => {
    resultPage.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      resultPage.style.display = "flex";
    }, 240)
  }, 240)
  let gender = "";
  let mbti = "";
  value.MW < 1 ? (gender += "W") : (gender += "M");
  value.EI > 2 ? (mbti += "E") : (mbti += "I");
  value.SN > 2 ? (mbti += "S") : (mbti += "N");
  value.TF > 2 ? (mbti += "T") : (mbti += "F");
  value.JP > 2 ? (mbti += "J") : (mbti += "P");
  console.log(gender);
  console.log(mbti);
}