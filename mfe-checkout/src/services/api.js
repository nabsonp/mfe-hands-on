import axios from "axios";
import { getToken } from "@nabstore/utils";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

const createCartao = async ({ number, apelido, validade, cvv, titular }) => {
  const res = await api.post(
    `/cartao`,
    {
      number,
      apelido,
      validade,
      cvv,
      titular,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return res.data;
};

const createCompra = async ({ userId, cartaoId, enderecoId, produtos }) => {
  const res = await api.post(
    `/compras`,
    {
      userId,
      enderecoId,
      cartaoId,
      produtos,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return res.data;
};

const fetchCartoes = async () => {
  const res = await api.get(`/cartao`);
  return res.data;
};

const fetchCompras = async () => {
  const res = await api.get(`/compras`);
  return res.data;
};

const fetchCompraById = async (id) => {
  const res = await api.get(`/compras/${id}`);
  return res.data;
};

const getEstimativaEntrega = async (cep) => {
  const res = await api.get(`/entregas?cep=${cep}`);
  return res.data;
};

const getImageUrl = (produtoId) => {
  return `${process.env.API_BASE_URL}/produtos/${produtoId}/image`;
};

const apiMethods = {
  createCartao,
  createCompra,
  fetchCartoes,
  fetchCompras,
  fetchCompraById,
  getEstimativaEntrega,
  getImageUrl,
};

export default apiMethods;
