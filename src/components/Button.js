import { Link } from "react-router-dom";

function Button({ children, to }) {
  return (
    <Link to={`${to}`} className="btn">
      {children}
    </Link>
  );
}

export default Button;
