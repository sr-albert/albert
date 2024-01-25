import { getProjects } from "@/services/project.service";
import { IPlatform, IProject } from "@/types/project";
import { renderTechIcon } from "@/utils/helper";
import { Link, useLoaderData } from "react-router-dom";
import "./ProjectDetailView.scss";

export async function loader({ params }: any): Promise<IProject> {
  const projectDetail = await getProjects(params.id);
  return projectDetail as IProject;
}

export default function ProjectDetailView() {
  const loaderData = useLoaderData();
  const { id, name, description, platforms, techStack, screenshots, tags } =
    loaderData as IProject;

  return (
    <div
      className="project-detail-container"
      data-testid={`project-detail-${id}`}
    >
      <div className="project-detail-container__header">
        <Link to=".." relative="path" className="back-link">
          {`< Back`}
        </Link>
      </div>
      <div className="project-detail-container__content col">
        <h1>{name}</h1>
        {tags && <Tags tags={tags} />}
        <span>{description}</span>
        {platforms && <AvailablePlatforms platforms={platforms} />}
        {techStack && <Stacks stacks={techStack} />}
        {screenshots && <ImagesDisplay images={screenshots} />}
      </div>
    </div>
  );
}

interface IAvailablePlatformsProps {
  platforms: IPlatform[];
}
function AvailablePlatforms({ platforms }: IAvailablePlatformsProps) {
  return (
    <div className="available-wrapper row">
      <h2>Available on</h2>

      <div className="links-list">
        {platforms.map(({ url, name, id }, idx) => {
          return (
            <Link to={url} key={idx}>
              <RenderTechIcon tech={id} />
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

interface ITagProps {
  tags: string[];
}
export function Tags({ tags }: ITagProps) {
  return (
    <div className="tag-wrapper row">
      {tags.map((tag, idx) => {
        return (
          <p className="tag" key={idx}>
            {tag}
          </p>
        );
      })}
    </div>
  );
}

interface IStacksProps {
  stacks: string[];
}
export function Stacks({ stacks }: IStacksProps) {
  return (
    <div className="stack-wrapper">
      <h2>Tech</h2>
      <div className="stacks-list row">
        {stacks.map((stack, idx) => {
          return <RenderTechIcon tech={stack} idx={idx} />;
        })}
      </div>
    </div>
  );
}

interface IImagesDisplayProps {
  images: string[];
}
function ImagesDisplay({ images }: IImagesDisplayProps) {
  return (
    <div className="gallery-wrapper col">
      <h2> Gallery </h2>
      <div className="images-list">
        {images.map((image, idx) => {
          return <img key={idx} src={image} alt="project-image" />;
        })}
      </div>
    </div>
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
