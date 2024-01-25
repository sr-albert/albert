import { format } from "date-fns";
import {
  DEFAULTICON,
  IcAndroidSVG,
  IcAngularSVG,
  IcDartSVG,
  IcFastAPISVG,
  IcFirebaseSVG,
  IcFlutterSVG,
  IcIosSVG,
  IcNextJSSVG,
  IcPythonSVG,
  IcReactSVG,
  IcTypescriptSVG,
} from "@/assets";
export const getCurrentDateTime = (): string => {
  return format(new Date(), "yyyy-MM-dd HH:mm:ss");
};

export const renderTechIcon = (tech: string): string => {
  switch (tech.toLocaleLowerCase()) {
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
    case "flutter":
      return IcFlutterSVG;
    case "dart":
      return IcDartSVG;
    case "nextjs":
      return IcNextJSSVG;
    case "typescript":
      return IcTypescriptSVG;
    case "firebase":
      return IcFirebaseSVG;
    default:
      return DEFAULTICON;
  }
};
