const route = require("express").Router();
const fetch = require("node-fetch");

Access_Key = "eiObgqytS-FqsVkUDRCRySd-Om7doqhlIBNQlL5fLt8";
API = "https://api.unsplash.com";

async function GetPhoto(query) {
  const data = await fetch(
    `${API}/search/photos?page=1&per_page=40&query=${query}&client_id=${Access_Key}`,
  );

  const dataJson = await data.json();
  const result = dataJson.results;
  return result;
}

route.post("/", (req, res) => {
  const photoID = req.body.photoID;
  if (photoID) {
    GetPhoto(photoID).then(function (value) {
      res.send(value);
    });
  } else {
    res.send("Invalid PhotoId");
  }
});

route.get("/", (req, res) => {
  res.send("Getting");
});

exports = module.exports = {
  API: route,
};
