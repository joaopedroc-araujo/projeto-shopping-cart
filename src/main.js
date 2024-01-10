/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-use-before-define */
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const containerSection = document.querySelector('.container');
const productsContainer = document.querySelector('.products');

const observer = new MutationObserver(calculateTotal);
const config = { childList: true };
const targetNode = document.querySelector('.cart__products');

observer.observe(targetNode, config);

async function selectElements() {
  // const product = document.querySelectorAll('.product');
  const cartList = document.querySelector('.cart__products');
  const cartBtns = document.querySelectorAll('.product__add');
  cartBtns.forEach((button) => button.addEventListener('click', async () => {
    const id = button.closest('.product').querySelector('.product__id').textContent;
    // console.log(id);
    saveCartID(id);
    const showProductDetails = await (fetchProduct(id));
    // console.log(showProductDetails);
    const renderCartProducts = createCartProductElement({
      id: showProductDetails.id,
      title: showProductDetails.title,
      price: showProductDetails.price,
      pictures: showProductDetails.pictures,
    });
    cartList.appendChild(renderCartProducts);
  }));
}

async function renderProducts() {
  const listOfProducts = await fetchProductsList('computador');
  listOfProducts.forEach((product) => {
    const productEl = createProductElement(product);
    productsContainer.appendChild(productEl);
  });
  selectElements();
  // eslint-disable-next-line no-use-before-define
  calculateTotal();
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

async function listLocalStorageCart() {
  const ids = getSavedCartIDs();
  console.log(ids);
  const listOfProducts = document.querySelector('.cart__products');
  const savedPromisses = ids.map(fetchProduct);
  // console.log(savedPromisses);
  const cartProductsList = await Promise.all(savedPromisses);
  // console.log(cartProductsList);
  cartProductsList.forEach((product) => {
    const cartProduct = createCartProductElement(product);
    listOfProducts.appendChild(cartProduct);
  });
}

async function calculateTotal() {
  const cartProducts = getSavedCartIDs();
  // console.log(cartProducts)
  let total = 0;

  const productPromises = cartProducts.map(fetchProduct);
  const products = await Promise.all(productPromises);
  // console.log(products)

  // eslint-disable-next-line no-return-assign
  products.forEach(({ price }) => (total += price));

  // console.log(total)

  const totalPriceElement = document.querySelector('.total-price');
  totalPriceElement.textContent = total.toFixed(2);
}

window.onload = () => {
  fetchApi();
  listLocalStorageCart();
  renderProducts();
};
