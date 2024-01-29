import { projects } from "@/mocks/project.data.mock";
import { IProject } from "@/types/project";

/**
 *
 * @param id Project's id
 */
export async function getProjects(id: string): Promise<IProject> {
  const index = projects.findIndex((project) => project.id === id);

  return new Promise((resolve, reject) => {
    if (index === -1) reject({ message: "Project not found" });

    resolve(projects[index] as IProject);
  });
}
