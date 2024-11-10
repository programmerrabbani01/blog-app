import { SmilePlus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Categories() {
  return (
    <>
      <div className="p-6 w-full">
        <div className="flex items-center justify-between ">
          <h1 className="">Categories</h1>
          <Link href="/admin/categories/form">
            <button className="bg-blue-500 px-4 py-2 text-white font-bold flex items-center gap-2 rounded-lg">
              <SmilePlus />
              Add
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
