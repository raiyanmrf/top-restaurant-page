export function createContactTab(svg) {
  const data = [
    {
      name: "Mama Bear",
      role: "Chef",
      phone: "555-555-5554",
      email: "totallyRealEmail@notFake.com",
    },
    {
      name: "Papa Bear",
      role: "Manager",
      phone: "555-555-5555",
      email: "perfectlyRealEmail@notFake.com",
    },
    {
      name: "Baby Bear",
      role: "Waiter",
      phone: "555-555-5556",
      email: "totallyRealEmail@notFake.com",
    },
  ];

  const content = document.getElementById("content");

  // title card
  const titleCard = document.createElement("div");
  titleCard.classList.add("card");
  const titleCardName = document.createElement("h1");
  titleCardName.innerHTML = svg + " Contact Us";
  titleCard.appendChild(titleCardName);
  content.appendChild(titleCard);

  for (const item of data) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("card");
    const itemCardName = document.createElement("h2");
    itemCardName.textContent = item.name;
    const itemCardRole = document.createElement("p");
    itemCardRole.textContent = item.role;
    const itemCardEmail = document.createElement("p");
    itemCardEmail.textContent = item.Email;
    const itemCardPhone = document.createElement("p");
    itemCardPhone.textContent = item.phone;
    itemCard.appendChild(itemCardName);
    itemCard.appendChild(itemCardRole);
    itemCard.appendChild(itemCardEmail);
    itemCard.appendChild(itemCardPhone);
    content.appendChild(itemCard);
  }
}
