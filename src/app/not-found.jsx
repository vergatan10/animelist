"use client";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen min-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={32} className="text-color-accent" />
        <h3 className="text-color-primary hover:text-color-accent transition-all text-2xl font-bold">
          Not Found...
        </h3>
        <button
          href
          onClick={() => router.back()}
          className="py-3 px-8 rounded-md bg-color-primary hover:text-color-accent hover:bg-color-secondary hover:ring-2 hover:ring-color-accent transition-all"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};
export default Page;
