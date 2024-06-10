import { useState } from "react";
import "../../styles/index.css";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRegSquareFull } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { TbSquares } from "react-icons/tb";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const addClick = (e) => {
    setIsOpen((prev) => !prev);

    toggleFullScreen();
  };

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  return (
    <div className="logo_sidebar w-full relative">
      <div className="flex justify-between items-center h-full">
        <div className="w-4 flex-center text-white text-xl">
          <a href="/">A</a>
        </div>
        <div className="text-white font-normal text-lg font-PPNeue abs-center">
          <a href="/">
            <h4>
              amangoua<span className="yellow px-1">{"<thierry>"}</span>
            </h4>
          </a>
        </div>
        <div className="flex-center gap-3 p-2">
          <span className="pointer">
            <AiOutlineMinus size={13} color="gray" />
          </span>
          <span className="pointer" onClick={addClick}>
            {!isOpen ? (
              <FaRegSquareFull size={13} color="gray" />
            ) : (
              <TbSquares size={15} color="gray" />
            )}
          </span>
          <span className="pointer">
            <RxCross1 size={13} color="gray" />
          </span>
        </div>
      </div>
    </div>
  );
}
