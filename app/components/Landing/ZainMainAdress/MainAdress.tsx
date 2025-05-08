"use client";
import { motion } from "framer-motion";
import { Capriola } from "next/font/google";

const capriola = Capriola({
  variable: "--capriola",
  weight: "400",
  subsets: ["latin"],
});
const MainAdress = () => {
  const letters = [
    "Z",
    "a",
    "i",
    "n",
    " ",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "m",
    "e",
    "n",
    "t",
  ];
  return (
    <motion.ul
      dir="ltr"
      className={`flex mx-auto w-fit gap-x-1
          ${capriola.className}`}
      variants={{ now: { transition: { staggerChildren: 0.1 } } }}
      animate="now">
      {letters.map((e, i) => (
        <motion.li
          variants={{ now: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          key={i}
          className="text-sm mt-2">
          <p>{e}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MainAdress;
