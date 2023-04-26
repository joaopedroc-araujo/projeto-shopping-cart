export const fetchProduct = async (ProductID) => {
  try {
    if (!ProductID) {
      throw new Error('ID não informado');
    }
    const API_URL = `https://api.mercadolibre.com/items/${ProductID}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProductsList = async (item) => {
  try {
    if (!item) {
      throw new Error('Termo de busca não informado');
    }

    const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// fetchProduct();
// fetchProduct('MLB1405519561');
