import { createTestScheduler } from 'jest';
import { saveCartID } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const containerSection = document.querySelector('.container');
const productsContainer = document.querySelector('.products');

async function selectElements() {
  // const product = document.querySelectorAll('.product');
  const cartList = document.querySelectorAll('.cart__products')
  const cartBtns = document.querySelectorAll('.product__add');
  cartBtns.forEach((button) =>
    button.addEventListener('click', async () => {
      // Com os dados do produtos retornados, você deve adicionar o produto ao carrinho de compras, utilize a função createCartProductElement (que se encontra no arquivo shopFunction.js) para criar os componentes HTML referentes a um produto do carrinho;
      // Adicione o elemento retornado da função createCartElement(product) como filho do elemento <ol class="cart__products">.
      const id = button.closest('.product').querySelector('.product__id').textContent;
      // console.log(id);
      saveCartID(id);
      const showProductDetails = await (fetchProduct(id));
      // console.log(showProductDetails);
      const renderCartProducts = createCartProductElement({
        id: showProductDetails.id,
        title: showProductDetails.title,
        price: showProductDetails.price,
        pictures: showProductDetails.pictures
      });
      cartList.appendChild(showProductDetails)
    }));
}

async function renderProducts() {
  try {
    const listOfProducts = await fetchProductsList('computador');
    listOfProducts.forEach((product) => {
      const productEl = createProductElement(product);
      productsContainer.appendChild(productEl);
    });
    selectElements();
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
