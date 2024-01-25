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

      <div className="links-list tag-block">
        {platforms.map(({ url, name }, idx) => {
          return (
            <div className="link-wrapper">
              <Link
                to={url}
                key={idx}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "20px",
                  color: "#000",
                  textAlign: "center",
                  padding: "5px 30px",
                }}
                target="_blank"
              >
                {name}
              </Link>
            </div>
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
    <div
      className="tag-wrapper row"
      style={{
        alignItems: "center",
        gap: 10,
      }}
    >
      {tags.map((tag, idx) => {
        return (
          <p
            className="tag"
            key={idx}
            style={{
              display: "inline-block",
              backgroundColor: "#f5f5f5",
              borderRadius: "20px",
              color: "#000",
              textAlign: "center",
              padding: "5px 10px",
              fontSize: "0.7rem",
            }}
          >
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
      <div
        className="stack-wrapper row tag-block"
        style={{
          alignItems: "center",
          gap: 20,
        }}
      >
        {stacks.map((stack, idx) => {
          return (
            <img
              key={idx}
              alt={stack}
              src={renderTechIcon(stack)}
              height={32}
              width={32}
              style={{
                filter: "invert(1)",
              }}
            />
          );
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
