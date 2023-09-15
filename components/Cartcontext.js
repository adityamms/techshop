"use client";
import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function Cartcontext({ children }) {
  const [cart, setCart] = useState([]);

  function masuk(id) {
    setCart((prev) => {
      // Check if the item with the specified id exists in the cart
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem === undefined) {
        // If it doesn't exist, add a new item
        return [...prev, { id: id, jumlah_barang: 1 }];
      } else {
        // If it exists, update the item's jumlah_barang property
        return prev.map((item) =>
          item.id === id
            ? { ...item, jumlah_barang: item.jumlah_barang + 1 }
            : item
        );
      }
    });
  }
  function handleKurang(id) {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            if (item.jumlah_barang === 1) {
              // If jumlah_barang is 1, remove the item from the cart
              return null; // Use null to indicate that this item should be removed
            } else {
              // If jumlah_barang is greater than 1, decrement it
              return { ...item, jumlah_barang: item.jumlah_barang - 1 };
            }
          } else {
            return item;
          }
        })
        .filter((item) => item !== null); // Filter out the null items to remove them
    });
  }

  const getjumlah = (id) => {
    const foundItem = cart.find((item) => item.id === id);

    if (foundItem) {
      return foundItem.jumlah_barang;
    } else {
      return 0;
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleKurang,
        masuk,
        getjumlah,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// const getItem = (id) => {
//   cart.find((item) => item.id === id)?.jumlah_barang || 0;
// };

// const handleTambah = (id) => {
//   setCart((prev) => {
//     if (prev.find((item) => item.id === id) == null) {
//       return [...prev, { id, jumlah_barang: 1 }];
//     } else {
//       return prev.map((item) => {
//         if (item.id === id) {
//           return { item, jumlah_barang: jumlah_barang + 1 };
//         } else return item;
//       });
//     }
//   });
// };

// const handleKurang = (id) => {
//   setCart((prev) => {
//     if (prev.find((item) => item.id === id)?.jumlah_barang === 1) {
//       return prev.filter((item) => item.id !== id);
//     } else {
//       return prev.map((item) => {
//         if (item.id === id) {
//           return { item, jumlah_barang: jumlah_barang - 1 };
//         } else return item;
//       });
//     }
//   });
// };

// const removeCart = (id) => {
//   setCart((preev) => {
//     preev.filter((item) => item.id !== id);
//   });
// };

// const jumlah_ = getItem(id);
