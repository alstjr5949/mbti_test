const mainPage = document.querySelector(".start_page");
const qnaPage = document.querySelector(".qna");

function start(){
  mainPage.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qnaPage.style.animation = "fadeIn 1s";
    setTimeout(() => {
      mainPage.style.display = "none";
      qnaPage.style.display = "block";
    }, 450)
  }, 450)
}