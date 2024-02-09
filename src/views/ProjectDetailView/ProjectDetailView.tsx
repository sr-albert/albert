import BackLink from "@/components/BackLink";
import { ImageCarousel } from "@/components/Carousel";
import { getProjects } from "@/services/project.service";
import { IPlatform, IProject } from "@/types/project";
import { renderTechIcon } from "@/utils/helper";
import {
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }: any): Promise<IProject> {
  const projectDetail = await getProjects(params.id);
  return projectDetail as IProject;
}

export default function ProjectDetailView() {
  const loaderData = useLoaderData();
  const { id, name, description, platforms, techStack, screenshots, tags } =
    loaderData as IProject;

  return (
    <Container
      className="project-detail-container"
      data-testid={`project-detail-${id}`}
    >
      <Container className="project-detail-container__header" disableGutters>
        <BackLink />
      </Container>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">{name}</Typography>

          {platforms && <AvailablePlatforms platforms={platforms} />}

          {tags && <Tags tags={tags} />}

          <Container style={{ whiteSpace: "normal" }} disableGutters>
            <Typography variant="body1">{description}</Typography>
          </Container>

          <Divider />
          <Stacks stacks={techStack} />
        </Grid>

        {screenshots && (
          <Grid item xs={12} md={6}>
            <ImageCarousel images={screenshots} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

interface IAvailablePlatformsProps {
  platforms: IPlatform[];
}
function AvailablePlatforms({ platforms }: IAvailablePlatformsProps) {
  const onClickHandler = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Container
      className="available-wrapper"
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {platforms.map(({ url, name, id }, idx) => {
        return (
          <Button
            key={idx}
            color="inherit"
            fullWidth={false}
            sx={{
              width: "fit-content",
            }}
            onClick={() => onClickHandler(url)}
            disabled={!url}
          >
            <RenderTechIcon tech={id} />
          </Button>
        );
      })}
    </Container>
  );
}

interface ITagProps {
  tags: string[];
}
export function Tags({ tags }: ITagProps) {
  return (
    <Container
      className="tag-wrapper row"
      sx={{
        display: "flex",
        gap: 1,
      }}
      disableGutters
    >
      {tags.map((tag, idx) => {
        return <Chip className="tag" key={idx} label={tag} />;
      })}
    </Container>
  );
}

interface IStacksProps {
  stacks: string[];
}
export function Stacks({ stacks }: IStacksProps) {
  return (
    <Container className="stack-wrapper" disableGutters>
      {stacks.map((stack, idx) => {
        return (
          <Tooltip key={idx} title={stack}>
            <img
              key={idx || "default key"}
              alt={stack}
              src={renderTechIcon(stack)}
              height={32}
              width={32}
              style={{
                margin: "0 5px",
                pointerEvents: "inherit",
              }}
            />
          </Tooltip>
        );
      })}
    </Container>
  );
}

interface IImagesDisplayProps {
  images: string[];
}
function ImagesDisplay({ images }: IImagesDisplayProps) {
  return (
    <Container className="gallery-wrapper col">
      <Typography variant="h2"> Gallery </Typography>
      <Container className="images-list">
        {images.map((image, idx) => {
          return <img key={idx} src={image} alt="project-image" />;
        })}
      </Container>
    </Container>
  );
}

function RenderTechIcon({
  tech,
  idx,
}: {
  tech: string;
  idx?: string | number | undefined;
}) {
  return (
    <img
      key={idx || "default key"}
      alt={tech}
      src={renderTechIcon(tech)}
      height={32}
      width={32}
      style={{
        margin: "0 5px",
      }}
    />
  );
}
