import React, { ReactChildren, ReactChild } from "react";
import { Navigate } from "react-router-dom";
import { useGlobleContext } from "../context/context";

interface Props {
  children: ReactChildren | ReactChild;
}

export default function PrivateRoute({ children }: Props) {
  const { state } = useGlobleContext();
  return <>{state.user ? <Navigate to="/" /> : children}</>;
}
