const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
 
gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});
 
listbutton.addEventListener("click", showList);
 
function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

const url = 'JSON/data.json';

async function getCompanyData() {
  const response = await fetch(url);
  const data = await response.json();
  displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
  const cards = document.querySelector("article.grid");

  companies.forEach((company) => {

    let card = document.createElement("section");
    let portrait = document.createElement('img');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website  = document.createElement('a');

    name.textContent = `${company.name}`;
    
    portrait.setAttribute("src", company.image);
    portrait.setAttribute('alt', `${company.name} Logo`);
    // portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '180');
    portrait.setAttribute('height', '94');

    website.setAttribute("href", company.siteurl)
    // website.textContent = `${company.siteurl}`;
    website.textContent = "website";

    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;

    // card.appendChild(name)
    card.appendChild(portrait);
    card.appendChild(name)
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
  });
};