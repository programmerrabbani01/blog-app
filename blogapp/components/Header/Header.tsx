import logo from "@/public/logo.png";
import { BotMessageSquare, HousePlug, LayoutList } from "lucide-react";
import Image from "next/image";
import LoginButton from "./LoginButton.tsx";
import AuthContextProvider from "@/context/AuthContext.tsx";
import Link from "next/link";

// type Props = {};

export default function Header() {
  return (
    <>
      <nav className="px-8 py-2 border-b flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-32 overflow-hidden object-cover"
          />
        </Link>
        {/* menu */}
        <ul className="flex gap-7 items-center">
          <li>
            <Link href="/" className="flex items-center gap-2">
              <HousePlug /> Home
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <LayoutList /> Blogs
          </li>
          <li className="flex items-center gap-2">
            <BotMessageSquare /> Contact Us
          </li>
        </ul>
        {/* login button */}
        <AuthContextProvider>
          <LoginButton />
        </AuthContextProvider>
      </nav>
    </>
  );
}
