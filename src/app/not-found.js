"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    // <div className="h-full flex justify-center items-center">
    //   <h4 className="text-color-accent">Not found...</h4>
    // </div>
    <div className="min-h-screen min-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={32} className="text-color-accent" />
        <h3 className="text-color-primary hover:text-color-accent transition-all text-2xl font-bold">
          Not Found...
        </h3>
        <Link
          href="/"
          className="py-3 px-8 rounded-md bg-color-primary hover:text-color-accent hover:bg-color-secondary hover:ring-2 hover:ring-color-accent transition-all"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};
export default Page;
