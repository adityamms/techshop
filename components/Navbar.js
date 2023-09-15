"use client";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { sideContext } from "./SidebarContext";
import { useContext } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { product } from "./product";
import { CartContext } from "./Cartcontext";
import Link from "next/link";

export default function Navbar() {
  const navv = ["Camera", "Laptop", "TV", "Cosole", "Phone"];
  const { side, setSide } = useContext(sideContext);
  const { cart } = useContext(CartContext);

  const handle = (tags) => {
    let cari = product.filter((item) => {
      if (tags === item.tags) {
        return item;
      }
    });

    setSide((prev) => {
      return { ...prev, data: [...cari] };
    });
  };

  let num = 0;
  let getsum =
    cart &&
    cart.map((item) => {
      return item.jumlah_barang;
    });

  getsum.forEach((element) => {
    return (num += element);
  });

  return (
    <>
      <div>
        <div className="grid h-10 md:h-40">
          <div className="flex justify-center mt-0">
            <div className=" self-center">
              <h1 className="text-start font-semibold font-serif">
                Tech Trend
              </h1>
            </div>
            <div className="flex gap-10 p-20 ">
              <div className="flex">
                <Link href={"/barang"}>
                  <ShoppingCartIcon />
                </Link>
                <p className=" text-red-600 border border-black rounded-full w-5 h-5 text-center self-center">
                  {num}
                </p>
              </div>
              <button
                onClick={() => {
                  setSide((prev) => {
                    return { ...prev, buka: !prev.buka };
                  });
                }}
              >
                <MenuOpenIcon />
              </button>
            </div>
          </div>

          <div className="flex gap-10 justify-evenly border border-black md:visible">
            <div className="flex gap-10">
              {navv.map((item) => {
                return (
                  <button
                    className="text-black"
                    key={crypto.randomUUID()}
                    onClick={() => {
                      return handle(item);
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
