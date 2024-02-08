import BackLink from "@/components/BackLink";
import { getProjects } from "@/services/project.service";
import { IPlatform, IProject } from "@/types/project";
import { renderTechIcon } from "@/utils/helper";
import { Chip, Container, Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";

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
      <Container className="project-detail-container__header">
        <BackLink />
      </Container>
      <Container className="project-detail-container__content col">
        <Typography variant="h1">{name}</Typography>

        {tags && <Tags tags={tags} />}
        <Container style={{ whiteSpace: "normal" }}>
          <Typography variant="caption">{description}</Typography>
        </Container>

        {platforms && <AvailablePlatforms platforms={platforms} />}
        {techStack && <Stacks stacks={techStack} />}
        {screenshots && <ImagesDisplay images={screenshots} />}
      </Container>
    </Container>
  );
}

interface IAvailablePlatformsProps {
  platforms: IPlatform[];
}
function AvailablePlatforms({ platforms }: IAvailablePlatformsProps) {
  return (
    <Container className="available-wrapper row">
      <Typography variant="h2">Available on</Typography>

      <Container className="links-list">
        {platforms.map(({ url, name, id }, idx) => {
          return (
            <Link to={url} key={idx}>
              <RenderTechIcon tech={id} />
              {name}
            </Link>
          );
        })}
      </Container>
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
    <Container className="stack-wrapper">
      <Typography variant="h2">Tech</Typography>
      <Container className="stacks-list row">
        {stacks.map((stack, idx) => {
          return <RenderTechIcon tech={stack} idx={idx} />;
        })}
      </Container>
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
        filter: "invert(1)",
      }}
    />
  );
}
