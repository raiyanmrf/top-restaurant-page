export function createMenuTab(svg, data) {
  const content = document.getElementById("content");

  // title card
  const titleCard = document.createElement("div");
  titleCard.classList.add("card");
  const titleCardName = document.createElement("h1");
  titleCardName.innerHTML = svg + " Menus";
  titleCard.appendChild(titleCardName);
  content.appendChild(titleCard);

  for (const menu in data) {
    // menu category card
    const catCard = document.createElement("div");
    catCard.classList.add("card");
    const catCardName = document.createElement("h2");
    catCardName.textContent = [menu];
    catCard.appendChild(catCardName);
    content.appendChild(catCard);

    for (const item of data[menu]) {
      // menu item card
      const itemCard = document.createElement("div");
      itemCard.classList.add("card");
      const itemCardName = document.createElement("h2");
      itemCardName.textContent = item.name;
      const itemCardDesc = document.createElement("p");
      itemCardDesc.textContent = item.description;
      const itemCardPrice = document.createElement("h2");
      itemCardPrice.textContent = "$" + item.price;
      itemCard.appendChild(itemCardName);
      itemCard.appendChild(itemCardDesc);
      itemCard.appendChild(itemCardPrice);
      content.appendChild(itemCard);
    }
  }
}
