let btn = document.querySelector('.btn');
var rgbCode = document.querySelector('.rgbCode');
var container = document.querySelector('.container');

var copied = document.querySelector('.copied');
function ChangeBg(e) {
  e.stopPropagation();
  let colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(Math.floor(Math.random() * (255 - 0) + 0));
  }
  let rgbColor = `rgba(${colors.join()},1)`;
  container.style.background = rgbColor;
  copied.style.color = rgbColor;
  rgbCode.textContent = rgbColor;
}
btn.addEventListener('click', ChangeBg);

document.body.addEventListener('click', function () {
  navigator.clipboard.writeText(rgbCode.textContent);
  copied.classList.remove('hidden');
  setTimeout(() => {
    copied.classList.add('hidden');
  }, 1000);
});
