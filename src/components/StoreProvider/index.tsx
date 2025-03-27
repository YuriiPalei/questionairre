"use client";

import React, { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { Store } from "@/types/store";
import makeStore from "@/lib/store";

const StoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<Store | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
