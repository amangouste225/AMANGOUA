import { useState } from "react";
import "../styles/index.css";

import { AiOutlineMinus } from "react-icons/ai";
import { FaRegSquareFull } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineSquare2Stack } from "react-icons/hi2";

export default function Sidebar() {
  const [add, setAdd] = useState(false);

  console.log(add);
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
          <a href="/">
            <AiOutlineMinus size={13} color="gray" />
          </a>
          <a href="#" onChange={() => setAdd((prev) => !prev)}>
            {add ? (
              <HiOutlineSquare2Stack size={13} color="gray" />
            ) : (
              <FaRegSquareFull size={13} color="gray" />
            )}
          </a>
          <a href="#">
            <RxCross1 size={13} color="gray" />
          </a>
        </div>
      </div>
    </div>
  );
}
