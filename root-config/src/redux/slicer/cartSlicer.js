import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "cart";

const initialState = localStorage.getItem(CART_KEY)
  ? JSON.parse(localStorage.getItem(CART_KEY))
  : {
      produtos: [],
      enderecoEscolhido: undefined,
      cartaoEscolhido: undefined,
    };

export const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduto: (state, action) => {
      const newProdutos = state.produtos.filter(
        (prod) => prod.id !== action.payload.id
      );

      const newCart = {
        ...state,
        produtos: [
          ...newProdutos,
          {
            id: action.payload.id,
            qtd: action.payload.qtd,
            precoUnit: action.payload.precoUnit,
            nome: action.payload.nome,
          },
        ],
      };

      localStorage.setItem(CART_KEY, JSON.stringify(newCart));

      return newCart;
    },
    removeProduto: (state, action) => {
      const newCart = {
        ...state,
        produtos: state.produtos.filter(
          (prod) => prod.id !== action.payload.id
        ),
      };

      localStorage.setItem(CART_KEY, JSON.stringify(newCart));

      return newCart;
    },
    selectEndereco: (state, action) => {
      const enderecoEscolhido = {
        logradouro: action.payload.logradouro,
        bairro: action.payload.bairro,
        cidade: action.payload.cidade,
        numero: action.payload.numero,
        uf: action.payload.uf,
        cep: action.payload.cep,
        id: action.payload.id,
      }

      const newState = {
        ...state,
        enderecoEscolhido
      }
      localStorage.setItem(CART_KEY, JSON.stringify(newState));

      return newState;
    },
    selectCartao: (state, action) => {
      const cartaoEscolhido = {
        id: action.payload.id,
        number: action.payload.number,
        apelido: action.payload.apelido,
        validade: action.payload.validade,
        cvv: action.payload.cvv,
        titular: action.payload.titular,
      }

      const newState = {
        ...state,
        cartaoEscolhido
      }
      localStorage.setItem(CART_KEY, JSON.stringify(newState));

      return newState;
    },
    cleanCart: (state) => {
      localStorage.removeItem(CART_KEY);
      return {
        produtos: [],
        enderecoEscolhido: undefined,
        cartaoEscolhido: undefined,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduto, removeProduto, cleanCart, selectEndereco, selectCartao } =
  cartSlicer.actions;

export default cartSlicer.reducer;
