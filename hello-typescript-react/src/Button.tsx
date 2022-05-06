import { PropsWithChildren } from "react";

type Props = {
  
}

function Button({ children }: PropsWithChildren<Props>) {
  return (
    <button className="Button">
      { children }
    </button>
  );
}

export default Button;
