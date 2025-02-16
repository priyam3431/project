
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let hourPlace = document.querySelector(".hourPlace");
let minutePlace = document.querySelector(".minutePlace");
let secondPlace = document.querySelector(".secondPlace");
let denoterPlace = document.querySelector(".denoterPlace");
let setRotation = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (h > 12) {
        h -= 12;
    }
    hour.style.transform = `rotate(${30 * h + m / 2}deg)`;
    minute.style.transform = ` rotate(${6 * m}deg)`;
    second.style.transform = `rotate(${6 * s}deg)`;
    if (h < 10) {
        hourPlace.textContent = `0${h}:`;
        denoterPlace.innerHTML = "AM";
    }
    if (m < 10) {
        minutePlace.textContent = `0${m}:`;
    }
    if (s < 10) {
        secondPlace.textContent = `0${s}`;
    } else {
        hourPlace.innerHTML = `${h} :`;
        minutePlace.innerHTML = `${m} :`;
        secondPlace.innerHTML = `${s}`;
    }
};

setInterval(() => {
    setRotation();
}, 1000);
