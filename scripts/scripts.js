const year = document.querySelector("#year");
year.textContent = `${new Date().getFullYear()}`;


const lastModifiedDate = document.getElementById("lastmodifieddate");
const currentDate = new Date(document.lastModified);

let modifiedDate = currentDate.toLocaleDateString();
let modifiedTime = currentDate.toLocaleTimeString();

lastModifiedDate.textContent = `Last updated: ${modifiedDate} ${modifiedTime}`;