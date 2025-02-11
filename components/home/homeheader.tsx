import Link from "next/link";
import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Button } from "@/components/ui/button";

export default function HomeHeader() {
  return (
    <header>
      <div className="flex justify-between items-center py-4 px-8 bg-gradient-to-r  text-black">
        <div className="flex items-center gap-4 ">
          <Link href="/">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">Store</Button>
          </Link>
        </div>
        <div className="flex items-center gap-1 ">
          <Link href="/">
            <Button variant="ghost">Gmail</Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">Images</Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">
              <CgMenuGridO />
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              className="text-white rounded-3xl bg-blue-500 hover:bg-blue-500 hover:shadow-md hover:text-white"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
