//get body element in HTML

var select = document.querySelector("#select");
const country = document.querySelector("#pays");
const Ville = document.querySelector("#Ville");
const altitude = document.querySelector("#altitude");
const longitude = document.querySelector("#longitude");
const temp = document.querySelector("#temp");
const dt = document.querySelector("#dt");
const btn = document.querySelector("#btn");
const desc = document.querySelector("#desc");

//click at btn

btn.addEventListener("click", () => {
  let newVille = select.value;
  clickBtn(newVille);
});

// declared the URL & Key & query

let url = "https://api.openweathermap.org/data/2.5/forecast?",
  access_key = "dd6558c2ba19bde6b4dd0b2c95e5509f",
  ville_default = "Mahajanga";

//Get the body url // JSON files
async function clickBtn(vll) {
  const myData = await fetch(`${url}&q=${vll}&appid=${access_key}`)
    .then((body) => {
      return body.json();
    })
    .catch((err) => console.log(err));
  let countryAPI = myData.city.country;
  let nameAPI = myData.city.name;
  let latAPI = myData.city.coord.lat;
  let lonAPI = myData.city.coord.lon;
  let dateAPI = myData.list[1].dt_txt;
  let tempAPI = Math.floor(myData.list[1].main.temp - 273.15);
  let mainAPI = myData.list[1].weather[0].main;

  console.log(myData);
  aff(countryAPI, nameAPI, dateAPI, latAPI, lonAPI, tempAPI, mainAPI);
  addBodyBack(nameAPI);
  
  switch (mainAPI) {
    case "Rain":
      addFooterGif(mainAPI);
      break;
      case "Clouds":
      addFooterGif(mainAPI);
      break;

    default:
      document.getElementById("footer").style.background = "transparent";
      break;
  }
}
setTimeout(() => {
  clickBtn(ville_default);
  addBodyBack(ville_default);
}, 3000);

//function pour affiche au page les données

async function aff(
  a = " ",
  b = " ",
  c = " ",
  d = " ",
  e = " ",
  f = " ",
  g = " "
) {
  country.innerHTML = await a;
  Ville.innerHTML = await b;
  dt.innerHTML = await c;
  altitude.innerHTML = await d;
  longitude.innerHTML = await e;
  temp.innerHTML = await f;
  desc.innerHTML = await g;
}

function addBodyBack(nameImg) {
  document.body.style.backgroundImage = `url('src/image/array/${nameImg}.jpg')`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";
}

function addFooterGif(nameImg) {
  document.getElementById(
    "footer"
  ).style.backgroundImage = `url('src/image/${nameImg}.gif`;
  document.getElementById(
    "footer"
  ).style.backgroundRepeat = "no-repeat";
  document.getElementById(
    "footer"
  ).style.backgroundPosition = "center";
  document.getElementById(
    "footer"
  ).style.backgroundAttachment = "fixed";
  document.getElementById(
    "footer"
  ).style.backgroundSize = "cover";
}