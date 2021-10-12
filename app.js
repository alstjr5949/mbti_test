const mainPage = document.querySelector(".start_page");
const qnaPage = document.querySelector(".qna");
const questionBox = document.querySelector(".question");
const answerBox1 = document.querySelector(".answer1");
const answerBox2 = document.querySelector(".answer2");

function clickBtn(questionIndex){
answerBox1.addEventListener("click", function(){
  next(++questionIndex);
});
answerBox2.addEventListener("click", function(){
  next(++questionIndex);
})
}

function next(questionIndex){
  questionBox.innerHTML = qna[questionIndex].question;
  answerBox1.innerHTML = qna[questionIndex].a1;
  answerBox2.innerHTML = qna[questionIndex].a2;
  clickBtn(questionIndex);
}

function start(){
  mainPage.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qnaPage.style.animation = "fadeIn 1s";
    setTimeout(() => {
      mainPage.style.display = "none";
      qnaPage.style.display = "flex";
    }, 450)
    let questionIndex = 0;
    next(questionIndex);
  }, 450)
}