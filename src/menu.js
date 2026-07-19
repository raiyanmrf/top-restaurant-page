export function createMenuTab(svg) {
  const data = {
    Beverages: [
      {
        name: "Honey Tea",
        description:
          "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
        price: 2,
      },
      {
        name: "Beary Tea",
        description:
          "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
        price: 3,
      },
    ],
    Sides: [
      {
        name: "Toast and Jam",
        description:
          "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
        price: 1,
      },
      {
        name: "Fresh Fruit",
        description:
          "A small bowl of fresh fruit, whatever we find at the market for the day.",
        price: 3,
      },
    ],
    "Main Dishes": [
      {
        name: "Pancakes",
        description:
          "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
        price: 4,
      },
      {
        name: "French Toast",
        description:
          "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
        price: 5,
      },
      {
        name: "Beary Veggie Sandwich",
        description:
          "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
        price: 8,
      },
      {
        name: "BLT",
        description:
          "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
        price: 6,
      },
      {
        name: "Bagel and Lox",
        description:
          "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
        price: 8,
      },
      {
        name: "Honeycomb",
        description:
          "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
        price: 6,
      },
      {
        name: "Beary Bowl",
        description:
          "Get a big ole bowl of our berries! Side of honey is $1 extra.",
        price: 7,
      },
      {
        name: "The Beary Best Porridge",
        description:
          "Made by Baby Bear himself, this porridge is guaranteed to be just right, or your money back.",
        price: 5,
      },
    ],
  };

  const content = document.getElementById("content");

  // title card
  const titleCard = document.createElement("div");
  titleCard.classList.add("card");
  const titleCardName = document.createElement("h1");
  titleCardName.innerHTML = svg + " Menus";
  titleCard.appendChild(titleCardName);
  content.appendChild(titleCard);

  // menu card
  for (const menu in data) {
    // category card
    const catCard = document.createElement("div");
    catCard.classList.add("card");
    const catCardName = document.createElement("h2");
    catCardName.textContent = [menu];
    catCard.appendChild(catCardName);
    content.appendChild(catCard);

    console.log(data[menu]);

    for (const item of data[menu]) {
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
