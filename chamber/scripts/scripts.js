const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', function() {
    toggleMenu();
});


function toggleMenu() {
    const navElement = document.querySelector('#primaryNav');
    navElement.classList.toggle('open');
    document.querySelector('#menuButton').classList.toggle("open");
}

function getLastUpdate() {
    let lastModified = new Date(document.lastModified).toLocaleDateString('en-US', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
    return lastModified;
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function today() { 
    return new Date().toLocaleDateString('en-US', {dateStyle: 'full'});
}

let lastUpdatedElem1 = document.getElementById("lastmodifieddate1");
lastUpdatedElem1.innerHTML = getLastUpdate();

let lastUpdatedElem2 = document.getElementById("lastmodifieddate2");
lastUpdatedElem2.innerHTML = getLastUpdate();

let currentYearElem1 = document.getElementById('year1');
currentYearElem1.innerHTML = getCurrentYear();

let currentYearElem2 = document.getElementById('year2');
currentYearElem2.innerHTML = getCurrentYear();

let todaysDayElem = document.getElementById('date');
todaysDayElem.innerHTML = today();

let todaysDayElem1 = document.getElementById('date1');
todaysDayElem1.innerHTML = today();

let dayOfWeek = new Date().getDay();
console.log(dayOfWeek);

if (dayOfWeek == "1" || dayOfWeek == "2") {
    document.getElementById("banner").style.display = "block";
}
else {
    document.getElementById("banner").style.display = "none";
}