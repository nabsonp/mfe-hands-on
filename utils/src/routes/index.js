import checkoutRoutes from "./checkout";
import productsRoutes from "./products";
import usersRoutes from "./users";
import monolitoRoutes from "./monolito";



const routes = {
    /* monolito */
    ABOUT: monolitoRoutes.ABOUT,

    /* mfe-users */
    LOGIN: usersRoutes.LOGIN,
    SIGNUP: usersRoutes.SIGNUP,
    ENDERECOS: usersRoutes.ENDERECOS,
    CREATE_COLABORADOR: usersRoutes.CREATE_COLABORADOR,

    HOME: productsRoutes.PRODUTOS,
    PRODUTO: productsRoutes.PRODUTO,

    /* mfe-checkout */
    CART: checkoutRoutes.CART,
    CHECKOUT: checkoutRoutes.CHECKOUT,
    CARDS: checkoutRoutes.CARDS,
    COMPRAS: checkoutRoutes.COMPRAS,
    COMPRA: checkoutRoutes.COMPRA,
}

export default routes;