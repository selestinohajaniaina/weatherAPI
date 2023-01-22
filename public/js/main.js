// fichier js pour les front-end
const request = require("postman-request");
let url = "http://api.weatherstack.com/current",
  access_key = "7c29b6a021546add5ea47e74f9025871",
  units = "m",
  ville_default = "Mahajanga";

request(
  `${url}?access_key=${access_key}&query=${ville_default}&units=${units}`,
  (err, res, body) => {
    let data = JSON.parse(body);
    let { request, location, current } = data;
    console.log(
      `Name: ${location.name} \n country:${location.country} \n time: ${location.localtime} \n degree: ${current.temperature} degre`
    );
  }
);
