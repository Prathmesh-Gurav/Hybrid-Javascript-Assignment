function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getTemperature(callback) {
  const delay = getRandomInt(500, 1500);

  setTimeout(() => {
    const temperature = getRandomInt(-10, 40);
    callback(null, temperature);
  }, delay);
}

console.log("Fetching temperature...");

getTemperature((err, temp) => {
  if (err) {
    console.error("Error fetching temperature:", err);
  } else {
    console.log(`Temperature reading: ${temp}°C`);
  }
});
