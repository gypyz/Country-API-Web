"use strict";
const countries = document.querySelector(".countries");

const getCountry = function (country) {
  console.log(country);
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();
  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    const lang = Object.entries(data.languages);
    const curren = Object.entries(data.currencies);
    let alllangs = "";
    for (let i = 0; i < lang.length; i++) {
      alllangs = alllangs + " " + lang[i][1];
    }
    console.log(alllangs);

    const html = `<article class="country">
<img src="${data.flags.png}" alt="thai" class="country__img" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>🗣️ ${alllangs}</span></p>
  <p class="country__row"><span>💰${curren[0][1].name}  
    (${curren[0][1].symbol})
    </span></p>
</div>
</article>`;

    countries.insertAdjacentHTML("beforeend", html);
  });
};
console.log(this.responseText);

getCountry(`Japan`);
getCountry(`USA`);
getCountry(`Republic of India`);
getCountry(`Russia`);
