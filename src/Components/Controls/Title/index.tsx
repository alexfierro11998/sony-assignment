interface Props {
  title?: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="font-black my-4 text-white uppercase text-[49px] md:[35px] ">
      {title}
    </h1>
  );
};

export default Title;
