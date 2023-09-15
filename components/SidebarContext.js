"use client";
import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const sideContext = createContext();

export default function SidebarContext({ children }) {
  const [side, setSide] = useState({ buka: false, data: [], beli: [] });

  return (
    <sideContext.Provider value={{ side, setSide }}>
      {children}
    </sideContext.Provider>
  );
}
