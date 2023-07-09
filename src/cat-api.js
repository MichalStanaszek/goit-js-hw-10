import axios from 'axios';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfoContainer = document.querySelector('.cat-info');
const url = 'https://api.thecatapi.com/v1/breeds';
const apiKey =
  'live_HlIOy0zcfezhfHUXznjThXXmpIUKAJ90Tj3QthYf4iphxUH2lPkRN3O4iSlFd4My';

axios.defaults.headers.common['x-api-key'] = apiKey;

// fetchBreeds() wysyła zapytanie na serwer i pobiera tablicę obiektów
export function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      const breeds = response.data;
      fillBreedSelect(breeds);
    })
    .catch(error => {
      console.error(error);
    });
}

// Funkcja wypełniająca select opcjami ras kotów
function fillBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}
const breeds = fetchBreeds();

// //fetchCatByBreed() pobiera konkretne ID kota z serwera
// export function fetchCatByBreed(breedId) {
//   axios
//     .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
//     .then(response => {
//       const catInfo = response.data[0];
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }
