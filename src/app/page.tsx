import { Button } from "@/components/Button";
import { Icon01 } from "@/components/icons/Icon01";
import { Icon02 } from "@/components/icons/Icon02";
import { Icon03 } from "@/components/icons/Icon03";
import { Icon04 } from "@/components/icons/Icon04";
import { Icon05 } from "@/components/icons/Icon05";
import { Icon06 } from "@/components/icons/Icon06";
import { IconArrow } from "@/components/icons/IconArrow";
import { PlusCircle } from "@/components/icons/PlusCircle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full px-[112px] py-[67px] min-h-screen bg-[url('/IMG-BG.png')] bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center max-w-[1216px] rounded-[32px] p-[60px] h-auto bg-[#020617]/80">
        <div className="flex flex-col gap-8 w-full justify-center items-center">
          <Icon01 />
          <h2 className="font-semibold text-gray01 text-[32px] text-center">
            Experimente o poder da Inteligência Artificial
          </h2>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <Button
            icon1={<Icon02 />}
            title="Gerador de códigos"
            icon2={<IconArrow />}
          />
          <Button
            icon1={<Icon03 />}
            title="Edição de foto"
            icon2={<IconArrow />}
          />
          <Button
            icon1={<Icon04 />}
            title="Geração de vídeos"
            icon2={<IconArrow />}
          />
          <Button
            icon1={<Icon05 />}
            title="Criador de áudios e musicas "
            icon2={<IconArrow />}
          />
        </div>
        <hr className="w-full my-10 border-[0.5px] border-gray04" />
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex-1 h-16 border border-gray04 rounded-2xl bg-gray06 flex items-center">
            <button className="w-8 h-8 m-4">
              <PlusCircle />
            </button>
            <input
              className="flex-1 bg-transparent outline-none text-gray02 text-[18px] font-normal"
              placeholder="Envie uma mensagem ou digite “/” para exibir os comandos"
            />
          </div>
          <button className="w-16 h-16">
            <Icon06 />
          </button>
        </div>
      </div>
    </main>
  );
}
