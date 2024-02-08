import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  title: string;
}
export default function BackLink({ to = "..", title = "Back" }: Props) {
  return (
    <NavLink to={to} className="back-link">
      {`< `} {title}
    </NavLink>
  );
}
