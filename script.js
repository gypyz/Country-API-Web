"use strict";

const countries = document.querySelector(".countries");

const getCountry = function (country) {
  // console.log(country);
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();

  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    const lang = Object.entries(data.languages);
    const currency = Object.entries(data.currencies);
    console.log(data.borders);
    let allLang = "";
    let borders = "";
    if (data.borders == null) {
      borders = "-";
    } else {
      borders = data.borders;
    }
    for (let i = 0; i < lang.length; i++) {
      if (i == lang.length - 1) {
        allLang = allLang + lang[i][1];
      } else {
        allLang = allLang + lang[i][1] + ", ";
      }
    }
    console.log(allLang);
    console.log(currency[0][1].symbol);
    const html = `
        <article class="country">
            <img src="${data.flags.png}" alt="" class="country_img" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">
                <button class="regionClick">${data.region}</button></h4>
                <p class="country_row"><span>🗣️</span>${allLang}</p>
                <p class="country_row"><span>💰</span>${currency[0][1].name} ${
			currency[0][1].symbol == undefined ? "" : `(${currency[0][1].symbol})`
		}</p>
                <p class="country_row"><span>Population</span>${
									data.population
								}</p>
                <p class="country_row"><span>Border</span>${borders}</p>
                <p class="country_row"><span>Capital</span>${data.capital}</p>
            </div>
        </article>`;

    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
    const regionClick = document.querySelector(".regionClick");
    regionClick.addEventListener("click", (e) => {
      // console.log(data.region);
      getRegion(data.region);
    });
  });
};

const getRegion = function (region) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/region/${region}`);
  req.send();
  req.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);

    console.log(data[0].name.official);
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      getCountry(data[i].name.official);
    }
  });
};

// getCountry("Thailand");
// getCountry("japan");
// getCountry("USA");
// getCountry("Republic of India");
const searchField = document.querySelector(".search-field");
const searchButton = document.querySelector(".search-button");
const countriesList = document.querySelector(".countries-list");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  countries.innerHTML = "";
  const searchTerm = searchField.value.toLowerCase();
  getCountry(searchTerm);

  console.log(searchTerm);
});

// getRegion("asia");
