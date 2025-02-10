import { AnimatePresence, motion } from "motion/react";

interface Props {
  overline?: string;
  loading: boolean;
}

const Overline: React.FC<Props> = ({ overline, loading }) => {
  const baseStyles =
    "font-extrabold inline-block mt-12 py-2 px-4 rounded-full ";
  const loadedStyles = "border-2 border-solid border-white";

  return (
    <AnimatePresence mode="wait">
      {overline && (
        <motion.div
          key={overline}
          initial={{ opacity: 0, borderColor: "transparent" }}
          animate={{
            opacity: 1,
            borderColor: loading ? "transparent" : "white",
          }}
          exit={{ opacity: 0, borderColor: "transparent" }}
          transition={{ duration: 0.3 }}
          className={baseStyles + (loading ? "" : loadedStyles)}
          aria-label="Selection Label"
          role="status"
        >
          <p
            className="text-white uppercase text-[12px] md:text-[14px]"
            aria-live="polite"
          >
            {overline}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overline;
