import axios from 'axios';
export function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
