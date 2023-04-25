import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listOfProducts = await fetchProductsList('computador');
const productsContainer = document.querySelector('.products');

listOfProducts.forEach((product) => {
  const productEl = createProductElement(product);
  productsContainer.appendChild(productEl);
});
