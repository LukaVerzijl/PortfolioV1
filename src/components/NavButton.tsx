type ButtonProps = {
  text: string;
};

const NavButton = (props: ButtonProps) => {
  return (
    <div>
      <div>
        <button className="text-white font-bold py-2 px-4 rounded p-6 ">
          {props.text}
        </button>
      </div>
    </div>
  );
};

export default NavButton;