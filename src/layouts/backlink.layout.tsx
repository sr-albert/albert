import BackLink from "@/components/BackLink";
import { Container } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}
export default function BackLinkLayout({ children }: Props) {
  return (
    <Container disableGutters>
      <BackLink to="/" title="Home" />
      <Container>{children}</Container>
    </Container>
  );
}
