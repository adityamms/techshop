import React from "react";

export default function Wrapbox({ children }) {
  return (
    <div className="flex justify-center p-5 mb-52">
      <div className=" grid md:grid-cols-3 grid-cols-2 gap-20 md:gap-36">
        {children}
      </div>
    </div>
  );
}
