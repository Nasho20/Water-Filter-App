import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import UserUnauthenticated from "../Error/UserUnauthenticated";
import { useAppSelector } from "../../store/hooks";
import { Outlet } from "react-router-dom";

export default function DashBody() {
  const { token } = useAppSelector((state: any) => state.auth);

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const changeMobileMenu = (open: boolean) => {
    setMobileMenuOpen(open);
  };

  // if (!token) {
  //   return <UserUnauthenticated position="relative" />;
  // }

  return (
    <div style={{ minHeight: "100vh" }} className="d-flex">
      <Sidebar />
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          backgroundColor: "#f2f2f2",
        }}
        className="w-100"
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
