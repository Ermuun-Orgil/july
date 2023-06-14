import { useRouter } from "next/router";
import React from "react";

export const BackButtons = () => {
  const router = useRouter();

  const onPress = () => {
    router.back();
  };

  return <button onClick={onPress}>back</button>;
};
