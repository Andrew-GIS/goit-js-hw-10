import './css/styles.css';
import fetchCountries from './fetchCountries';
import renderCountries from './renderData';

import debounce from 'lodash.debounce';
import { result } from 'lodash';

const inpute = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
let inputeValue = '';
const mainURL = 'https://restcountries.com/v3.1/name/';

const DEBOUNCE_DELAY = 300;

inpute.addEventListener('inpute',  debounce(showCountres, DEBOUNCE_DELAY));

function showCountres(event) {
	inputeValue = event.target.value;
	inputeValue.trim();

	if (inputeValue === '') {
		return;
	}
	else {
		fetchCountries(inputeValue).then(result => { renderCountries(result) })
			.catch(error => {
				console.log('error :>> ', error);
				error;
		})
	}
	// const searchedCountry = fetchCountries();
	// renderCountries(searchedCountry);
}