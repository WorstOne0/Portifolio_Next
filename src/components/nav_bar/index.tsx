"use client";

// Next
import { useState } from "react";
// Icons
import { AiFillHome } from "react-icons/ai";
import { FaCode, FaFolder } from "react-icons/fa";
import { GiBrazilFlag } from "react-icons/gi";
import { RiEnglishInput } from "react-icons/ri";
// Components
import { Card } from "@/components";

export default function NavBar() {
  const [isLanguageBr, setLanguageBr] = useState(false);

  return (
    <div className="h-screen w-[10rem] p-5 bg-background">
      <Card className="h-full flex flex-col text-white">
        {/* Top */}
        <div className="h-[16rem] flex flex-col justify-center items-center">TOP</div>
        {/* Main */}
        <div className="px-1 grow flex flex-col justify-center items-center">
          <div
            className={`h-[5rem] w-full rounded-[0.8rem] flex justify-center items-center cursor-pointer mb-[0.1rem]  ${
              true ? "bg-primary hover:bg-[#0b5ecda0]" : "hover:bg-[rgba(255, 255, 255, 0.05)]"
            }`}
          >
            <AiFillHome className="text-4xl" />
          </div>
          <div className="h-[5rem] w-full rounded-[0.8rem] flex justify-center items-center cursor-pointer mb-[0.1rem] hover:bg-[rgba(255, 255, 255, 0.05)]">
            <FaCode className="text-4xl" />
          </div>
          <div className="h-[5rem] w-full rounded-[0.8rem] flex justify-center items-center cursor-pointer mb-[0.1rem] hover:bg-[rgba(255, 255, 255, 0.05)]">
            <FaFolder className="text-4xl" />
          </div>
        </div>
        {/* Bottom */}
        <div className="h-[16rem] pb-1 flex flex-col justify-end items-center">
          <div
            className="h-[4rem] w-full rounded-[0.8rem] flex justify-center items-center cursor-pointer mb-[0.1rem] hover:bg-[rgba(255, 255, 255, 0.05)]"
            onClick={() => setLanguageBr(!isLanguageBr)}
          >
            {isLanguageBr ? <GiBrazilFlag className="text-4xl text-green-500" /> : <RiEnglishInput className="text-blue-500" />}
          </div>
        </div>
      </Card>
    </div>
  );
}
