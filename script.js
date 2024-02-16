const time1 = document.querySelector(".time1");
setInterval(() => {
    let date = new Date();
    time1.innerHTML = date;
}, 1000);

const time2 = document.querySelector(".time2");
setInterval(() => {
    let date = new Date();
    time2.innerHTML = date.toLocaleTimeString();
}, 1000);