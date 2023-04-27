export const fetchProduct = async (ProductID) => {
  if (!ProductID) {
    throw new Error('ID não informado');
  }
  const API_URL = `https://api.mercadolibre.com/items/${ProductID}`;
  const response = await fetch(API_URL);
  const data = await response.json();
  // console.log(data);
  return data;
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

// listLocalStorageCart()
// fetchProduct();
// fetchProduct('MLB1405519561');
