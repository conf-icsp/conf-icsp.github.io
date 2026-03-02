function startCountdown() {

  const countdownElement = document.getElementById("countdown");

  if (!countdownElement) {
    setTimeout(startCountdown, 200);
    return;
  }

  const eventDate = new Date("2026-11-26T09:00:00").getTime();

  function pad(num) {
    return num < 10 ? "0" + num : num;
  }

  const interval = setInterval(function () {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "Conference Started!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdownElement.innerHTML =
      days + "d " +
      pad(hours) + "h " +
      pad(minutes) + "m " +
      pad(seconds) + "s";

  }, 1000);
}

startCountdown();