interface Props {
  buttonText?: string;
  buttonLink?: string;
  loading: boolean;
}

const Button: React.FC<Props> = ({ buttonText, buttonLink, loading }) => {
  /*
   * I'm well aware that the original design doesn't open a new tab however
   * I figured it'd be nice to add it so you don't have to use the back button when you
   * click on the anchor element
   *
   * No animations here since the button text or link doesn't change
   */

  const baseStyles =
    "font-black text-black p-4 rounded-full border-[none] text-[14px] md:text-[16px]";
  const loadedStyles = "bg-white";

  const loadStyles = loading
    ? baseStyles
    : [baseStyles, loadedStyles].join(" ");

  return (
    <div className="mt-12">
      <a
        className={loadStyles}
        href={buttonLink}
        target="_blank"
        aria-label={`Navigate to ${buttonLink}`}
        role="button"
        aria-disabled={loading}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Button;
