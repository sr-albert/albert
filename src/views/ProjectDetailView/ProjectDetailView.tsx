import {
  DEFAULTICON,
  IcAndroidSVG,
  IcAngularSVG,
  IcFastAPISVG,
  IcIosSVG,
  IcPythonSVG,
  IcReactSVG,
} from "@/assets";
import { getProjects } from "@/services/project.service";
import { IPlatform, IProject } from "@/types/project";
import { Link, useLoaderData } from "react-router-dom";
import "./ProjectDetailView.scss";

export async function loader({ params }: any): Promise<IProject> {
  const projectDetail = await getProjects(params.id);
  return projectDetail as IProject;
}

export default function ProjectDetailView() {
  const loaderData = useLoaderData();
  const { id, name, description, platforms, tags, techStack, screenshots } =
    loaderData as IProject;

  return (
    <div
      className="project-detail-container"
      data-testid={`project-detail-${id}`}
    >
      <div className="detail-wrapper">
        <h1>{name}</h1>

        <span>{description}</span>
        <AvailablePlatforms platforms={platforms} />
        <Tags tags={tags} />
        <Stacks stacks={techStack} />
      </div>

      <ImagesDisplay images={screenshots} />
    </div>
  );
}

interface IAvailablePlatformsProps {
  platforms: IPlatform[];
}
function AvailablePlatforms({ platforms }: IAvailablePlatformsProps) {
  return (
    <div className="detail-wrapper__links">
      <h2>Available on</h2>
      {platforms.map(({ url, name }, idx) => {
        return (
          <Link
            to={url}
            key={idx}
            style={{
              display: "inline-block",
              backgroundColor: "#f5f5f5",
              borderRadius: "20px",
              color: "#000",
              textAlign: "center",
              padding: "5px 30px",
            }}
          >
            {name}
          </Link>
        );
      })}
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
        gap: 10,
        alignItems: "center",
      }}
    >
      <h2>Tags</h2>

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
  const renderStackIcon = (stack: string): string => {
    switch (stack.toLowerCase()) {
      case "android":
        return IcAndroidSVG;
      case "ios":
        return IcIosSVG;
      case "react":
        return IcReactSVG;
      case "python":
        return IcPythonSVG;
      case "angular":
        return IcAngularSVG;
      case "fast api":
        return IcFastAPISVG;
      default:
        return DEFAULTICON;
    }
  };

  return (
    <div
      className="stack-wrapper"
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <h2>Stacks</h2>

      <div
        className="stack-wrapper row"
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
              src={renderStackIcon(stack)}
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
    <div
      className="project-image-list"
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {images.map((image, idx) => {
        return <img key={idx} src={image} alt="project-image" />;
      })}
    </div>
  );
}
