import { Spin } from "antd";
import React from "react";

const LoadingSpinner = () => {
  const [percent, setPercent] = React.useState(-50);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>(null);

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
    }, 100);
    return () => clearTimeout(timerRef.current!);
  }, [percent]);

  return <Spin percent={percent} size="large" />;
};

export default LoadingSpinner;
