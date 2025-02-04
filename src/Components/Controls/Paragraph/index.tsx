interface Props {
  paragraph?: string;
}

const Paragraph: React.FC<Props> = ({ paragraph }) => {
  return (
    <div className="normal-case font-medium description h-[75px] text-white text-[14px] md:text-[16px] w-[90%] md:w-1/2">
      {paragraph}
    </div>
  );
};

export default Paragraph;
