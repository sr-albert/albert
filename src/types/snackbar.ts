export interface SnackbarState {
  show: boolean;
  message: string;
  type: SnackbarType;
}

export type AnchorType =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right"
  | "center-center";

export type SnackbarType = "error" | "success" | "warning" | "info" | "default";
