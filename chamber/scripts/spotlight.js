const spotlightURL = "JSON/data.json";

async function getDirectoryData() {
    const response = await fetch(spotlightURL);
    const data = await response.json();
    // console.table(data.members);
    populateSpotlight(data.companies);
}

getDirectoryData();


const populateSpotlight = (companies) => {
    const spotlightContainer = document.querySelector("#spotlight-grid");
    // const cards = document.querySelector("div.spotlight-grid");

    const goldMembers = [];

    companies.forEach((company) => {
        if (company.membership === "Gold" || company.membership === "Silver") {
            goldMembers.push(company);
            // console.log(company.name)
        }
    });


        for ( i = 0; i < 3; i++ ) {
            let choice = Math.floor(Math.random() * goldMembers.length);
            createCard(goldMembers[choice]);
            goldMembers.splice(choice, 1);
        };

    function createCard(details) {
        let card = document.createElement("div");
        card.setAttribute("class", "sl-card")
        let slName = document.createElement("h3");
        slName.setAttribute("class", "sl-name");
        let slImg = document.createElement("img");
        // let slBlurb = document.createElement("h1");
        // slBlurb.setAttribute("class", "sl-blurb");
        let slHR = document.createElement("hr");
        slHR.setAttribute("class", "hr_light");
        let slContact = document.createElement("p");
        let slAddress = document.createElement("p");
    
        slName.textContent = details.name;
        slImg.setAttribute("class", "sl-logo");
        slImg.setAttribute("src", details.image);
        slImg.setAttribute("alt", `Picture of ${details.name}`);
        // slImg.setAttribute("loading", "lazy");
        // slImg.setAttribute("width", 100);
        //slImg.setAttribute("height", 94);

        slContact.textContent = `${details.phone}`
        slAddress.textContent = `${details.address}`;
        
        card.appendChild(slName);
        card.appendChild(slImg);
        card.appendChild(slHR);
        card.appendChild(slContact);
        card.appendChild(slAddress);
        spotlightContainer.appendChild(card);

        // let card = document.createElement("section");
        // let portrait = document.createElement('img');
        // let name = document.createElement('p');
        // let address = document.createElement('p');
        // let phone = document.createElement('p');
        // let website  = document.createElement('a');

        // name.textContent = `${company.name}`;
        
        // portrait.setAttribute("src", company.image);
        // portrait.setAttribute('alt', `${company.name} Logo`);
        // // portrait.setAttribute('loading', 'lazy');
        // portrait.setAttribute('width', '180');
        // portrait.setAttribute('height', '94');

        // website.setAttribute("href", company.siteurl)
        // // website.textContent = `${company.siteurl}`;
        // website.textContent = "website";

        // address.textContent = `${company.address}`;
        // phone.textContent = `${company.phone}`;

        // // card.appendChild(name)
        // card.appendChild(name)
        // card.appendChild(portrait);
        // // card.appendChild(name)
        // card.appendChild(address);
        // card.appendChild(phone);
        // card.appendChild(website);

        // spotlightContainer.appendChild(card);
  }
};