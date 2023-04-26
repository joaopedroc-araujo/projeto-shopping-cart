export const fetchProduct = async () => {

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
