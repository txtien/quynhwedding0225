(() => {
  // Time constants in milliseconds
  const TIME = {
    SECOND: 1000,
    MINUTE: 1000 * 60,
    HOUR: 1000 * 60 * 60,
    DAY: 1000 * 60 * 60 * 24,
  };

  // Target date configuration
  const TARGET_DATE = {
    MONTH: "02",
    DATE: "22",
  };

  // Get current date
  const getCurrentDate = () => {
    const today = new Date();
    return {
      day: String(today.getDate()).padStart(2, "0"),
      month: String(today.getMonth() + 1).padStart(2, "0"),
      year: today.getFullYear(),
    };
  };

  // Calculate target birthday
  const getTargetBirthday = () => {
    const current = getCurrentDate();
    const targetDate = `${TARGET_DATE.MONTH}/${TARGET_DATE.DATE}/${current.year}`;
    const currentDate = `${current.month}/${current.day}/${current.year}`;

    // If today is past this year's target date, set for next year
    if (new Date(currentDate) > new Date(targetDate)) {
      return `${TARGET_DATE.MONTH}/${TARGET_DATE.DATE}/${current.year}`;
    }
    return targetDate;
  };

  // Update countdown display
  const updateCountdown = (distance) => {
    document.getElementById("days").innerText = Math.floor(distance / TIME.DAY);
    document.getElementById("hours").innerText = Math.floor(
      (distance % TIME.DAY) / TIME.HOUR
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % TIME.HOUR) / TIME.MINUTE
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % TIME.MINUTE) / TIME.SECOND
    );
  };

  // Handle countdown completion
  const handleCountdownComplete = () => {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.querySelector(".countdown .subtitle").style.display = "none";
  };

  // Initialize countdown
  const initCountdown = () => {
    
    const targetDate = new Date(getTargetBirthday());
    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
        handleCountdownComplete();
        return;
      }

      updateCountdown(distance);
    }, 1000); // Update every second
  };

  // Start the countdown
  initCountdown();
})();
