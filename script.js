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
    const html = `
        <article class="country">
            <img src="${data.flags.png}" alt="" class="country_img" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">${data.region}</h4>
                <p class="country_row"><span>🗣️</span>${allLang}</p>
                <p class="country_row"><span>💰</span>${currency[0][1].name} (${currency[0][1].symbol})</p>
                <p class="country_row"><span>Population</span>${data.population}</p>
                <p class="country_row"><span>Border</span>${borders}</p>
                <p class="country_row"><span>Capital</span>${data.capital}</p>
            </div>
        </article>`;
    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
  });
};
// getCountry("Thailand");
// getCountry("japan");
// getCountry("USA");
// getCountry("Republic of India");
// const emptySpace = document.querySelector(".space");

// const html = `<h2>New Message:</h2><p>this is a message from script</p>`;

// emptySpace.insertAdjacentHTML("beforeend", html);

const searchField = document.querySelector(".search-field");
const searchButton = document.querySelector(".search-button");
const countriesList = document.querySelector(".countries-list");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchTerm = searchField.value.toLowerCase();
  // const filteredCountries = countries.filter((country) =>
  //   country.name.toLowerCase().includes(searchTerm)
  // );
  // displayCountries(filteredCountries);
  getCountry(searchTerm);
  console.log(searchTerm);
});

// function displayCountries(countries) {
//   countriesList.innerHTML = "";
//   countries.forEach((country) => {
//     const countryElement = document.createElement("article");
//     countryElement.classList.add("country");
//     countryElement.innerHTML = `
//       <img src="th.png" alt="${country.name}" class="country_img">
//       <div class="country_data">
//         <h3 class="country_name">${country.name}</h3>
//         <h4 class="country_region">${country.region}</h4>
//       </div>
//     `;
//     countriesList.appendChild(countryElement);
//   });
// }

// // Initialize the countries list with all countries
// displayCountries(countries);
