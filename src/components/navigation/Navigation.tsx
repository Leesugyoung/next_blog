"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 left-0  text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap pt-5 pb-5 pr-1 pl-3 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 "></div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-10">
          <Link
            className="text-gray-50 text-lg cursor-pointer"
            href={"/portfolio"}
          >
            포트폴리오
          </Link>
          <Link
            className="text-gray-50 text-lg cursor-pointer"
            href={"https://velog.io/@tnrud4685/posts"}
            target="_blank"
          >
            블로그
          </Link>
        </nav>
      </div>
    </header>
  );
}
