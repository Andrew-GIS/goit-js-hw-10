import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: '300px',
  position: 'top-right',
  distance: '10px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '20px',
});

const mainLink = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
	return fetch(`${mainLink}${name}`)
		.then(responce => {
			if (!responce.ok) {
				throw new Error();
			}
			return responce.json();
		})
		.catch(error => {
			console.log('error :>> ', error);
			return Notiflix.Notify.failure(`Oops, there is no country with "${name}" name`);
		});
}

export default fetchCountries;