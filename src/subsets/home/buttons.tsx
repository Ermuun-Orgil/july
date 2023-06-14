import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const NavigatorButtons = () => {
  const router = useRouter();

  const onPressSecond = () => {
    router.push("/second");
  };

  return (
    <div>
      <Link href="/first">first</Link>
      <button onClick={onPressSecond}>second</button>
    </div>
  );
};
