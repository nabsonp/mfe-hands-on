import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

const createProduto = async (formData) => {
  const res = await api.post(`/produtos`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

const fetchProdutos = async (page) => {
  const res = await api.get(`/produtos?page=${page ? page : 1}`);
  return res.data;
};

const fetchProdutoById = async (id) => {
  console.log(id, 'por')
  const res = await api.get(`/produtos/${id}`);
  return res.data;
};

const fetchOfertas = async () => {
  const res = await api.get(`produtos/ofertas`);
  return res.data;
};

const editProduto = async ({ id, nome, descricao, preco, estoque }) => {
  const res = await api.put(`/produtos/${id}`, {
    nome,
    descricao,
    preco,
    estoque,
  });
  return res.data;
};

const deleteProduto = async (id) => {
  const res = await api.delete(`/produtos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

const getImageUrl = (produtoId) => {
  return `${process.env.API_BASE_URL}/produtos/${produtoId}/image`;
};

const apiMethods = {
  createProduto,
  deleteProduto,
  editProduto,
  fetchProdutoById,
  fetchProdutos,
  fetchOfertas,
  getImageUrl,
};

export default apiMethods;
