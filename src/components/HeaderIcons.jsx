import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRegSquareFull } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { TbSquares } from "react-icons/tb";

export default function HeaderIcons() {
  const [isOpen, setIsOpen] = useState(false);

  const addClick = () => {
    setIsOpen((prev) => !prev);
    toggleFullScreen();
  };

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsOpen((prev) => !prev);
    }
  }
  return (
    <div className="flex-center gap-3 p-2">
      <span className="pointer">
        <AiOutlineMinus size={13} color="gray" />
      </span>
      <span className="pointer" onClick={addClick}>
        {!isOpen ? (
          <FaRegSquareFull size={10} color="gray" />
        ) : (
          <TbSquares size={15} color="gray" />
        )}
      </span>
      <span className="pointer">
        <RxCross1 size={13} color="gray" />
      </span>
    </div>
  );
}
