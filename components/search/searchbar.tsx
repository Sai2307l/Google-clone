"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Form from "next/form";

import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";

import { FaMicrophone } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  SearchData: string;
  isWeb: boolean;
}
function SearchBar({ SearchData, isWeb }: SearchBarProps) {
  function handleWeb() {
    if (web) return;
    setWeb(true);
    redirect(`/search/web?query=${search}`);
  }
  function handleImage() {
    if (!web) return;
    setWeb(false);
    redirect(`/search/image?query=${search}`);
  }
  function handleSearch(FormData: FormData) {
    const query = FormData.get("query");
    if (query && isWeb) redirect(`/search/web?query=${query}`);
    else if (query && !isWeb) redirect(`/search/image?query=${query}`);
  }
  const [search, setSearch] = useState(SearchData);
  const [web, setWeb] = useState(isWeb);
  return (
    <>
      <div className="grid grid-cols-12 justify-between mt-6 mb-[9px]">
        <div className="flex col-span-1 col-start-1 px-6 m-auto">
          <Image
            src="/googlelogo_color_272x92dp.png"
            alt="homepage"
            width={90}
            height={30}
            priority={true}
          />
        </div>
        <div className="px-3 col-span-6 col-start-2">
          <Form
            action={handleSearch}
            className="flex border border-gray-200 rounded-full shadow-lg overflow-hidden"
          >
            <input
              type="text"
              className="p-3 w-[50rem] focus:outline-none"
              placeholder="Search Google or type a URL"
              name="query"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="p-3 flex-row items-center"
              type="reset"
              onClick={() => setSearch("")}
            >
              <RxCross1 />
            </button>
            <Separator orientation="vertical" className="h-full" />
            <button className="p-3 flex-row items-center">
              <IoCamera />
            </button>
            <button className="p-3 flex-row items-center">
              <FaMicrophone />
            </button>
          </Form>
        </div>
        <div className="col-start-12 my-auto flex justify-end">
          <Link href="/">
            <Button variant="ghost">
              <MdSettings />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">
              <CgMenuGridO />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">Sign Up</Button>
          </Link>
        </div>
        <div className="col-span-4 col-start-2 flex mt-6 gap-5 ml-4">
          <button
            className={cn(
              "font-light text-gray-400",
              `${
                web
                  ? "text-black font-normal underline underline-offset-[14px] decoration-2"
                  : ""
              }`
            )}
            onClick={handleWeb}
          >
            Web
          </button>
          <button
            className={cn(
              "font-light text-gray-400",
              `${
                !web
                  ? "text-black font-normal underline underline-offset-[14px] decoration-2"
                  : ""
              }`
            )}
            onClick={handleImage}
          >
            Image
          </button>
        </div>
      </div>

      <Separator />
    </>
  );
}

export default SearchBar;
