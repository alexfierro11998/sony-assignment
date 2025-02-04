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
    <h2 className="text-white font-black text-4xl mb-8 text-[17px] md:text-[31px] leading-[1.2]">
      {splitHeadline(headline)}
    </h2>
  );
};

export default Headline;
