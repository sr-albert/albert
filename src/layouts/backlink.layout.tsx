import BackLink from "@/components/BackLink";
import { Container, ContainerProps } from "@mui/material";

interface Props extends ContainerProps {
  to?: string;
  title?: string;
}

export default function BackLinkLayout({
  to,
  title,
  children,
  ...other
}: Props) {
  return (
    <Container
      disableGutters
      {...other}
      sx={{
        width: "100%",
      }}
    >
      <Container disableGutters>
        <BackLink to={to} title={title} />
      </Container>
      <Container disableGutters>{children}</Container>
    </Container>
  );
}
