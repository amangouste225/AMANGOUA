import "../styles/index.css";

import { AiOutlineMinus } from "react-icons/ai";
import { FaRegSquareFull } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function Sidebar() {
  return (
    <div className="logo_sidebar w-full relative">
      <div className="flex justify-between items-center h-full">
        <div className="w-4 flex-center text-white">A</div>
        <div className="text-white font-normal text-lg font-PPNeue abs-center">
          <a href="/">
            <h4>
              amangoua<span className="yellow px-1">{"<thierry>"}</span>
            </h4>
          </a>
        </div>
        <div className="flex-center gap-3 p-2">
          <a href="/" onclick="">
            <AiOutlineMinus size={13} color="gray" />
          </a>
          <a href="#">
            <FaRegSquareFull size={13} color="gray" />
          </a>
          <a href="#">
            <RxCross1 size={13} color="gray" />
          </a>
        </div>
      </div>
    </div>
  );
}
