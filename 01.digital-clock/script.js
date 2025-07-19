const clock = document.querySelector(".clock");

updateClock = () => {
  const time = new Date();

  let hours = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();

  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  const timeString = `${hours}:${minute}:${seconds} ${period}`;

  clock.textContent = timeString;
};

setInterval(updateClock, 1000);

updateClock();
