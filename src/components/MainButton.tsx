interface ButtonProps {
  text: string;
}

const Mainbutton = (props: ButtonProps) => {
  return (
    <div>
      <a
        href="#_"
        className="inline-flex items-center justify-center h-10 px-7 py-0 text-l font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
      >
        {props.text}
      </a>
    </div>
  );
};

export default Mainbutton;
