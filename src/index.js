import axios from 'axios';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfoContainer = document.querySelector('.cat-info');

// Dodanie nasłuchiwania na zdarzenie zmiany dla select
breedSelect.addEventListener('change', handleSelectChange);

function handleSelectChange(event) {
  const breedId = event.target.value;
}
