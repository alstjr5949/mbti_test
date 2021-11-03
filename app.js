const mainPage = document.querySelector(".start_page");
const qnaPage = document.querySelector(".qna");
const questionBox = document.querySelector(".question");
const answerBox1 = document.querySelector(".answer1");
const answerBox2 = document.querySelector(".answer2");
const resultPage = document.querySelector(".result");
const container = document.querySelector(".container");
const resultContainer = document.querySelector(".result_container");
const resetBtn = document.querySelector(".restart_btn");
const nowQuestion = document.querySelector(".now");
const linkBtn = document.querySelector(".link_share");
let questionIndex = 0;
let nowQuestionNum = 1;
const QUESTION_NUM = 12;

//progress qeustion number bar//
nowQuestion.innerHTML = String(nowQuestionNum).padStart(2, "0");

// 버튼 클릭 이벤트 //
answerBox1.addEventListener("click", function(){
  qnaPage.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    if(questionIndex == QUESTION_NUM){
      result();
    } else {
    qnaPage.style.animation = "fadeIn 0.5s";
    nowQuestionNum = parseInt(nowQuestionNum) + 1;
    nowQuestion.innerHTML = String(nowQuestionNum).padStart(2, "0");
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
    nowQuestionNum = parseInt(nowQuestionNum) + 1;
    nowQuestion.innerHTML = String(nowQuestionNum).padStart(2, "0");
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
  const resultTitle = document.querySelector(".result_title");
  const resultFeature = document.querySelector(".result_feature");
  const compatibilityGood = document.querySelector(".compatibility_good");
  const compatibilityBad = document.querySelector(".compatibility_bad");
  const resultImg = document.querySelector(".result_img");

  container.style.animation = "fadeOut 0.5s";
  container.style.display = "none";
  qnaPage.style.display = "none";
  setTimeout(() => {
    resultContainer.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      resultContainer.style.display = "flex";
    }, 240)
  }, 240)
  let title = "title";
  let gender = "";
  let mbti = "";
  value.MW < 1 ? (title += "W") : (title += "M");
  value.MW < 1 ? (gender += "1") : (gender += "0");
  value.EI > 2 ? (mbti += "E") : (mbti += "I");
  value.SN > 2 ? (mbti += "S") : (mbti += "N");
  value.TF > 2 ? (mbti += "T") : (mbti += "F");
  value.JP > 2 ? (mbti += "J") : (mbti += "P");
  resultTitle.innerHTML = results[mbti][title];
  resultFeature.innerHTML = results[mbti]["feature"];
  compatibilityGood.innerHTML = results[mbti]["good"];
  compatibilityBad.innerHTML = results[mbti]["bad"];
  //resultImg.innerHTML = results[mbti]["imgsrc"][gender];//
}

// reset 함수 클릭 이벤트 함수
resetBtn.addEventListener("click", function(){
  resultContainer.style.animation = "fadeOut 1s";
  resultContainer.style.display = "none";
  setTimeout(() => {
    container.style.animation = "fadeIn 1s";
    container.style.display = "flex";
    setTimeout(() => {
      mainPage.style.animation = "fadeIn 0.5s";
      mainPage.style.display = "flex";
    }, 450)
  }, 450)
  questionIndex = 0;
  value.MW = 0;
  value.EI = 0;
  value.SN = 0;
  value.TF = 0;
  value.JP = 0;
  nowQuestionNum = 1;
  nowQuestion.innerHTML = String(nowQuestionNum).padStart(2, "0");
})

//링크 공유 이벤트
function linkClick(){
  const url = "https://alstjr5949.github.io/mbti_test/";
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("링크가 복사되었습니다.");
}

linkBtn.addEventListener("click", linkClick);