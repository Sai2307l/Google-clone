import React from "react";

import Image from "next/image";
import Form from "next/form";
import { FaMicrophone } from "react-icons/fa";
import { IoSearchSharp, IoCamera } from "react-icons/io5";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
function HomeSearch() {
  async function handleForm(FormData: FormData) {
    "use server";
    const query = FormData.get("query");
    if (query && typeof query === "string")
      redirect(`/search/image?query=${query}`);
  }
  async function createSearch() {
    "use server";
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    );
    const data = await response.json();
    const query = data[0];
    redirect(`/search/web?query=${query}`);
  }
  return (
    <div className="flex flex-col items-center mt-24">
      <Image
        src="/googlelogo_color_272x92dp.png"
        alt="homepage"
        width={272}
        height={92}
        priority={true}
      />
      <Form action={handleForm}>
        <div>
          <div className="flex mt-8 border border-gray-200 rounded-full shadow-lg overflow-hidden">
            <button className="bg-gray-100 p-3" type="submit">
              <IoSearchSharp />
            </button>
            <input
              type="text"
              className="p-3 w-96 focus:outline-none"
              placeholder="Search Google or type a URL"
              name="query"
            />
            <button className="bg-gray-100 p-3 flex-row items-center">
              <IoCamera />
            </button>
            <button className="bg-gray-100 p-3 flex-row items-center">
              <FaMicrophone />
            </button>
          </div>
          <div className="flex justify-around mt-8 w-auto">
            <Button variant="secondary" type="submit">
              Google Search
            </Button>
            <Button variant="secondary" onClick={createSearch}>
              I&apos;m Feeling lucky
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default HomeSearch;
