import Notiflix from "notiflix";
const fetchLink = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
	return fetch(`${fetchedLink}${name}`)
		.then(responce => {
			if (!responce.ok) {
				throw new Error();
			}
			return responce.json();
		})
		.catch(error => {
			console.log('error :>> ', error);
			return Notiflix.Notify.failure('Oops, there is no country with that name');
		});
}

export default fetchCountries;