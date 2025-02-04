interface Props {
  overline?: string;
  loading: boolean;
}

const Overline: React.FC<Props> = ({ overline, loading }) => {
  const baseStyles =
    "font-extrabold inline-block mt-12 py-2 px-4 rounded-full ";
  const loadedStyles = "border-2 border-solid border-white";

  return (
    <div className={loading ? baseStyles : baseStyles + loadedStyles}>
      <p className="text-white uppercase text-[12px] md:text-[14px]">
        {overline}
      </p>
    </div>
  );
};

export default Overline;
