const { JSDOM } = require("jsdom");
const https = require("https");

function getDomFromUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const dom = new JSDOM(data).window.document;
        resolve(dom);
      });
    });
  });
}

module.exports = {
  getDomFromUrl,
};
