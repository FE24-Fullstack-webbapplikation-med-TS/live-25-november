import "./index.css";

type ButtonProps = {
  variant: "regular" | "stretch";
  onClick: () => void;
  text: string;
};

function Button({ variant, onClick, text }: ButtonProps) {
  return (
    <button
      className={`button button_${variant}`}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
}

export { Button };
