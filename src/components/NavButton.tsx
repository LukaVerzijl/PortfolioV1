type ButtonProps = {
  text: string;
  link: string;
};

const NavButton = (props: ButtonProps) => {
  return (
    <div>
      <div>
        <a href={props.link}>
          <button className="text-white font-bold py-2 px-4 rounded-sm p-6 ">
            {props.text}
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavButton;
