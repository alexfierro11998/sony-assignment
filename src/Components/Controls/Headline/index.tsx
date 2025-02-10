import { AnimatePresence, motion } from "motion/react";

interface Props {
  headline?: string;
}

const Headline: React.FC<Props> = ({ headline }) => {
  const splitHeadline = (text?: string) => {
    if (!text) return "";
    const words = text.split(" ");
    const mid = Math.floor(words.length / 2);
    const top = words.slice(0, mid).join(" ");
    const bottom = words.slice(mid).join(" ");
    return (
      <>
        {top}
        <br />
        {bottom}
      </>
    );
  };

  return (
    <AnimatePresence mode="wait">
      <motion.h2
        key={headline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-white font-black text-4xl mb-8 text-[17px] md:text-[31px] leading-[1.2]"
        aria-label="Headline"
        role="heading"
      >
        {splitHeadline(headline)}
      </motion.h2>
    </AnimatePresence>
  );
};

export default Headline;
