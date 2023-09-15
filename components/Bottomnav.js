import Link from "next/link";
import React from "react";

const data = ["dev", "company", "information"];

export default function Bottomnav() {
  return (
    <>
      <div className="h-40 border border-black bg-slate-900 pl-20 pt-5">
        <div className="grid gap-5">
          {data.map((item) => {
            return (
              <Link
                href={"https://www.instagram.com/adityamms_/"}
                className=" text-white"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
