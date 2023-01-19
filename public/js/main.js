// fichier js pour les front-end
const request = require("postman-request");
let url = "http://api.weatherstack.com/current",
  access_key = "7c29b6a021546add5ea47e74f9025871",
  units = "m",
  ville_default = "Mahajanga";
const select = document.querySelector("#select");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert(1);
});

request(
  `${url}?access_key=${access_key}&query=${ville_default}&units=${units}`,
  (err, res, body) => {
    data = JSON.parse(body);
    const { request, location, current } = data;
    console.log(location + "\n" + current);
    // console.log(
    //   `ici c'est ${location.name} a ${location.localtime} pour temperature de ${current.temperature} degre`
    // );
  }
);
