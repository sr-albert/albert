/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageCarousel } from "@/components/Carousel";
import BackLinkLayout from "@/layouts/backlink.layout";
import { getProjects } from "@/services/project.service";
import { IPlatform, IProject } from "@/types/project";
import { renderTechIcon } from "@/utils/helper";
import {
  Button,
  Chip,
  Container,
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
    <BackLinkLayout
      className="project-detail-container"
      data-testid={`project-detail-${id}`}
    >
      <Grid
        container
        spacing={3}
        direction={{
          mobileS: "column-reverse",
          md: "row",
        }}
      >
        <Grid item mobileS={12} xs={6}>
          <Typography variant="h3">{name}</Typography>

          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
            disableGutters
          >
            {techStack && <Stacks stacks={techStack} />}
            {platforms && <AvailablePlatforms platforms={platforms} />}
          </Container>

          {tags && <Tags tags={tags} />}

          <Container
            style={{ whiteSpace: "normal", margin: "10px 0px" }}
            disableGutters
          >
            <Typography variant="body1">{description}</Typography>
          </Container>
        </Grid>

        {screenshots && (
          <Grid item mobileS={12} xs={6}>
            <ImageCarousel images={screenshots} />
          </Grid>
        )}
      </Grid>
    </BackLinkLayout>
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
        width: "fit-content",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {platforms.map(({ url, name, id }, idx) => {
        return (
          <Tooltip title={`View on ${name}`} key={id}>
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
          </Tooltip>
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
        "& > :not(style)": {
          color: "inherit",
        },
      }}
      disableGutters
    >
      {tags.map((tag, idx) => {
        return (
          <Chip
            className="tag"
            key={idx}
            label={tag}
            variant="outlined"
            size="small"
          />
        );
      })}
    </Container>
  );
}

interface IStacksProps {
  stacks: string[];
}
export function Stacks({ stacks }: IStacksProps) {
  return (
    <Container
      className="stack-wrapper"
      disableGutters
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
      }}
    >
      {stacks.map((stack, idx) => {
        return (
          <Tooltip key={idx} title={stack}>
            <img
              key={idx || "default key"}
              alt={stack}
              src={renderTechIcon(stack)}
              height={24}
              width={24}
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
