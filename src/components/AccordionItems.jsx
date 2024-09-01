import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const AccordionItems = ({title,content}) => {
    const [accordionOpen,setAccordionOpen] = useState(false)
  return (
  <>
    <div className="p-5  w-full bg-zinc-800 border-b-2 border-b-gary-300">
  <div className="py-1">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between w-full text-xl font-semibold"
      >
        {title}{" "}
        {accordionOpen ? (
       <span className="text-3xl duration-75">
     <AiOutlineClose />
     </span>
        ) : (
          <span className="text-3xl duration-75">
            <HiOutlinePlus />
          </span>
        )}
      </button>
    
      <div
        className={` grid overflow-hidden transition-all duration-300 ease-in-out text-slate-400 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden">
       {content}
        </p>
      </div>
    </div>
    </div>

  </>

  );
};

export default AccordionItems;
