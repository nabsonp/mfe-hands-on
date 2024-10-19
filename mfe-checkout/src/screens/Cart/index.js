import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Info, Total } from "./styles";
import { currencyFormatter, isAuthenticated, routes } from "@nabstore/utils";
import { Anchor, Button, Typography } from "@nabstore/styleguide";
import { BestOffersFragment } from "@nabstore/mfe-products";
import CartProduct from "../../components/CartProduct";

const Cart = ({
  addProductToCartAction,
  cleanCartAction,
  removeProductFromCartAction,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => ({
    cart: state.cart,
  }));
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.produtos.reduce(
        (prev, actual) => prev + actual.qtd * actual.precoUnit,
        0
      )
    );
  }, [cart]);

  const handleComprar = () => {
    if (isAuthenticated()) {
      navigate(routes.CARDS);
    } else {
      navigate(routes.LOGIN);
    }
  };

  const addProductToCart = (data) => {
    dispatch(addProductToCartAction(data));
  };

  return (
    <div className="container pb-5">
      <Anchor.GoBack path={routes.HOME} text="Voltar aos produtos" />

      <div className="d-flex justify-content-center">
        <Typography.Title>Meu Carrinho</Typography.Title>
      </div>

      {cart.produtos.length === 0 ? (
        <Info className="d-flex justify-content-center mt-5">
          Seu carrinho está vazio.
        </Info>
      ) : (
        <>
          <div className="d-flex flex-column align-items-center">
            {cart.produtos.map((produto) => (
              <CartProduct
                key={produto.id}
                produto={produto}
                removeProductFromCartAction={removeProductFromCartAction}
              />
            ))}
          </div>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <Total>Total: {currencyFormatter(total)}</Total>
          </div>

          <div className="card-body d-flex justify-content-center mb-5 mt=4">
            <Button.Danger
              width="40%"
              onClick={() => dispatch(cleanCartAction())}
            >
              Limpar Carrinho
            </Button.Danger>

            <Button.Secondary
              width="45%"
              margin="0 10px"
              onClick={handleComprar}
            >
              Continuar
            </Button.Secondary>
          </div>
        </>
      )}

      <BestOffersFragment addProductToCart={addProductToCart} cart={cart} />
    </div>
  );
};

export default Cart;
