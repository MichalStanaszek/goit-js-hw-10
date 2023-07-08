import axios from 'axios';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import { fetchBreeds } from './cat-api';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

axios.defaults.headers.common['x-api-key'] =
  'live_HlIOy0zcfezhfHUXznjThXXmpIUKAJ90Tj3QthYf4iphxUH2lPkRN3O4iSlFd4My';
