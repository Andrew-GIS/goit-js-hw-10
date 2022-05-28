import './css/styles.css';
import fetchCountries from './fetchCountries';
import renderCountries from './renderData';
import debounce from 'lodash.debounce';

const inpute = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
let inputeValue = '';
const DEBOUNCE_DELAY = 300;

inpute.addEventListener('input',  debounce(showCountres, DEBOUNCE_DELAY));

function showCountres(event) {
	inputeValue = event.target.value;
	inputeValue.trim();
	countryList.innerHTML = '';
	console.log('inputeValue :>> ', inputeValue);
	if (inputeValue === '') {
		console.log('return :>> empty ');
		return;
	}
	else {
		fetchCountries(inputeValue)
			.then(result => { renderCountries(result) })
			.catch(error => {
				console.log('error :>> ', error);
				error;
		})
	}
}