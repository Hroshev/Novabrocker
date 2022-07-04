// <----Обратный отчет----->

// document.addEventListener('DOMContentLoaded', function () {
//     // конечная дата, например (2022.01.17)
//     const deadline = (function (y, m, d) { return new Date(y, m - 1, d); })(2022, 06, 02);
//     // id таймера
//     let timerId = null;
//     // склонение числительных
//     function declensionNum(num, words) {
//         return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//     }
//     // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
//     function countdownTimer() {
//         const diff = deadline - new Date();
//         if (diff <= 0) {
//             clearInterval(timerId);
//         }
//         const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//         const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//         const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//         const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//         $days.textContent = days < 10 ? '0' + days : days;
//         $hours.textContent = hours < 10 ? '0' + hours : hours;
//         $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//         $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//         $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

//         // circle progress bar

//         //Days
//         let circleDays = document.querySelectorAll(".days");
//         for (let day of circleDays) {
//             if (days >= 315) {
//                 day.style.strokeDashoffset = 315;
//             } else {
//                 day.style.strokeDashoffset = days;
//             }
//         }

//         // Hours
//         let circleHours = document.querySelectorAll(".hours");
//         for (let hour of circleHours) {
//             hour.style.strokeDashoffset = Math.round((315 / 24) * hours);
//         }

//         // Minutes
//         let circleMinutes = document.querySelectorAll(".minutes");
//         for (let min of circleMinutes) {
//             min.style.strokeDashoffset = Math.round((315 / 60) * minutes);
//         }

//         // Seconds
//         let circleSeconds = document.querySelectorAll(".seconds");
//         for (let sec of circleSeconds) {
//             sec.style.strokeDashoffset = Math.round((315 / 60) * seconds);
//         }
//     }
//     // получаем элементы, содержащие компоненты даты
//     const $days = document.getElementById("days");
//     const $hours = document.getElementById("hours");
//     const $minutes = document.getElementById("minutes");
//     const $seconds = document.getElementById("seconds");
//     // вызываем функцию countdownTimer
//     countdownTimer();
//     // вызываем функцию countdownTimer каждую секунду
//     timerId = setInterval(countdownTimer, 1000);
// });

// <----Отчет вперед----->
function currentTime() {
  const ct = new Date();
  const days = ct.getDate();
  const hours = ct.getHours();
  const minutes = ct.getMinutes();
  const seconds = ct.getSeconds();
  document.getElementById("days").innerHTML = "<p>" + days + "<p>";
  document.getElementById("hours").innerHTML = "<p>" + hours + "<p>";
  document.getElementById("minutes").innerHTML = "<p>" + minutes + "<p>";
  document.getElementById("seconds").innerHTML = "<p>" + seconds + "<p>";

  // circle progress bar
  // Hours
  let circleHours = document.querySelectorAll(".hours");
  for (let hour of circleHours) {
    hour.style.strokeDashoffset = Math.round((315 / 24) * hours);
  }

  // Minutes
  let circleMinutes = document.querySelectorAll(".minutes");
  for (let min of circleMinutes) {
    min.style.strokeDashoffset = Math.round((315 / 60) * minutes);
  }

  // Seconds
  let circleSeconds = document.querySelectorAll(".seconds");
  for (let sec of circleSeconds) {
    sec.style.strokeDashoffset = Math.round((315 / 60) * seconds);
  }
}
setInterval(currentTime, 1000);
