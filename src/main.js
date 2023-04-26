import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productsContainer = document.querySelector('.products');
const containerSection = document.querySelector('.container');

async function renderProducts() {
  try {
    const listOfProducts = await fetchProductsList('computador');
    listOfProducts.forEach((product) => {
      const productEl = createProductElement(product);
      productsContainer.appendChild(productEl);
    });
  } catch (error) {
    console.error(error);
  }
}

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

function showErrorMessage() {
  const errorEl = document.createElement('div');
  errorEl.classList.add('error');
  errorEl.textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';
  containerSection.insertBefore(errorEl, containerSection.querySelector('.products'));
}

const errorEl = document.querySelector('.error');
if (errorEl) {
  errorEl.parentNode.removeChild(errorEl);
}

async function fetchApi() {
  showLoadingMessage();
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    showErrorMessage();
  } finally {
    hideLoadingMessage();
  }
}

fetchApi();
renderProducts();
