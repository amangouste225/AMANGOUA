import { getCollection } from "astro:content";
import { useState } from "react";
const allPortfolio = await getCollection("portfolio");
import { motion } from "framer-motion";
export default function Content() {
  const [isOpen, setIsOpen] = useState(false);

  const addClick = () => setIsOpen((prev) => !prev);

  const onMouse = (ind) => {
    console.log(ind);
  };

  return (
    <section className="text-white h-full w-full" id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="hero"
      >
        <span className="gray text-sm">HOME</span>
        <h1 className="font-PPObject text-center leading-none tracking-tight">
          <span>Hi, I’m Amangoua</span>, <br />
          <span>
            a <span className="yellow">creative</span> developer
          </span>
        </h1>
        <div>
          <p className="font-PPNeue gray font-thin text-base max-w-[700px] mx-auto text-center">
            I bring value to web development projects by merging technical
            expertise with creativity and aesthetics.
          </p>
        </div>
        <div className="lines"></div>
      </motion.div>
      <div className="h-[1000px]">
        <h2 className="font-PPObject text-center leading-none tracking-tight">
          <div className="py-2 reveal">
            Projects<span className="yellow px-2 inline">highlight</span>
          </div>
        </h2>
        <ul className="max-w-[1000px] mx-auto h-[240px] mt-10">
          {allPortfolio.map((item, index) => (
            <li
              onMouseEnter={() => onMouse(index)}
              key={index}
              className="h-full border-thin my-10"
            >
              <a
                className="w-full relative flex font-PPObject items-start h-full"
                href="#"
                onClick={addClick}
              >
                <div className="w-20 text-right mt-20">
                  <span className="text-sm m-4 font-PPNeue">0{index + 1}</span>
                </div>
                <div className="flex-1 flex flex-col self-center left-a">
                  <h3 className="reveal">{item.data.title}</h3>
                  <ul className="flex flex-wrap">
                    {item.data.tags.map((li, index) => (
                      <li
                        key={index}
                        className="ai mr-2 inline-block rounded-full"
                      >
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  className="z-10 rot-0 absolute translate-x-1/2 left-[50%] -top-4 w-[400px] h-[240px] rounded-sm"
                >
                  <div className="absolute top-0 bg-white left-0 bottom-0 right-0 rounded-md border-black border-2 rot rot-1" />
                  <div className="absolute top-0 bg-white left-0 bottom-0 right-0 rounded-md border-black border-2 rot rot-2" />
                  <div className="absolute top-0 bg-white left-0 bottom-0 right-0 rounded-md border-black border-2 rot rot-3" />
                  <div className="absolute top-0 bg-white left-0 bottom-0 right-0 rounded-md border-black border-2 rot rot-4" />
                  <div
                    className={`absolute top-0 left-0 bottom-0 right-0 rounded-md overflow-hidden rot-5`}
                  >
                    <img
                      className="h-full w-full object-fit rounded-sm"
                      src={`${item.data.image}`}
                      alt={`${item.data}`}
                    />
                  </div>
                </motion.div>
                <div className="w-20 mt-20 text-left">
                  <span className="text-sm m-4 font-PPNeue">
                    {item.data.year}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
