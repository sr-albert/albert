import DefaultImage from "@/components/DefaultImage/DefaultImage";
import BackLinkLayout from "@/layouts/backlink.layout";
import { projects } from "@/mocks/project.data.mock";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardStyled = styled(Card)(() => ({
  height: "100%",
  cursor: "pointer",
  ":hover": {
    position: "relative",
    boxShadow: "0 0 10px #B88E2F",
    transition: "all 0.3s ease-in-out",
  },
}));

export default function ProjectPage() {
  return (
    <BackLinkLayout className="projects-container">
      <ProjectList />
    </BackLinkLayout>
  );
}

function ProjectList() {
  const navigation = useNavigate();

  const onItemClick = (name: string) => {
    if (name)
      navigation(name, {
        state: { from: "project" },
      });
  };

  return (
    <Container>
      <Grid
        container
        rowSpacing={{
          mobileS: 2,
          md: 3,
        }}
        columnSpacing={{
          mobileS: 0,
          md: 3,
        }}
        mb={3}
      >
        {projects.map(({ id, name, screenshots, description }) => {
          return (
            <Grid
              key={id}
              item
              mobileS={12}
              md={6}
              lg={4}
              className="project-card"
            >
              <CardStyled elevation={3} onClick={() => onItemClick(id)}>
                <CardMedia
                  sx={{
                    height: 300,
                  }}
                >
                  {screenshots ? (
                    <img
                      src={screenshots[0]}
                      alt={name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <DefaultImage />
                  )}
                </CardMedia>

                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxLines: 3,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardStyled>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
