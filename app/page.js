"use client";
import axios from "axios";
import Navbar from "@/components/Navbar";
import SwipeNavbar from "@/components/SwipeNavbar";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import BoxList from "@/components/BoxList";
import Wrapbox from "@/components/Wrapbox";
import { product } from "@/components/product";
import SideBar from "@/components/SideBar";
import { useEffect, useState, useContext } from "react";
import { sideContext } from "@/components/SidebarContext";

const boogie = product.map((item) => {
  return item;
});

export default function Home() {
  const { side, setSide } = useContext(sideContext);

  useEffect(() => {
    setSide((prev) => {
      return { ...prev, data: boogie };
    });
  }, []);

  return (
    <>
      <SideBar>
        <Navbar />
        <SwipeNavbar />
        <Wrapbox>
          {side.data &&
            side.data.map((item) => {
              return <BoxList key={item.id} data={item} />;
            })}
        </Wrapbox>
      </SideBar>
    </>
  );
}
