const btnCose = document.querySelector(".btn-close");
const banner = document.querySelector(".container");

let intervalId;

const handleClickBtnClose = () => {
  banner.classList.remove("show");
  clearInterval(intervalId);
};

const handleAnimatedBtn = () => {
  const animatedButton = document.querySelector(".btn-buy");
  const img = document.querySelector(".img-women");
  function startAnimation() {
    animatedButton.classList.remove("btn-buy--animation");
    void animatedButton.offsetWidth;
    animatedButton.classList.add("btn-buy--animation");
  }

  setTimeout(() => {
    img.classList.remove("hidden");
  }, 2000);

  startAnimation();
  intervalId = setInterval(startAnimation, 5000);
};

btnCose.addEventListener("click", handleClickBtnClose);
document.addEventListener("DOMContentLoaded", handleAnimatedBtn);
