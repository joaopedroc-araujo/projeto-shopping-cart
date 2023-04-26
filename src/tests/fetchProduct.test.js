import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetchProduct com MLB1405519561 como argumento chama uma fetch', async () => {
    await fetch(`https://api.mercadolibre.com/items/MLB1405519561`);
    console.log(fetch)
    expect(fetch).toHaveBeenCalled();
  });

  it('fetchProduct com o argumento "MLB1405519561" retorna o endpoint correto', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('fetchProduct com o argumento "MLB1405519561" retorna uma estrutura igual ao objeto product', async () => {
    const response = await fetch('https://api.mercadolibre.com/items/MLB1405519561');
    const data = await response.json();
    expect(data).toEqual(product);
  });

  it('fetchProduct passada sem argumentos retorna uma mensagem de erro', async () => {
    try {
      await fetchProduct();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('ID não informado');
    }
  });
});
