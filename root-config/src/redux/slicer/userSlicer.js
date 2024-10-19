import { createSlice } from "@reduxjs/toolkit";
import { tipoUsuario } from "@nabstore/utils";

const USER_KEY = "user";

const initialState = localStorage.getItem(USER_KEY)
  ? JSON.parse(localStorage.getItem(USER_KEY))
  : {
      id: "",
      nome: "",
      tipoUsuarioId: tipoUsuario.CLIENTE,
    };

export const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const data = {
        id: action.payload.id,
        nome: action.payload.nome,
        tipoUsuarioId: action.payload.tipoUsuarioId,
      };

      localStorage.setItem(USER_KEY, JSON.stringify(data));

      return data;
    },
    logout: (state) => {
      localStorage.clear();
      
      return {
        id: "",
        nome: "",
        tipoUsuarioId: tipoUsuario.CLIENTE,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlicer.actions;

export default userSlicer.reducer;
