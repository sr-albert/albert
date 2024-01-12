/**
 * Represents an option in a contact form.
 */
export interface IOption {
  /**
   * The value of the option with UPPERCASE letters
   * e.g HIRING-ME, OTHER, etc.
   */
  value: string;
  /**
   * The name of the option with normal letters
   * e.g Hiring Me, Other, etc.
   */
  name: string;
}
