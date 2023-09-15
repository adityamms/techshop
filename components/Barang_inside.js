import React, { useEffect } from "react";
import { product } from "./product";

export default function Barang_inside({ data }) {
  const item = product.find((item) => {
    if (item.id === data.id) {
      return item;
    } else return null;
  });

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="flex justify-evenly">
      <div className="h-40 border w-40 rounded-lg">
        <img src={item.imageURL} />
      </div>
      <div className=" self-center">
        <h2>{item.nama_barang}</h2>
        <p className="self-center">{rupiah(item.harga_barang)}</p>
        <p>{data.jumlah_barang}</p>
        {rupiah(data.jumlah_barang * item.harga_barang)}
      </div>
    </div>
  );
}
