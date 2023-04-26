import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listOfProducts = await fetchProductsList('computador');
const productsContainer = document.querySelector('.products');
const containerSection = document.querySelector('.container');

listOfProducts.forEach((product) => {
  const productEl = createProductElement(product);
  productsContainer.appendChild(productEl);
});

function showLoadingMessage() {
  const loading = document.createElement('div');
  loading.classList.add('loading');
  loading.textContent = 'carregando...';
  containerSection.insertBefore(loading, containerSection.querySelector('.products'));
  loading.style.display = 'block';
}

function hideLoadingMessage() {
  const loadingEl = document.querySelector('.loading');
  if (loadingEl) {
    loadingEl.parentNode.removeChild(loadingEl);
  }
}

async function fetchApi() {
  showLoadingMessage();
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoadingMessage();
  }
}

fetchApi();
