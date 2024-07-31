import { Link, useNavigate } from "react-router-dom";

function Button({ children, to }) {
  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <Link onClick={() => navigate(-1)} className="btn">
        {children}
      </Link>
    );
  }
  return (
    <Link to={`${to}`} className="btn">
      {children}
    </Link>
  );
}

export default Button;
