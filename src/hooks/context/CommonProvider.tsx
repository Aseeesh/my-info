"use client";
import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { SiteInfoProvider } from "./SiteInfoContext";
import { store } from "../state/store";

export function CommonProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupListeners(store.dispatch);
  }, []);

  return (
    <ReduxProvider store={store}>
      <SiteInfoProvider>{children}</SiteInfoProvider>
    </ReduxProvider>
  );
}
