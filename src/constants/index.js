
export const coffeeCountries = ["Brazil", "Vietnam", "Colombia", "Indonesia", "Ethiopia", "Honduras", "India", "Uganda", "Mexico", "Guatemala", "Peru", "Nicaragua", "China", "Ivory Coast", "Costa Rica", "Kenya", "Papua New Guinea", "Tanzania", "El Salvador", "Ecuador", "Cameroon", "Laos", "Madagascar", "Gabon", "Thailand", "Venezuela", "Dominican Republic", "Haiti", "Democratic Republic of the Congo", "Rwanda", "Burundi", "Philippines", "Togo", "Guinea", "Yemen", "Cuba", "Panama", "Bolivia", "Timor Leste", "Central African Republic", "Nigeria", "Ghana", "Sierra Leone", "Angola", "Jamaica", "Paraguay", "Malawi", "Trinidad and Tobago", "Zimbabwe", "Liberia", "Zambia"]
/* Source: https://en.wikipedia.org/wiki/List_of_countries_by_coffee_production
 * In Chrome console, select each country using quick-and-dirty jQuery:
 * const countries = Object.values($('td > a').filter($('a[title="Coffee"]')).prevObject).map(e => e.innerText).filter(e => e)
 * copy(countries)
 */
export const includes = (list, find) => list.includes(find)
export const split = (string, del) => string.split(del)
export const START = 'START';
export const convertMin = (sec) => (sec - sec % 60) / 60;
export const convertSec = (sec) => (sec % 60);
export const displayMin = (sec) => convertMin(sec) > 0 ? convertMin(sec) : '';
export const displaySec = (sec) => `${convertSec(sec)}`.length <= 1 ? `0${convertSec(sec)}` : convertSec(sec);
export const isCountry = list => includes(coffeeCountries, split(list, /\s/g))
