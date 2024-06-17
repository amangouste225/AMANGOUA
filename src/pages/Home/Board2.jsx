import { motion } from "framer-motion";
import HeaderIcons from "../../components/HeaderIcons";

export default function Board2() {
  return (
    <motion.div
      className="max-w-[350px] text-base absolute left-1/4  h-[150px] my-10 cursor-grab bordero bg-black"
      drag
      dragConstraints={{ top: -50, right: 620, bottom: 200, left: -420 }}
      dragTransition={{ bounceStiffness: 900 }}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="w-full flex justify-between items-center h-12 px-3 border-b">
        <h5 className="font-PPNeue">where-I-work-currently ?</h5>
        <HeaderIcons />
      </div>
      <ul className="p-3">
        <li className="flex gap-5">
          <span className="board-num">1</span>
          <span>
            Currently based in{" "}
            <span className="yellow">Abidjan, Côte d'Ivoire</span>
          </span>
        </li>
        <li className="flex gap-5">
          <span className="board-num">2</span>
          <span>
            Available for remote collaborations across Africa and worldwide 🌎
          </span>
        </li>
      </ul>
    </motion.div>
  );
}
