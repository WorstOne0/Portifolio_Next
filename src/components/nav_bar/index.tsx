"use-client";

// Next
import { useState } from "react";
// Icons
import { AiFillHome } from "react-icons/ai";
import { FaCode, FaFolder } from "react-icons/fa";
import { GiBrazilFlag } from "react-icons/gi";
import { RiEnglishInput } from "react-icons/ri";
// Components
import { Card } from "@/components";
// Styles
import styles from "./styles.module.css";

export default function NavBar() {
  const [isLanguageBr, setLanguageBr] = useState(false);

  return (
    <div className="h-screen w-[10rem] p-5 bg-[var(--background-dark)]">
      <Card elevation={1}>
        <div className="h-full flex flex-col text-white">
          {/* Top */}
          <div className="h-[16rem] flex flex-col justify-center items-center">TOP</div>
          {/* Main */}
          <div className="px-1 grow flex flex-col justify-center items-center">
            <div className={`${styles["nav-item"]} ${styles["nav-item-selected"]}`}>
              <AiFillHome className="text-4xl" />
            </div>
            <div className={`${styles["nav-item"]}`}>
              <FaCode className="text-4xl" />
            </div>
            <div className={`${styles["nav-item"]}`}>
              <FaFolder className="text-4xl" />
            </div>
          </div>
          {/* Bottom */}
          <div className="h-[16rem] pb-1 flex flex-col justify-end items-center">
            <div
              className={`${styles["select-container"]}`}
              onClick={() => {
                setLanguageBr(!isLanguageBr);
              }}
            >
              {isLanguageBr ? <GiBrazilFlag className="text-4xl text-green-500" /> : <RiEnglishInput className="text-blue-500" />}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
