let display = document.getElementById('display');
let clickSound = document.getElementById('click-sound');

function press(num) {
  playSound();
  display.value += num;
}

function calculate() {
  playSound();
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  playSound();
  display.value = '';
}

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}
