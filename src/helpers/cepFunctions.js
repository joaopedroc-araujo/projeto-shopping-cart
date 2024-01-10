export const getAddress = (cep) => (
  (async () => {
    const firstURL = `https://cep.awesomeapi.com.br/json/${cep}`;
    const secondURL = `https://brasilapi.com.br/api/cep/v2/${cep}`;

    try {
      const response = await Promise.any([fetch(firstURL), fetch(secondURL)]);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  })()
);

export const searchCep = async () => {
  // seu código aqui
  const cepInput = document.querySelector('.cep-input');
  const cep = cepInput.value;
  const cepLength = 8;

  if (cep.length !== cepLength) {
    alert('CEP inválido');
  }

  const address = await getAddress(cep);

  if (!address) {
    document.querySelector('.cart__address').textContent = 'CEP não encontrado';
  } else {
    document.querySelector('.cart__address')
      .textContent = `${address.street || address.address} - ${address
        .neighborhood || address.district} - ${address.city} - ${address.state}`;
  }
};
