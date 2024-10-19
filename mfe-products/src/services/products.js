const PRODUCTS = [
  {
      id: 1,
      nome: "Funko Pop! - Darth Vader",
      estoque: 120,
      descricao: "Figura colecionável do icônico Darth Vader do Star Wars.",
      preco: 29.99, // R$ 29,99
      image: "https://m.media-amazon.com/images/I/61s6vlqz-LL._AC_UF894,1000_QL80_.jpg"
  },
  {
      id: 2,
      nome: "Camiseta - Marvel Avengers",
      estoque: 75,
      descricao: "Camiseta estampada com os heróis dos Vingadores da Marvel.",
      preco: 19.99, // R$ 19,99
      image: "https://dw0jruhdg6fis.cloudfront.net/producao/25791363/G/camiseta_azul_marinho.jpg"
  },
  {
      id: 3,
      nome: "Jogos de Tabuleiro - Catan",
      estoque: 45,
      descricao: "Um divertido jogo de estratégia e comércio.",
      preco: 34.99, // R$ 34,99
      image: "https://images.tcdn.com.br/img/img_prod/558884/catan_o_jogo_de_tabuleiro_devir_bgcatan3_888869723_2_6afb2cacbcdf43b9bbaca80b43b76c84.jpg"
  },
  {
      id: 4,
      nome: "Coleção de Mangás - One Piece",
      estoque: 60,
      descricao: "Coleção de volumes do famoso mangá One Piece.",
      preco: 89.99, // R$ 89,99
      image: "https://http2.mlstatic.com/D_NQ_NP_963726-MLB50111831965_052022-O.webp"
  },
  {
      id: 5,
      nome: "Console - Nintendo Switch",
      estoque: 30,
      descricao: "Console de videogame híbrido com uma vasta biblioteca de jogos.",
      preco: 299.99, // R$ 299,99
      image: "https://m.media-amazon.com/images/I/61-HKEUNy-L._AC_UF1000,1000_QL80_.jpg"
  },
  {
      id: 6,
      nome: "Action Figure - Iron Man",
      estoque: 80,
      descricao: "Figura de ação do super-herói Iron Man da Marvel.",
      preco: 49.99, // R$ 49,99
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvEZN6-esv8hhOoyLYJvR4KBCmTZt8JNrpA&s"
  },
  {
      id: 7,
      nome: "Pôster - Star Wars",
      estoque: 40,
      descricao: "Pôster decorativo do filme Star Wars.",
      preco: 15.99, // R$ 15,99
      image: "https://img.elo7.com.br/product/main/2C25EDD/big-poster-filme-star-wars-os-ultimos-jedi-lo01-90x60-cm-star-wars.jpg"
  },
  {
      id: 8,
      nome: "Bola de futebol - Pokémon",
      estoque: 25,
      descricao: "Bola de futebol com design inspirado em Pokémon.",
      preco: 39.99, // R$ 39,99
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0G2TB9k_R5ZFzSvpE5u-jhfQ8WXl59eHiQ&s"
  },
];


const createProduto = async (formData) => {
  return Promise.resolve(PRODUCTS[0]);
};

const fetchProdutos = async (page) => {
  return Promise.resolve(PRODUCTS);
};

const fetchProdutoById = async (id) => {
  return Promise.resolve(PRODUCTS.find(prod => prod.id === Number(id)));
};

const fetchOfertas = async () => {
  return Promise.resolve(PRODUCTS.slice(0, 3));
};

const editProduto = async ({ id, nome, descricao, preco, estoque }) => {
  return Promise.resolve(PRODUCTS[0]);
};

const deleteProduto = async (id) => {
  return Promise.resolve(PRODUCTS[0]);
};

const getImageUrl = (produtoId) => {
  return PRODUCTS.find(prod => prod.id === Number(produtoId)).image;
};

const productsMethods = {
  createProduto,
  deleteProduto,
  editProduto,
  fetchProdutoById,
  fetchProdutos,
  fetchOfertas,
  getImageUrl,
};

export default productsMethods;
