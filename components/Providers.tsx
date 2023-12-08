"use client";

import CartContextProvider from "@/context/cart-context";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default Providers;
