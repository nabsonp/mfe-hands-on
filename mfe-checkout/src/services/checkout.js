const CARDS = [
  {
      id: 1,
      number: "4111 1111 1111 1111",
      apelido: "Cartão Principal",
      validade: "12/25",
      cvv: "123",
      titular: "João da Silva"
  },
  {
      id: 2,
      number: "5500 0000 0000 0004",
      apelido: "Cartão Adicional",
      validade: "11/24",
      cvv: "456",
      titular: "Maria Oliveira"
  },
  {
      id: 3,
      number: "3400 0000 0000 009",
      apelido: "Cartão Empresarial",
      validade: "10/26",
      cvv: "789",
      titular: "Carlos Pereira"
  },
  {
      id: 4,
      number: "6011 0000 0000 0004",
      apelido: "Cartão de Viagem",
      validade: "09/23",
      cvv: "321",
      titular: "Ana Costa"
  },
  {
      id: 5,
      number: "3759 8765 4320 101",
      apelido: "Cartão Internacional",
      validade: "08/27",
      cvv: "654",
      titular: "Lucas Almeida"
  }
];

const PURCHASES = [
  {
      id: 1,
      userId: 1,
      enderecoId: 1,
      cartaoId: 1,
      total: 59.98,
      CompraItems: [
          {
              id: 1,
              quantidade: 2,
              Produto: {
                preco: 29.99,
                nome: "Funko Pop! - Darth Vader",
              },
          },
      ],
      Cartao: {
          id: 1,
          number: "4111 1111 1111 1111",
          apelido: "Cartão Principal",
          validade: "12/25",
          cvv: "123",
          titular: "João da Silva"
      },
      Endereco: {
        id: 1,
        logradouro: "Rua 10 de Julho",
        bairro: "Centro",
        numero: "123",
        cidade: "Manaus",
        uf: "AM",
        cep: "69010-050"
      },
      createdAt: "2024-10-14T11:00:00Z",
      estimatedDeliveryDate: "2024-11-20T11:00:00Z",
      deliveredAt: null,
  },
  {
      id: 2,
      userId: 1,
      enderecoId: 1,
      cartaoId: 2,
      total: 304.96,
      CompraItems: [
          {
              id: 3,
              quantidade: 1,
              Produto: {
                preco: 34.99,
                nome: "Jogos de Tabuleiro - Catan",
              },
          },
          {
              id: 4,
              quantidade: 3,
              Produto: {
                preco: 89.99,
                nome: "Coleção de Mangás - One Piece",
              },
          }
      ],
      Cartao: {
          id: 2,
          number: "5500 0000 0000 0004",
          apelido: "Cartão Adicional",
          validade: "11/24",
          cvv: "456",
          titular: "Maria Oliveira"
      },
      Endereco: {
        id: 1,
        logradouro: "Rua 10 de Julho",
        bairro: "Centro",
        numero: "123",
        cidade: "Manaus",
        uf: "AM",
        cep: "69010-050"
      },
      createdAt: "2024-09-14T11:00:00Z",
      estimatedDeliveryDate: "2024-11-20T11:00:00Z",
      deliveredAt: null,
  },
  {
      id: 3,
      userId: 1,
      enderecoId: 1,
      cartaoId: 1,
      total: 399.98,
      CompraItems: [
          {
              id: 5,
              quantidade: 1,
              Produto: {
                preco: 299.99,
                nome: "Console - Nintendo Switch",
              },
          },
          {
              id: 6,
              quantidade: 2,
              Produto: {
                preco: 49.99,
                nome: "Action Figure - Iron Man",
              },
          }
      ],
      Cartao: {
          id: 1,
          number: "4111 1111 1111 1111",
          apelido: "Cartão Principal",
          validade: "12/25",
          cvv: "123",
          titular: "João da Silva"
      },
      Endereco: {
        id: 1,
        logradouro: "Rua 10 de Julho",
        bairro: "Centro",
        numero: "123",
        cidade: "Manaus",
        uf: "AM",
        cep: "69010-050"
      },
      createdAt: "2024-08-14T11:00:00Z",
      estimatedDeliveryDate: "2024-11-20T11:00:00Z",
      deliveredAt: null,
  },
];


const createCartao = async ({ number, apelido, validade, cvv, titular }) => {
  return Promise.resolve(CARDS[0]);
};

const createCompra = async ({ userId, cartaoId, enderecoId, produtos }) => {
  return Promise.resolve(PURCHASES[0]);
};

const fetchCartoes = async () => {
  return Promise.resolve(CARDS);
};

const fetchCompras = async () => {
  return Promise.resolve(PURCHASES);
};

const fetchCompraById = async (id) => {
  return Promise.resolve(PURCHASES.find(purchase => purchase.id === Number(id)));
};

const getEstimativaEntrega = async (cep) => {
  const dataAtual = new Date();
  const diasAleatorios = Math.floor(Math.random() * 30);
  dataAtual.setDate(dataAtual.getDate() + diasAleatorios);
  return { estimatedDeliveryDate: dataAtual.toISOString(), preco: Math.random() * 20 };
};

const checkoutMethods = {
  createCartao,
  createCompra,
  fetchCartoes,
  fetchCompras,
  fetchCompraById,
  getEstimativaEntrega,
};

export default checkoutMethods;
