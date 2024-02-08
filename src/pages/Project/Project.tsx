import BackLink from "@/components/BackLink";
import { projects } from "@/mocks/project.data.mock";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export default function ProjectPage() {
  return (
    <Container className="project-wrapper">
      <BackLink to="/" title="Home" />
      <ProjectList />
    </Container>
  );
}

function ProjectList() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "auto !important",
      }}
    >
      {projects.map(({ id, name, screenshots, description }) => {
        return (
          <Grid
            key={id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="project-card"
          >
            <Card
              sx={{
                height: "100%",
                ":hover": {
                  cursor: "pointer",
                  boxShadow: "0 0 10px 0 rgba(228, 225, 225, 0.2)",
                  transform: "scale(1.05)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
              elevation={3}
            >
              <CardMedia
                sx={{
                  height: 300,
                }}
              >
                {screenshots && (
                  <img
                    src={screenshots[0]}
                    alt={name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
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
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
