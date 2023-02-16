let t = 33;
let s = 2.5;

temperature = document.getElementById("temperature");
temperature.textContent = t;

windSpeed = document.getElementById("wind-speed");
windSpeed.textContent = s;

windchill = document.getElementById("wind-chill");
// windChill.textContent = f;

if (t <= 10 && s > 4.8) {
    let f = 35.74 + 0.6215 * t - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16);
    windchill.textContent = f.toFixed(2) + " ºF";
}
else {
    let f = "N/A";
    windchill.textContent = f;
}
