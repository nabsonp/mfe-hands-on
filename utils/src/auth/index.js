export const TOKEN_KEY = "@nabstore-Token";

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token === null) {
    return false;
  }

  return true;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const authFunctions = {
  getToken,
  isAuthenticated,
  saveTokenToLocalStorage,
  removeTokenFromLocalStorage,
};

export default authFunctions;
