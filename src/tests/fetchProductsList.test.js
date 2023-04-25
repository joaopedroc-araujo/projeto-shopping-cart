import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

const ENDPOINTS = {
  PRODUCT: 'https://api.mercadolibre.com/items/MLB1405519561',
  SEARCH: 'https://api.mercadolibre.com/sites/MLB/search?q=computador',
};

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(ENDPOINTS.SEARCH);
  });

  it('fetchProductsList com argumento computador retorna uma estutura de dados igual ao objeto computadorSearch', async () => {
    const fetchedProduct = await fetchProductsList('computador');
    expect(fetchedProduct).toEqual(computadorSearch);
  });

  it('fetchProductsList sem argumento retorna um erro com mensagem', async () => {
    try {
      await fetchProductsList();
    } catch (error) {
      expect(error.message).toBe('Termo de busca não informado');
    }
  });
});
