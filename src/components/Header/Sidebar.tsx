import { useState } from "react";
import "../../styles/index.css";
import Icons from "../HeaderIcons";
import HeaderIcons from "../HeaderIcons";

export default function Sidebar() {
  return (
    <div className="logo_sidebar w-full relative">
      <div className="flex justify-between items-center h-full">
        <div className="w-4 flex-center text-white text-xl">
          <a href="/">A</a>
        </div>
        <div className="text-white font-normal text-lg font-PPNeue abs-center">
          <a href="/">
            <h6>
              amangoua<span className="yellow px-1">{"<thierry>"}</span>
            </h6>
          </a>
        </div>
        <HeaderIcons />
      </div>
    </div>
  );
}
