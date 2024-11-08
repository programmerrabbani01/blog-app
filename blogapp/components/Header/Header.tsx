import logo from "@/public/logo.png";

// type Props = {};

import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="px-8 py-3 border-b flex items-center justify-between">
        {/* logo */}
        <Image
          src={logo}
          alt="logo"
          className="w-32 overflow-hidden object-cover"
        />
        {/* menu */}
        <ul className="flex gap-7 items-center">
          <li>Home</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
        {/* login button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Login
        </button>
      </nav>
    </>
  );
}
