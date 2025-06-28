let count = 0;
const minCount = -200;
const maxCount = 800;

function countAuszahlung() {
  if (count > minCount) {
    count -= 100;
    countAnzeigen();
  } else {
    alert("Keine Auszahlung mehr möglich!");
    return;
  }
}

function countEinzahlung() {
  if (count < maxCount) {
    count += 100;
    countAnzeigen();
  } else {
    alert("Keine Einzahlungen mehr erlaubt");
    return;
  }
}

function countAnzeigen() {
  const element = document.getElementById("anzeige");
  element.innerHTML = count;
  if (count < 0) {
    element.classList.add("rot");
  } else {
    element.classList.remove("rot");
  }

  countAnzeigen();
}
