import { projects } from "@/mocks/project.data.mock";
import { IProject } from "@/types/project";
import "./Project.scss";

export default function ProjectPage() {
  return (
    <div className="project-wrapper">
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
              screenshots={screenshots}
              roles={roles}
              platforms={platforms}
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
    <div className="project-card">
      <p>{name}</p>
    </div>
  );
}
