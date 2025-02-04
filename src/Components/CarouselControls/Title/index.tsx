interface Props {
  title?: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="text-white font-black text-4xl mb-8 text-[17px] md:text-[31px] leading-[1.2]">
      {title}
    </h2>
  );
};

export default Title;
