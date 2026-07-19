export function createContactTab(svg, data) {
  const cards = [];

  // title card
  const titleCard = document.createElement("div");
  titleCard.classList.add("card");
  const titleCardName = document.createElement("h1");
  titleCardName.innerHTML = svg + " Contact Us";
  titleCard.appendChild(titleCardName);
  cards.push(titleCard);

  console.log(data);

  for (const person of data) {
    // contact card
    const personCard = document.createElement("div");
    personCard.classList.add("card");
    const personCardName = document.createElement("h2");
    personCardName.textContent = person.name;
    const personCardRole = document.createElement("p");
    personCardRole.textContent = person.role;
    const personCardEmail = document.createElement("p");
    personCardEmail.textContent = person.Email;
    const personCardPhone = document.createElement("p");
    personCardPhone.textContent = person.phone;
    personCard.appendChild(personCardName);
    personCard.appendChild(personCardRole);
    personCard.appendChild(personCardEmail);
    personCard.appendChild(personCardPhone);
    cards.push(personCard);
  }

  return cards;
}
