// import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faQuestionCircle,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { isAuthenticated, tipoUsuario, routes } from "@nabstore/utils";
import { Link } from "@reach/router";

const Header = ({ user, logout, navigate, pathname }) => {
  const handleLogout = () => {
    logout();
    if (pathname === routes.HOME) {
      navigate(0);
    } else {
      navigate(routes.HOME);
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-sm">
        <div className="container-fluid">
          <div className="float-start">
            <Link className="navbar-brand" to={routes.HOME}>
              <img src="/logo.svg" alt="" />
            </Link>
          </div>
          <div className="float-end">
            <ul className="navbar-nav">
              {user.tipoUsuarioId === tipoUsuario.COLABORADOR ? (
                <li className="nav-item">
                  <Link className="nav-link" to={routes.CREATE_COLABORADOR}>
                    Add Colaborador
                    <FontAwesomeIcon className="ms-2" icon={faPlusCircle} />
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li className="nav-item">
                <Link className="nav-link" to={routes.ABOUT}>
                  Sobre
                  <FontAwesomeIcon className="ms-2" icon={faQuestionCircle} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.CART}>
                  Carrinho{" "}
                  <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
                </Link>
              </li>
              {!isAuthenticated() ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={routes.LOGIN}>
                      Login
                      <FontAwesomeIcon className="ms-2" icon={faSignInAlt} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={routes.SIGNUP}>
                      Sign Up
                      <FontAwesomeIcon className="ms-2" icon={faUserPlus} />
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a onClick={handleLogout} className="nav-link" href="#">
                    {user.nome}{" "}
                    <FontAwesomeIcon className="ms-2" icon={faSignOutAlt} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
