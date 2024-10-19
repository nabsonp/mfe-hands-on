import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import {
  Sobre,
} from "../screens";
import Header from "../components/Header";
import { monolitoRoutes } from "@nabstore/utils";
import { logout as logoutAction } from "../redux/slicer/userSlicer";
import 'antd/dist/antd.css';

const WrappedApp = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const WrapperHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <Header
        navigate={navigate}
        user={user}
        logout={() => {
          console.log("logout");
          dispatch(logoutAction());
        }}
        pathname={location.pathname}
      />
    );
  };

  return (
    <BrowserRouter>
      <WrapperHeader />
      <div className="container-sm mt-5">
        <Routes>
          <Route path={monolitoRoutes.ABOUT} element={<Sobre />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const App = () => (
  <Provider store={store}>
    <WrappedApp />
  </Provider>
);

export default App;
