import { useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

const Portal: React.FC = (props) => {
  const { children } = props;
  console.log(children);

  const element = document.createElement("div");

  useEffect(() => {
    portalRoot?.appendChild(element);
    return () => {
      portalRoot?.removeChild(element);
    };
  }, [element]);

  return ReactDOM.createPortal(children, element);
};

export default Portal;
