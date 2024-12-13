import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

export const HoverEffect = ({items, ClassName}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return(
    <div className={cn("grid grid-col-1 py-10", ClassName)}>
      {items.map((item, idx) => (
        <div
          key={`${item?.title}-${idx}`}
          className="relative group block p-3 h-full w-full"
          onMouseEnter={() => {setHoveredIndex(idx); console.log(hoveredIndex)}}
          onMouseLeave={() => {setHoveredIndex(null); console.log(hoveredIndex)}}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
              className="absolute inset-0 h-full w-full bg-darkgreen block rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
              />      
            )}
          </AnimatePresence>
          <Card className={``}>
            <CardTitle className={`md:text-3xl text-2xl`}>{item.title}</CardTitle>
            <CardDescription className={`text-sm md:text-base`}>
              {item.content.map((content, idx) => (
                <div className='flex flex-col mb-3'>
                  <span>{content.sen}</span>
                  <span>-{content.from}</span>
                </div>
              ))}
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
}

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-lightgreen border border-transparent group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-darkgreen font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 text-darkgreen tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};