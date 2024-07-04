import React from "react";
import UserUnauthenticated from "../Error/UserUnauthenticated";
import { Navigate } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoutes({ isLoggedIn, children }: Props) {
  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return (
      <>
        {/* <UserUnauthenticated position="relative" /> */}
        {children}
      </>
    );
  }
}
