import { AnimatePresence, motion } from "motion/react";

interface Props {
  paragraph?: string;
}

const Paragraph: React.FC<Props> = ({ paragraph }) => {
  return (
    <AnimatePresence mode="wait">
      {paragraph && (
        <motion.div
          key={paragraph}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="normal-case font-medium description min-h-[75px] text-white text-[14px] md:text-[16px] w-[90%] md:w-1/2"
          aria-label="Description"
          role="paragraph"
        >
          {paragraph}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Paragraph;
