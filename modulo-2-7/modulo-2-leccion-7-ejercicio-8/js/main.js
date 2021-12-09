"use strict"

const alarmBtns = document.querySelectorAll(".js_alarm_btn");
const bodyHTML = document.querySelector(".js_body");

function handleClikAlarm() {
    bodyHTML.classList.toggle("alarm");
}

alarmBtns[0].addEventListener("click", handleClikAlarm);
alarmBtns[1].addEventListener("click", handleClikAlarm);
alarmBtns[2].addEventListener("click", handleClikAlarm);


