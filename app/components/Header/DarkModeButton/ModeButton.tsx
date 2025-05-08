import { motion } from "framer-motion";
import React from "react";

const ModeButton: React.FC<{
  onClick: () => void;
  moodValue: string;
  disabled: boolean;
}> = ({ disabled, moodValue, onClick }) => {
  return (
    <div id="mood" className={`relative text-white`}>
      <button
        disabled={disabled}
        onClick={onClick}
        className={` rounded z-100 px-1 cursor-pointer font-bold ${
          disabled ? "text-white:" : "text-black"
        }`}>
        {moodValue}
      </button>
      {disabled && (
        <motion.div
          transition={{ type: "spring", stiffness: 100 }}
          layoutId="mood"
          className="absolute inset-y-0 w-full bg-basicColor rounded -z-10 "></motion.div>
      )}
    </div>
  );
};

export default ModeButton;
