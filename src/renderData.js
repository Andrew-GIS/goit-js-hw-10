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

const countryList = document.querySelector('.country-list');

function renderCountries(countries) {
  console.log('Number of countries :>> ', countries.length);
	if (countries.length >= 10) {
		return Notiflix.Notify.info(`Too many matches found - ${countries.length}. Please enter a more specific name.`);
	}
	else if (countries.length >= 2 && countries.length < 10) { 
		const markup = countries.map(country => {
      return `<li class="country-item"><img class="country-item__flag" src="${country.flags.svg}"/>
                  <p class="country-item__name">${country.name.official}</p>
              </li>`;
		}).join('');
		return countryList.insertAdjacentHTML('beforeend', markup);
		
	}
	else if (countries.length === 1) {
    const markup = `<li class="country-deteiled-info">
                      <div class="country-item">
                        <img src="${countries[0].flags.svg}" class="country-item__flag-big">
                        <h1 class="country-item__name">${countries[0].name.official}</h1>
                      </div>
                      <div class="country-item__fullinfo">
                        <p class="country-item__title">Capital: <span class="country-item__text">${countries[0].capital}</span></p>
                        <p class="country-item__title">Population: <span class="country-item__text">${countries[0].population} peoples</span></p>
                        <p class="country-item__title">Language: <span class="country-item__text">${Object.values(countries[0].languages)[0]}</span></p>
                      </div>
                    </li>`;
    return countryList.insertAdjacentHTML('beforeend', markup);
  }
}

export default renderCountries;