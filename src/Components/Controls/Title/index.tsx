import { AnimatePresence, motion } from "motion/react";

interface Props {
  title?: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <AnimatePresence mode="wait">
      {title && (
        <motion.h1
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="font-black my-4 text-white uppercase text-[49px] md:[35px]"
          aria-label="Main Title"
          role="heading"
        >
          {title}
        </motion.h1>
      )}
    </AnimatePresence>
  );
};

export default Title;
