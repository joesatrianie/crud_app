import Link from "next/link";
import { useState } from "react";

export default function Test() {
  const sta = { take: 5, small: 3, some: 7 };
  const esta = Object.keys(sta).length;
  console.log(esta);
  return (
    <div>
      <Link href="/">home</Link>
      <div></div>
    </div>
  );
}
