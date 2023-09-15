"use clients";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext, useState } from "react";
import { CartContext } from "./Cartcontext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";

const buttonStyle = {
  luar: "border border-black rounded-full hover:border-green-500",
};
export default function BoxList(props) {
  const { harga_barang, nama_barang, jumlah_barang, imageURL, id } = props.data;
  const { cart, masuk, handleKurang, getjumlah } = useContext(CartContext);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      <div className="w-40 h-40 md:w-60 md:h-64 border border-black mt-20 rounded-lg p-5 shadow-lg shadow-neutral-900 hover:border-blue-500">
        <div className="flex align-middle justify-center">
          <img src={imageURL} />
        </div>
        <div className="grid  mt-10 md:mt-20 gap-5">
          <div>
            <h3 className=" text-center">{nama_barang}</h3>
            <p className=" text-center">{rupiah(harga_barang)}</p>
          </div>

          {getjumlah(id) === 0 ? (
            <button className={buttonStyle.luar} onClick={() => masuk(id)}>
              <AddShoppingCartIcon />
            </button>
          ) : (
            <div className="flex justify-evenly ">
              <button
                className={buttonStyle.luar}
                onClick={() => handleKurang(id)}
              >
                <RemoveIcon />
              </button>
              {getjumlah(id)}
              <button className={buttonStyle.luar} onClick={() => masuk(id)}>
                <AddIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
