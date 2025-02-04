interface Props {
  buttonText?: string;
  buttonLink?: string;
}

const Button: React.FC<Props> = ({ buttonText, buttonLink }) => {
  /*
   * I'm well aware that the original design doesn't open a new tab however
   * I figured it'd be nice to add it so you don't have to use the back button when you
   * click on the anchor element
   */
  return (
    <div className="mt-12">
      <a
        className="font-black bg-white text-black p-4 rounded-full border-[none] text-[14px] md:text-[16px]"
        href={buttonLink}
        target="_blank"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Button;
