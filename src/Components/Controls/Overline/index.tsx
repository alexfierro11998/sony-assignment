interface Props {
  overline?: string;
}

const Overline: React.FC<Props> = ({ overline }) => {
  return (
    <div className="font-extrabold inline-block mt-12 py-2 px-4 rounded-full border-2 border-solid border-white">
      <p className="text-white uppercase text-[12px] md:text-[14px]">
        {overline}
      </p>
    </div>
  );
};

export default Overline;
