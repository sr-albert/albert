import { getProjects } from "@/services/project.service";
import { IProject } from "@/types/project";
import { useEffect } from "react";
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

  useEffect(() => {
    console.log(loaderData);
  });

  return (
    <div
      className="project-detail-container"
      data-testid={`project-detail-${id}`}
    >
      <div className="images-wrapper"></div>
      <div className="detail-wrapper">
        <h1>{name}</h1>

        <span>{description}</span>

        <div className="detail-wrapper__links">
          {platforms.map(({ url, name }) => {
            return <Link to={url}>{name}</Link>;
          })}
        </div>

        <Tags tags={tags} />
        <Stacks stacks={techStack} />

        <ImagesDisplay images={screenshots} />
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
      className="tag-wrapper"
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <h2>Tags</h2>
      {tags.map((tag) => {
        return <div className="tag">{tag}</div>;
      })}
    </div>
  );
}

interface IStacksProps {
  stacks: string[];
}
export function Stacks({ stacks }: IStacksProps) {
  return (
    <div
      className="stack-wrapper"
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <h2>Stacks</h2>
      {stacks.map((stack) => {
        return <div className="stack">{stack}</div>;
      })}
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
        return (
          <img
            key={idx}
            src={image}
            alt="project-image"
            height={150}
            width={150}
            style={{
              objectFit: "cover",
            }}
          />
        );
      })}
    </div>
  );
}
