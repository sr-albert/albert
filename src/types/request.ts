/**
 * Represents a request.
 */
export interface Request {
  /**
   * The title of the request.
   */
  title: string;
  /**
   * The description of the request.
   */
  description: string;
  /**
   * The author of the request.
   */
  author: RequestAuthor;
  /**
   * The kind of the request.
   */
  kind: number;
  /**
   * The creation date of the request.
   */
  createdAt: string;
  /**
   * The last update date of the request.
   */
  updatedAt: string;
}

export interface RequestAuthor {
  /**
   * The name of the author.
   */
  name: string;
  /**
   * The email of the author.
   */
  email: string;
  /**
   * The phone number of the author.
   */
  phone: string;
}

/**
 * Request kind
 * 0: Support
 * 1: Contact
 */
export type RequestKind = 0 | 1;
