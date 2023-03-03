const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards'); // select the output container element
  
  prophets.forEach((prophet) => {

    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dateBirth = document.createElement('h3');
    let placeBirth = document.createElement('h3');
    let numberChildren = document.createElement('h3');
    let prophetYears = document.createElement('h3');
    let deathDate = document.createElement('h3');
    let age = document.createElement('h3');
    let portrait = document.createElement('img');
    
    var d1 = new Date(`${prophet.birthdate}`);
    var d2 = new Date(`${prophet.death}`);
    var sub = d2.getTime()-d1.getTime();
    s = Math.floor(sub / (1000 * 3600 * 24 * 365));
  
    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
    numberChildren.textContent = `Children: ${prophet.numofchildren}`;
    prophetYears.textContent = `Prophet Years: ${prophet.length}`;
    deathDate.textContent = `Death: ${prophet.death}`;
    age.textContent = `Age: ${s}`;
    
    
  
    // Build the image portrait by setting all the relevant attribute 
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    
    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(dateBirth);
    card.appendChild(placeBirth);
    card.appendChild(numberChildren);
    card.appendChild(prophetYears);
    card.appendChild(deathDate);
    card.appendChild(age);
    card.appendChild(portrait);
        
    cards.appendChild(card);
  }); 
};