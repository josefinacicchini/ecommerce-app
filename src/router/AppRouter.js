import { BrowserRouter } from "react-router-dom";
// import Loader from "../components/Loader/Loader";
import { useLoginContext } from "../context/LoginContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const { user } = useLoginContext();
  return (
    <BrowserRouter>
      {/* user.loaded && */}

      {user.logged ? <PrivateRoutes /> : <PublicRoutes />}
      {/* {!user.loaded && <Loader />} */}
    </BrowserRouter>
  );
};

export default AppRouter;
