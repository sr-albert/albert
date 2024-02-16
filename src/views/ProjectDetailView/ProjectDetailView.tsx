/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageCarousel } from "@/components/Carousel";
import BackLinkLayout from "@/layouts/backlink.layout";
import { getProjects } from "@/services/project.service";
import { IPlatform, IProject } from "@/types/project";
import { renderTechIcon } from "@/utils/helper";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Tooltip,
  Typography,
  useTheme,
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
        direction={{
          mobileS: "column-reverse",
          md: "row",
        }}
      >
        <Grid item mobileS={12} xs={6}>
          <Container
            className="title-wrapper"
            sx={{
              margin: {
                mobileS: "10px 0",
                md: "0",
              },
            }}
          >
            <Typography variant="h3">{name}</Typography>
          </Container>

          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            {techStack && <Stacks stacks={techStack} />}
            {platforms && <AvailablePlatforms platforms={platforms} />}
          </Container>

          {tags && <Tags tags={tags} />}

          <Container style={{ whiteSpace: "normal", margin: "10px 0px" }}>
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
  const theme = useTheme();

  const onClickHandler = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Box
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
                WebkitFilter: theme.palette.mode === "dark" ? "invert(1)" : "",
                filter: theme.palette.mode === "dark" ? "invert(1)" : "",
              }}
              onClick={() => onClickHandler(url)}
              disabled={!url}
            >
              <RenderTechIcon tech={id} />
            </Button>
          </Tooltip>
        );
      })}
    </Box>
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
        display: "bl",

        "& > :not(style)": {
          color: "inherit",
        },
      }}
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
  const theme = useTheme();
  return (
    <Container
      className="stack-wrapper"
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
      }}
      disableGutters
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
                WebkitFilter: theme.palette.mode === "dark" ? "invert(1)" : "",
                filter: theme.palette.mode === "dark" ? "invert(1)" : "",
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
      height={24}
      width={24}
      style={{
        margin: "0 5px",
      }}
    />
  );
}
