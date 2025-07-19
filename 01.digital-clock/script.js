const clockEl = document.querySelector(".clock");
const dateEl = document.querySelector(".date");

function updateClock() {
  const time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  const timeString = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${period}`;

  clockEl.textContent = timeString;

  const formatted = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  dateEl.textContent = formatted;
}

setInterval(updateClock, 1000);

updateClock();
