const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const windSpeed = document.querySelector("#wind-speed");
const windchill = document.querySelector("#wind-chill");

async function apiFetch() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Mindelo&units=metric&appid=28d8b499212fe1fb61d8ef44ccf2191f";
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

//currentTemp.innerHTML = 5;
//windSpeed.textContent = 7;

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;
    // currentTemp.innerHTML = 9;
    // windSpeed.textContent = 5;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
        
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //captionDesc.textContent = desc;
    captionDesc.textContent = desc.split(' ').map(capitalize).join(' ');
    
    let t = weatherData.main.temp.toFixed(0);
    let s = weatherData.wind.speed.toFixed(1);
    
    //console.log(t);
    //console.log(s);
    
    if (t <= 10 && s > 4.8) {
    	let f = 35.74 + 0.6215 * t - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16);
    	windchill.innerHTML = `<strong>${f.toFixed(2)}</strong>`;
    }
    else {
    	let f = "N/A";
    	windchill.innerHTML = `<strong>${f}</strong>`;
    }
}

function capitalize(s) {
	return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}
// if (t <= 10 && s > 4.8) {
//     let f = 35.74 + 0.6215 * t - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16);
//     windchill.textContent = f.toFixed(2) + " ºF";
// }
// else {
//     let f = "N/A";
//     windchill.textContent = f;
// }