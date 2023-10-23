let circularProgress = document.querySelector(".circular-progress"),
  progress = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 20,
  speed = 100;

let progressInterval = setInterval(() => {
  progressStartValue++;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
  console.log(progressStartValue);
}, speed);
