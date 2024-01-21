import { projects } from "@/mocks/project.data.mock";
import { IPlatform, IProject } from "@/types/project";
import { NavLink } from "react-router-dom";
import "./Project.scss";

export default function ProjectPage() {
  return (
    <div className="project-wrapper">
      <div className="project-wrapper__header">
        <NavLink to="/" className="back-link">
          {`< `}Home
        </NavLink>
      </div>

      <ProjectList />
    </div>
  );
}

function ProjectList() {
  return (
    <div className="project-list-wrapper">
      {projects.map(
        ({
          id,
          name,
          description,
          startedAt,
          endedAt,
          tags,
          screenshots,
          roles,
          platforms,
          techStack,
        }) => {
          return (
            <ProjectCardView
              key={id}
              id={id}
              name={name}
              description={description}
              startedAt={startedAt?.toString()}
              endedAt={endedAt?.toString()}
              tags={tags}
              screenshots={screenshots as string[]}
              roles={roles}
              platforms={platforms as IPlatform[]}
              techStack={techStack}
            />
          );
        }
      )}
    </div>
  );
}

function ProjectCardView({ id, name }: IProject) {
  return (
    <NavLink to={`/mine/${id}`} className="project-card">
      <p>{name}</p>
    </NavLink>
  );
}
