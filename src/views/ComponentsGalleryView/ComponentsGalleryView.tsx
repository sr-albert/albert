import BackLink from "@/components/BackLink";
import { Container } from "@mui/material";

export default function ComponentsGalleryView() {
  return (
    <Container className="gallery-wrapper" disableGutters>
      <BackLink to="/" title="Home" />
      GalleryList
    </Container>
  );
}
