import {
  saveTokenToLocalStorage,
  removeTokenFromLocalStorage,
} from "@nabstore/utils";

const USER = {
  id: 1,
  nome: "Nabson Paiva",
  email: "nabson@gmail.com",
  tipoUsuarioId: 1,
};

const ADDRESS = [
  {
      id: 1,
      logradouro: "Rua 10 de Julho",
      bairro: "Centro",
      numero: "123",
      cidade: "Manaus",
      uf: "AM",
      cep: "69010-050"
  },
  {
      id: 2,
      logradouro: "Avenida Getúlio Vargas",
      bairro: "Centro",
      numero: "456",
      cidade: "Manaus",
      uf: "AM",
      cep: "69045-900"
  },
  {
      id: 3,
      logradouro: "Rua Marquês de Santa Cruz",
      bairro: "Petrópolis",
      numero: "789",
      cidade: "Manaus",
      uf: "AM",
      cep: "69050-130"
  },
];


const login = async ({ email, password }) => {
  if (email !== USER.email || password !== '12345678') {
    return Promise.reject({
      response: {
        status: 400,
        data: {
          message: 'Usuário ou senha inválidos',
        },
      },
    });
  }

  saveTokenToLocalStorage('TOKEN');
  return Promise.resolve(USER);
};

const logout = async () => {
  removeTokenFromLocalStorage();
  return Promise.resolve(USER);
};

const createUsuario = async ({ nome, email, senha, tipoUsuarioId }) => {
  return Promise.resolve(USER);
};

const fetchEnderecos = async () => {
  return Promise.resolve(ADDRESS);
};

const createEndereco = async ({
  logradouro,
  bairro,
  numero,
  cidade,
  uf,
  cep,
}) => {
  return Promise.resolve(ADDRESS[0]);
};

const usersMethods = {
  createEndereco,
  createUsuario,
  fetchEnderecos,
  login,
  logout,
};

export default usersMethods;
