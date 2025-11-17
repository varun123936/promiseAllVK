let count = 0;

// Start repeating every second
const intervalId = setInterval(() => {
  count++;
  console.log("Count:", count);

  // Stop after 5 times
  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);