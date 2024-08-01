import { Link, useNavigate } from "react-router-dom";

function Button({ children, to, className }) {
  const navigate = useNavigate();

  const baseStyle =
    " py-1.5 px-3 block text-center no-underline rounded-2xl bg-sky-950 text-sky-300";

  if (to === "") return <Link className={baseStyle}>{children}</Link>;
  if (to === "-1") {
    return (
      <Link onClick={() => navigate(-1)} className={baseStyle}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={`${to}`}
      className={baseStyle + ` ${className ? className : "w-full"}`}
    >
      {children}
    </Link>
  );
}

export default Button;
