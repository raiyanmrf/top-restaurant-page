export function createHomeTab(svg, data) {
  const content = document.getElementById("content");

  // title card
  const titleCard = document.createElement("div");
  titleCard.classList.add("card");
  const titleCardName = document.createElement("h1");
  titleCardName.innerHTML = svg + " " + data.title.name;

  const titleCardDesc = document.createElement("p");
  titleCardDesc.textContent = data.title.description;
  titleCard.appendChild(titleCardName);
  titleCard.appendChild(titleCardDesc);
  content.appendChild(titleCard);

  // hour card
  const hourCard = document.createElement("div");
  hourCard.classList.add("card");
  const hourCardName = document.createElement("h2");
  hourCardName.textContent = data.hour.name;
  const hourCardList = document.createElement("ul");
  data.hour.description.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    hourCardList.appendChild(li);
  });
  hourCard.appendChild(hourCardName);
  hourCard.appendChild(hourCardList);
  content.appendChild(hourCard);

  // location card
  const locationCard = document.createElement("div");
  locationCard.classList.add("card");
  const locationCardName = document.createElement("h2");
  locationCardName.textContent = data.location.name;
  const locationCardDesc = document.createElement("p");
  locationCardDesc.textContent = data.location.description;
  locationCard.appendChild(locationCardName);
  locationCard.appendChild(locationCardDesc);
  content.appendChild(locationCard);
}
