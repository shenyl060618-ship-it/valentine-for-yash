const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

yesBtn.addEventListener("click", () => {
  message.innerHTML = "YAY 💖 See you on Valentine’s date 🥰";
  music.play();
});

noBtn.addEventListener("click", () => {
  message.innerHTML = "Nice try 😌 but you know the answer";
});
