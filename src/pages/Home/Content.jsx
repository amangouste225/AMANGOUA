import { getCollection } from "astro:content";
import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { splitString } from "../animation";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  vars,
  varMotions,
  easing,
  steps,
  blur,
  anim,
} from "../../styles/animation";
import Board from "../Home/Board";
import Board2 from "./Board2";

const allPortfolio = await getCollection("portfolio");

export default function Content() {
  const [selectedPortfolio, setSelectedPortfolio] = useState({
    isActive: false,
    index: 0,
  });
  const controls = useDragControls();
  const anim = (char) => (
    <motion.div
      initial="hidden"
      whileInView="reveal"
      transition={{
        staggerChildren: 0.06,
        delayChildren: 1,
        duration: 0.9,
        delay: 0.5,
        ease: easing,
      }}
      viewport={{ once: true }}
    >
      {splitString(char).map((letters, index) => (
        <motion.span key={index} variants={varMotions}>
          {letters}
        </motion.span>
      ))}
    </motion.div>
  );

  const anim2 = (char) => (
    <motion.div
      initial="hidden"
      whileInView="reveal"
      transition={{
        staggerChildren: 0.06,
        duration: 0.1,
        delay: 0.3,
        ease: easing,
      }}
      viewport={{ once: true }}
    >
      {splitString(char).map((letters, index) => (
        <motion.span key={index} variants={varMotions}>
          {letters}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <section className="text-white h-full w-full" id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="hero"
      >
        <span className="gray text-sm">HOME</span>
        <h1 className="text-5xl lg:text-big font-PPObject text-center leading-none tracking-tight">
          <span>I’m Amangoua</span>, <br />
          <span>
            a <span className="yellow">creative</span> developer
          </span>
        </h1>
        <div className="mt-12">
          <p className="font-PPNeue gray font-normal text-lg max-w-[750px] mx-auto text-center">
            specialized in exceptional website design, strategic branding and
            logo creation. <br />I offer sophisticated solutions with
            unparalleled precision and expertise.
          </p>
        </div>
        {/* <div className="lines"></div> */}
      </motion.div>
      <div className="h-[1000px]">
        <h3 className="font-PPObject text-center text-4xl lg:text-big-s leading-none tracking-tight">
          <div>{anim2("Recent projects")}</div>
        </h3>

        <ul className="max-w-[1000px] mx-auto h-[240px] mt-10">
          {allPortfolio.map((item, index) => (
            <motion.li
              onMouseOver={() =>
                setSelectedPortfolio({ isActive: true, index })
              }
              onMouseLeave={() =>
                setSelectedPortfolio({ isActive: false, index })
              }
              initial="hidden"
              whileInView="reveal"
              variants={vars}
              key={index}
              className="h-full border-thin my-10"
            >
              <a
                href={item.data.href}
                className="w-full relative flex font-PPObject items-start h-full"
              >
                <div className="w-20 text-right mt-24">
                  <motion.span
                    variants={vars}
                    animate={
                      selectedPortfolio.isActive &&
                      selectedPortfolio.index === index
                        ? "hidden"
                        : "reveal"
                    }
                    className="text-base font-bold m-4 gray font-PPNeue"
                  >
                    0{index + 1}
                  </motion.span>
                </div>
                <motion.div
                  variants={vars}
                  animate={
                    selectedPortfolio.isActive &&
                    selectedPortfolio.index === index
                      ? "moveX"
                      : "moveY"
                  }
                  className="flex-1 flex flex-col self-center left-a"
                >
                  <h4 className="text-5xl my-3">{anim(item.data.title)}</h4>
                  <ul className="flex flex-wrap">
                    {item.data.tags.map((li, index) => (
                      <motion.li
                        initial="initial"
                        whileInView="reveal"
                        transition={{ staggerChildren: index * 0.4 }}
                        key={index}
                        className="ai mr-2 inline-block rounded-full"
                      >
                        <motion.span variants={steps}>{li}</motion.span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={blur}
                  initial="initial"
                  animate={
                    selectedPortfolio.isActive &&
                    selectedPortfolio.index === index
                      ? "open"
                      : "closed"
                  }
                  className="z-10 rot-0 absolute translate-x-1/2 left-[50%] -top-4 w-[400px] h-[240px] rounded-sm anim"
                >
                  <div className="absolute top-0 bg-white left-0 bottom-0 right-0 rounded-md borders rot rot-1" />
                  <div className="absolute top-0 bg-white left-0 bottom-0 right-0 rounded-md borders rot rot-2" />
                  <div className="absolute top-0 bg-white left-0 bottom-0 right-0 rounded-md borders rot rot-3" />
                  <div className="absolute top-0 bg-white left-0 bottom-0 right-0 rounded-md borders rot rot-4" />
                  <div
                    className={`absolute top-0 left-0 bottom-0 right-0 rounded-sm overflow-hidden borders rot-5`}
                  >
                    <img
                      className="h-full w-full object-fit rounded-sm "
                      src={`${item.data.image}`}
                      alt={`${item.data}`}
                    />
                  </div>
                </motion.div>
                <div className="w-20 mt-20 text-left">
                  <motion.span
                    variants={vars}
                    animate={
                      selectedPortfolio.isActive &&
                      selectedPortfolio.index === index
                        ? "moveX"
                        : "moveY"
                    }
                    className="text-sm m-4 font-PPNeue"
                  >
                    {item.data.year}
                    <motion.span
                      variants={blur}
                      initial="initial"
                      animate={
                        selectedPortfolio.isActive &&
                        selectedPortfolio.index === index
                          ? "open"
                          : "closed"
                      }
                      className="absolute mx-2 mb-5"
                    >
                      <MdOutlineArrowOutward />
                    </motion.span>
                  </motion.span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="h-[700px]">
        <h4 className="font-PPObject text-center text-6xl leading-none tracking-tight">
          <div>{anim2("More about me")}</div>
        </h4>
        <div className="transparent h-[400px] py-10 w-full">
          <Board />
          <Board2 />
        </div>
      </div>
    </section>
  );
}
