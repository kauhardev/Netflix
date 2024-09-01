import React from "react";
import AccordionItems from "./AccordionItems";

const Accordion = () => {
  return (
    <div className=" w-full bg-zinc-800 border-2 border-gray-300 ">
      <AccordionItems
        title="What is Netflix?"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          fuga, minus veniam sint sequi sunt. Ullam eaque doloremque sunt
          numquam recusandae voluptas possimus praesentium tempore incidunt"
      />
      <AccordionItems
        title="How much does Netflix cost?"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          numquam recusandae voluptas possimus praesentium tempore incidunt"
      />
      <AccordionItems
        title="Where can I watch?"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          fuga, minus veniam sint sequi sunt. Ullam eaque doloremque sunt
          numquam recusandae voluptas possimus praesentium tempore incidunt" 
      />
      <AccordionItems
        title="How do I cancel?"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          fuga, minus veniam sint sequi sunt. Ullam eaque doloremque sunt
          numquam recusandae voluptas possimus praesentium tempore incidunt"
      />
      <AccordionItems
        title="What can I watch on Netflix?"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          fuga, minus veniam sint sequi sunt. Ullam eaque doloremque sunt
          numquam recusandae voluptas possimus praesentium tempore incidunt"
      />
      <AccordionItems
        title="Is Netflix good for kids?"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          numquam recusandae voluptas possimus praesentium tempore incidunt"
      />
    </div>
  );
};

export default Accordion;
