setInterval(setClock, 1000);

const hrHand = document.querySelector("[data-hour-hand]");
const minHand = document.querySelector("[data-minute-hand]");
const secHand = document.querySelector("[data-second-hand]");

function setClock() {
    const currentDate = new Date();
    const secondsRatio = (currentDate.getSeconds()) / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secHand, secondsRatio);
    setRotation(minHand, minutesRatio);
    setRotation(hrHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock()