"use client";

import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import photoVideo from "@/public/photoVideo.png";

export default function CategoryForm() {
  const handleButtonClick = () => {
    document.getElementById("fileInput")?.click();
  };
  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition-all duration-300">
          Category | Form
        </h1>
        <Link
          href="/admin/categories"
          className="bg-blue-100 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          <MoveLeft />
          Back To Categories
        </Link>
      </div>
      <form className="bg-blue-100 p-7 rounded-lg">
        <div className="my-3 flex flex-col max-w-96 mx-auto">
          <label className="mb-2 text-lg font-bold text-gray-500">
            Category Name <span className="text-red-500">*</span>
          </label>
          <input
            className="border border-blue-100 outline-none rounded-lg px-4 py-2 bg-gray-50"
            type="text"
            placeholder="Enter Category Name"
            required
          />
        </div>
        <div className="my-3 flex flex-col max-w-96 mx-auto">
          <label className="mb-2 text-lg font-bold text-gray-500">
            Category Slug <span className="text-red-500">*</span>
          </label>
          <input
            className="border border-blue-100 outline-none rounded-lg px-4 py-2 bg-gray-50"
            type="text"
            placeholder="Enter Category Name"
            required
          />
        </div>
        <div className="my-3 flex flex-col max-w-96 mx-auto">
          <label className="mb-2 text-lg font-bold text-gray-500">
            Category Image <span className="text-red-500">*</span>
          </label>
          <button onClick={handleButtonClick}>
            <Image
              src={photoVideo}
              alt="photoVideo"
              width={40}
              height={40}
              className="overflow-hidden object-cover"
            />
          </button>
          <input
            className="border border-blue-100 outline-none rounded-lg px-4 py-2 bg-gray-50"
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            required
          />
        </div>
        <div className="my-3 flex flex-col max-w-96 mx-auto">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all duration-300"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
