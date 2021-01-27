import { useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

const Portal: React.FC = (props) => {
  const { children } = props;
  console.log(children);

  const element = document.createElement("div");

  useEffect(() => {
    portalRoot?.appendChild(element);
    document.body.style.overflow = "hidden";
    return () => {
      portalRoot?.removeChild(element);
      document.body.style.overflow = "unset";
    };
  }, [element]);

  return ReactDOM.createPortal(children, element);
};

export default Portal;
