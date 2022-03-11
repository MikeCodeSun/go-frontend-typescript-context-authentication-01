import React, { ReactChild, ReactChildren } from "react";
import { Navigate } from "react-router-dom";
import { useGlobleContext } from "../context/context";

interface Props {
  children: ReactChild | ReactChildren;
}

export default function LoginRoute({ children }: Props) {
  const { state } = useGlobleContext();

  return <>{state.user ? children : <Navigate to="/login" />}</>;
}
