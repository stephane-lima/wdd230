const year = document.querySelector("#year");
year.textContent = `${new Date().getFullYear()}`;

const lastModifiedDate = document.getElementById("lastmodifieddate");
const currentDate = new Date(document.lastModified);

let modifiedDate = currentDate.toLocaleDateString();
let modifiedTime = currentDate.toLocaleTimeString();

lastModifiedDate.textContent = `${modifiedDate} ${modifiedTime}`

// if (width >= 533.33 && width < 1066) {
//     let imageName = "../images/Large_Hero_image.jpg";
//     document.querySelector("#img").setAttribute("src", imageName);
// }