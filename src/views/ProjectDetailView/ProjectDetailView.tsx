import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader(): Promise<any> {
  const projectDetail = await new Promise((resolve) => {
    setTimeout(() => {
      return resolve({
        name: "Project 1",
        description: "Project 1 description",
      } as any);
    }, 1000);
  });

  return { projectDetail };
}

export default function ProjectDetailView() {
  const loaderData = useLoaderData();

  useEffect(() => {
    console.log(loaderData);
  });

  return <div>Data</div>;
}
