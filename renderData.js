import Notiflix from "notiflix";

const countryList = document.querySelector('.country-list');

function renderCountries(countries) {
	if (countries.length >= 10) {
		return Notiflix.Notify.failure('Too many matches found. Please enter a more specific name.');
	}
	else if (countries.length > 2 && countries.length < 10) { 
		const markup = countries.map(country => {
			return `<li class="country-item"><img class="country-item__flag" src="${country.flags.svg}"/><p class="country-item__name">${country.name.official}</p></li>`;
		}).join('');
		console.log('markup :>> ', markup);
		return countryList.insertAdjacentHTML('beforeend', markup);
		//--second aprouch
		// const resultArray = [];
		// for (let country = 0; country < countries.length; country++) {
		// 	let result = `<li class="country-item"><img class="country-item__flag" src="${country.flags.svg}"/><p class="country-item__name">${country.name.official}</p></li>`
		// 	resultArray.push(result);
		// }
		// return resultArray.join('');
	}
}

export default renderCountries;