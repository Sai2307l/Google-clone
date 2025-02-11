"use server";
import { redirect } from "next/navigation";
export default async function createSearch() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const data = await response.json();
  const query = data[0];
  console.log(query);
  redirect(`https://www.google.com/search?q=${query}`);
}
