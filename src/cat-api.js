import axios from 'axios';

//fetchBreeds() wysyła zapytanie na serwer i pobiera tablicę obiektów
export function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}

//fetchCatByBreed() pobiera konkretne ID kota z serwera
export function fetchCatByBreed(breedId) {
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      const catID = response.data[0];
    })
    .catch(error => {
      console.error(error);
    });
}
