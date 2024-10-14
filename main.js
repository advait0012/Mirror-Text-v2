const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const copied = document.querySelector(".chip");
const copyEl = document.querySelector(".copyToClipboard");

function reverseString() {
  let inputVal = inputEl.value;
  let mirrorText = inputVal.split("").reverse().join("");
  inputEl.value = mirrorText;
}

function copy() {
  const inputVal = inputEl.value.trim(); 
  const feedbackMessage = document.querySelector('.feedback-message');
  const errorMessage = document.querySelector('.error-message');

  feedbackMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  if (inputVal === "") {
    errorMessage.textContent = "Error: The input is empty! Please enter some text to copy.";
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 2000);
    return;
  }

  inputEl.select();
  navigator.clipboard.writeText(inputVal).then(() => {
    feedbackMessage.textContent = "Copied!";
    feedbackMessage.style.display = 'block';
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    inputEl.value = '';
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}


inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    reverseString();
  }
});

buttonEl.addEventListener("click", () => {
  reverseString();
});

copyEl.addEventListener("click", () => {
  copy();
});
