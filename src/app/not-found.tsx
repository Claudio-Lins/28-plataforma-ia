"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-950 text-zinc-50">
      <div className="flex w-full">
        <div className="w-1/2 ml-20 p-28 flex flex-col items-center">
          <h1 className="text-6xl font-bold">
            Ops, esta página não foi encontrada
          </h1>
          <p>
            Parece que você se perdeu... Tente voltar para a página anterior ou
            acessar a home.
          </p>
          <div className="flex w-full items-center gap-4 mt-4">
            <button
              className="w-full px-3 py-2 bg-purple-600 text-center text-white mt-4 rounded-lg"
              onClick={() => router.back()}
            >
              Back
            </button>
            <Link
              href={"/"}
              className="w-full px-3 py-2 bg-purple-600 text-center text-white mt-4 rounded-lg"
            >
              Ir para a home
            </Link>
          </div>
        </div>
        <div className="w-1/2 mr-20 flex justify-center items-center">
          <div className="flex flex-col w-1/2 border p-8 divide-y-2">
            <h3 className="w-full p-2 text-2xl font-bold uppercase text-center text-zinc-50 ">
              Page not-found
            </h3>
            <h4 className="w-full p-2 text-9xl font-extrabold uppercase text-center text-zinc-50 ">
              404
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
