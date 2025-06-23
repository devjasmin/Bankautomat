let count = 0;
const minCount = -200;
const maxCount = 600;

function countAuszahlung() {
  if (count <= minCount) {
    alert("Keine Auszahlung mehr möglich!");
    return;
  }
  count -= 50;
  countAnzeigen();
}

function countEinzahlung() {
  if (count >= maxCount) {
    alert("Besten Dank für deine Einzahlung");
    return;
  }
  count += 50;
  countAnzeigen();
}

function countAnzeigen() {
  const element = document.getElementById("zahl");
  element.innerHTML = count;

  if (count < 0) {
    element.classList.add("zahl");
  } else {
    element.classList.remove("zahl");
  }
  if (count > 0) {
    element.classList.add("zahl1");
  } else {
    element.classList.remove("zahl1");
  }

  countAnzeigen();
}
