import { Route, Routes, Navigate } from "react-router-dom";
import Error404 from "../components/Error404/Error404";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import RegisterScreen from "../components/RegisterScreen/RegisterScreen";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
