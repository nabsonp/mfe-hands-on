import axios from "axios";
import {
  saveTokenToLocalStorage,
  removeTokenFromLocalStorage,
} from "@nabstore/utils";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

const login = async ({ email, password }) => {
  const res = await api.post(
    `/login`,
    { email, senha: password },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  saveTokenToLocalStorage(res.data.token);
  return res.data.usuario;
};

const logout = async () => {
  const res = await api.get(`/logout`);
  removeTokenFromLocalStorage();
  return res.data;
};

const createUsuario = async ({ nome, email, senha, tipoUsuarioId }) => {
  const res = await api.post(
    `/usuarios`,
    {
      nome,
      email,
      senha,
      tipoUsuarioId,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const fetchEnderecos = async () => {
  const res = await api.get(`/enderecos`);
  return res.data;
};

const createEndereco = async ({
  logradouro,
  bairro,
  numero,
  cidade,
  uf,
  cep,
}) => {
  const res = await api.post(
    `/enderecos`,
    {
      logradouro,
      bairro,
      numero,
      cidade,
      uf,
      cep,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const apiMethods = {
  createEndereco,
  createUsuario,
  fetchEnderecos,
  login,
  logout,
};

export default apiMethods;
