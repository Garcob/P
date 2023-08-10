export const renderCountries = function (countries) {
  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    console.log(country)
    countryList += ´
      <div clss="country">
        <img class="country__flag" src=
      </div>
    ´
  })

  countryListElement.innerHTML = countryList
}