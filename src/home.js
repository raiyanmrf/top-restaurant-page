export function createHomeTab() {
  const data = {
    title: {
      name: "Beary's Breakfast Bar",
      description:
        "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear!",
    },
    hour: {
      name: "Hours",
      description: [
        "Sunday: 8am - 8pm",

        "Monday: 6am - 6pm",

        "Tuesday: 6am - 6pm",

        "Wednesday: 6am - 6pm",

        "Thursday: 6am - 10pm",

        "Friday: 6am - 10pm",

        "Saturday: 8am - 10pm",
      ],
    },
    location: {
      name: "Location",
      description: "123 Forest Drive, Forestville, Maine",
    },
  };

  const content = document.getElementById("content");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>food</title>
                    <path
                        d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23M1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22M16.03 15C16.03 7 1 7 1 15H16.03M1 17H16V19H1V17Z" />
                </svg>`;

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
