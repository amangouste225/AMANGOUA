import { motion } from "framer-motion";
import HeaderIcons from "../../components/HeaderIcons";

export default function Board() {
  return (
    <motion.div
      className="max-w-[750px] absolute left-1/2  text-base h-[300px] my-10 cursor-grab bordero bg-black"
      drag
      dragConstraints={{ top: -50, right: 420, bottom: 200, left: -420 }}
      dragTransition={{ bounceStiffness: 100 }}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="w-full flex justify-between items-center h-12 px-3 border-b">
        <h5 className="font-PPNeue">about-me</h5>
        <HeaderIcons />
      </div>
      <ul className="p-3">
        <li className="flex gap-5">
          <span className="board-num">1</span>
          <span>
            Nice to meet you ! I'm Amangoua. I'm a{" "}
            <span className="yellow">freelance web developer</span>.
          </span>
        </li>
        <li className="flex gap-5">
          <span className="board-num">2</span>
          <span>
            I'm passionate about both <span className="blue">web design</span>{" "}
            and
            <span className="red"> web development</span> , with a particular
            focus on <span className="orange">front-end development</span> in
            all of its aspects. This is where bot my{" "}
            <span className="blue">technical</span> and{" "}
            <span className="violet">creative</span> skills can be used at their
            best.
          </span>
        </li>
        <li className="flex gap-5">
          <span className="board-num">3</span>
          <span>
            I bring my <span className="yellow">expertise</span> in my
            collaboration with
            <span className="red"> web agency</span> , with a particular focus
            on <span className="orange">front-end development</span> in all of
            its aspects. This is where bot my{" "}
            <span className="blue">technical</span> and{" "}
            <span className="violet">creative</span> skills can be used at their
            best.
          </span>
        </li>
        <li className="flex gap-5">
          <span className="board-num">4</span>
          <span>
            <span className="red">Coding</span> for me is not just my work, I
            like
            <span className="yellow"> experimenting</span> with many
            technologies and front-end development in all of its aspects.
          </span>
        </li>
      </ul>
    </motion.div>
  );
}
