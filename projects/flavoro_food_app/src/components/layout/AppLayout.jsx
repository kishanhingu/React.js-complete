import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
