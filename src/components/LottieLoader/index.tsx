import Lottie, { LottieOptions } from "lottie-react";

function LottieLoader({ ...props }: LottieOptions<"svg">) {
  return <Lottie {...props} />;
}

export default LottieLoader;
