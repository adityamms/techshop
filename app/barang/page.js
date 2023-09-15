"use client";

import React from "react";
import { useContext } from "react";
import { CartContext } from "@/components/Cartcontext";
import Barang_inside from "@/components/Barang_inside";
import { product } from "@/components/product";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

export default function page() {
  const { cart, setCart } = useContext(CartContext);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const total = cart.reduce(
    (acc, { id, jumlah_barang }) =>
      acc + jumlah_barang * product.find((x) => x.id === id).harga_barang,
    0
  );

  return (
    <div className="border border-black m-5 p-10">
      <h2 className="text-center">your cart list</h2>
      <div>
        <Link href={"/"} className=" self-center">
          <HomeIcon /> Home
        </Link>
      </div>
      <div className="p-10 grid gap-10">
        {cart &&
          cart.map((item) => {
            return <Barang_inside data={item} key={item.id} />;
          })}
      </div>
      <h2 className=" text-end mr-40">TOTAL : {rupiah(total)}</h2>
    </div>
  );
}
