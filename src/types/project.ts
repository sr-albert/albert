export interface IProject {
  /** Generate automatically by mongodb */
  id: string;
  /** Name of the project */
  name: string;
  /** Description of the project */
  description: string;
  /** The date the project started */
  startedAt?: string;
  /** The date the project ended */
  endedAt?: string;
  /** The status of the project */
  status?: string;
  /** Tags for the project */
  tags: string[];
  /**
   * @deprecated use the platform field instead
   * The urls of the project
   * Mobile app, it's the link to the app store or play store
   * Website, it's the link to the website
   */
  urls?: string[];
  /** Screenshots of the project */
  screenshots: string[];
  /** Author's role in the project */
  roles: string[];
  /** Platforms */
  platforms: IPlatform[];
  /** Tech stack */
  techStack: string[];
  /** Kind of project e.g, real, pet, demostrate */
  kind?: string;
}

export type ProjectStatus = "live" | "draft" | "archived" | "private";

export interface IPlatform {
  /** Generate automatically by mongodb */
  id: string;
  /** Name of platform (e.g., web, Android or IOS) */
  name: string;
  /** Link to website, CH-Play or App Store */
  url: string;
}
