import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { Typography, Breadcrumbs, Link } from "@material-ui/core";

export default function Breadcrumb(props) {
  const dispatch = useDispatch();
  const { breadcrumbInfo } = props;

  const links = breadcrumbInfo.filter((item) => item.rota !== undefined);
  const myPage = breadcrumbInfo.filter((item) => item.rota === undefined)[0];

  return (
    <Breadcrumbs gutterBottom separator="-" aria-label="breadcrumb">
      {links.map((link) => (
        <Link
          color="inherit"
          onClick={() => dispatch(push(link.rota))}
          key={link.nome}
        >
          {link.nome}
        </Link>
      ))}
      <Typography color="textPrimary">{myPage.nome}</Typography>
    </Breadcrumbs>
  );
}
