"use strict";

const countries = document.querySelector(".countries");

// const getCountry = function (country) {
// 	// console.log(country);
// 	const req = new XMLHttpRequest();
// 	req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// 	req.send();

// 	req.addEventListener("load", function () {
// 		const [data] = JSON.parse(this.responseText);
// 		const lang = Object.entries(data.languages);
// 		const currency = Object.entries(data.currencies);
// 		console.log(data.borders);
// 		let allLang = "";
// 		let borders = "";
// 		if (data.borders == null) {
// 			borders = "-";
// 		} else {
// 			borders = data.borders;
// 		}
// 		for (let i = 0; i < lang.length; i++) {
// 			if (i == lang.length - 1) {
// 				allLang = allLang + lang[i][1];
// 			} else {
// 				allLang = allLang + lang[i][1] + ", ";
// 			}
// 		}
// 		console.log(allLang);
// 		const html = `
//         <article class="country">
//             <img src="${data.flags.png}" alt="" class="country_img" />
//             <div class="country_data">
//                 <h3 class="country_name">${data.name.common}</h3>
//                 <h4 class="country_region">
//                 <button class="regionClick">${data.region}</button></h4>
//                 <p class="country_row"><span>🗣️</span>${allLang}</p>
//                 <p class="country_row"><span>💰</span>${currency[0][1].name} ${
// 			currency[0][1].symbol == undefined ? "" : `(${currency[0][1].symbol})`
// 		}</p>
//                 <p class="country_row"><span>Population</span>${
// 									data.population
// 								}</p>
//                 <p class="country_row"><span>Border</span>${borders}</p>
//                 <p class="country_row"><span>Capital</span>${data.capital}</p>
//             </div>
//         </article>`;

// 		countries.insertAdjacentHTML("beforeend", html);
// 		countries.style.opacity = 1;
// 		const regionClick = document.querySelector(".regionClick");
// 		regionClick.addEventListener("click", (e) => {
// 			// console.log(data.region);
// 			countries.innerHTML = "";
// 			getRegion(data.region);
// 		});
// 	});
// };
let regionClickId = 0;
const getCountry = function (data) {
	// console.log(data);

	const lang = Object.entries(data.languages);
	const currency = Object.entries(data.currencies);
	// console.log(data.borders);
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
	// console.log(allLang);
	const html = `
        <article class="country">
            <img src="${data.flags.png}" alt="" class="country_img" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">
                <button class="regionClick" id="regionClick${regionClickId}">${
		data.region
	}</button></h4>
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
	const regionClick = document.querySelector("#regionClick" + regionClickId);
	regionClick.addEventListener("click", (e) => {
		regionClickId = 0;
		console.log(data.region);
		countries.innerHTML = "";
		getRegion(data.region);
	});
	regionClickId = regionClickId + 1;
};

const getName = function (name) {
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/name/${name}`);
	req.send();
	req.addEventListener("load", function () {
		if (req.status == 200) {
			const data = JSON.parse(this.responseText);
			for (let i = 0; i < data.length; i++) {
				// getCountry(data[i].name.common);
				getCountry(data[i]);
			}
		} else {
			alert("ERROR : " + req.status);
		}
	});
};

const getRegion = function (region) {
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/region/${region}`);
	req.send();
	req.addEventListener("load", function () {
		if (req.status == 200) {
			const data = JSON.parse(this.responseText);
			for (let i = 0; i < data.length; i++) {
				// getCountry(data[i].name.common);
				getCountry(data[i]);
			}
		} else {
			alert("ERROR : " + req.status);
		}
	});
};

const getCurrency = function (currency) {
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/currency/${currency}`);
	req.send();
	req.addEventListener("load", function () {
		if (req.status == 200) {
			const data = JSON.parse(this.responseText);
			for (let i = 0; i < data.length; i++) {
				// getCountry(data[i].name.common);
				getCountry(data[i]);
			}
		} else {
			alert("ERROR : " + req.status);
		}
	});
};

const getLanguage = function (language) {
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/lang/${language}`);
	req.send();
	req.addEventListener("load", function () {
		if (req.status == 200) {
			const data = JSON.parse(this.responseText);
			for (let i = 0; i < data.length; i++) {
				// getCountry(data[i].name.common);
				getCountry(data[i]);
			}
		} else {
			alert("ERROR : " + req.status);
		}
	});
};

const getCapitalCity = function (capitalCity) {
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/capital/${capitalCity}`);
	req.send();
	req.addEventListener("load", function () {
		if (req.status == 200) {
			const data = JSON.parse(this.responseText);
			for (let i = 0; i < data.length; i++) {
				// getCountry(data[i].name.common);
				getCountry(data[i]);
			}
		} else {
			alert("ERROR : " + req.status);
		}
	});
};

const showMembers = function () {
	// You can replace this with actual logic to fetch member information
	const members = [
		{ name: "6421600158 ปิยังกูร ต่ายจันทร์", imageUrl: "kuy.png" },
		{ name: "6421600166 พงศกร เนตรประจักร์", imageUrl: "korn.jpg" },
		{ name: "6421604773 จิณณวัตร มากสี", imageUrl: "ball.png" },
		{ name: "6421604781 จิรภัทร โพธิ์สร้อย", imageUrl: "kanoon.png" },
		{ name: "6421600115 ประดิพัทธ์ นันทะสาร", imageUrl: "nik.png" },
	];

	const memberList = document.querySelector(".member-list");
	memberList.innerHTML = ""; // Clear previous member data

	// Display member information in the modal
	members.forEach((member) => {
		const memberInfo = document.createElement("div");
		memberInfo.innerHTML = `
		  <div class="member">
			<img src="${member.imageUrl}" alt="${member.name}" class="member-image" />
			<p class="member-name">${member.name}</p>
		  </div>
		`;
		memberList.appendChild(memberInfo);
	});

	// Show the modal
	const modal = document.getElementById("membersModal");
	modal.style.opacity = 1;
	modal.style.visibility = "visible";
};

// Handle the button click event
const showMembersButton = document.getElementById("showMembersButton");
showMembersButton.addEventListener("click", showMembers);

// Close the modal when the close button is clicked
const closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", function () {
	const modal = document.getElementById("membersModal");
	modal.style.opacity = 0;
	modal.style.visibility = "hidden";
});

// Close the modal if the user clicks outside of it
// window.addEventListener("click", function (event) {
// 	const modal = document.getElementById("membersModal");
// 	if (event.target === modal) {
// 		modal.style.opacity = 0;
// 		modal.style.visibility = "hidden";
// 	}
// });

const searchBy = document.querySelector(".search-by");
const searchField = document.querySelector(".search-field");
const searchButton = document.querySelector(".search-button");
const countriesList = document.querySelector(".countries-list");

searchButton.addEventListener("click", (e) => {
	regionClickId = 0;
	e.preventDefault();
	countries.innerHTML = "";

	const searchTerm = searchField.value.toLowerCase();
	if (searchBy.value === "name") {
		getName(searchTerm);
	} else if (searchBy.value === "region") {
		getRegion(searchTerm);
	} else if (searchBy.value === "currency") {
		getCurrency(searchTerm);
	} else if (searchBy.value === "language") {
		getLanguage(searchTerm);
	} else if (searchBy.value === "capital-city") {
		getCapitalCity(searchTerm);
	}
	// console.log(searchBy.value);
	// console.log(searchTerm);
});
