"use client";

import { useParams } from "next/navigation";

export default function AddPathParameters() {
  const { a, b } = useParams<{ a: string; b: string }>();

  return (
    <div id="wd-add">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </div>
  );
}
