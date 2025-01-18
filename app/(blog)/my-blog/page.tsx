import { Posts } from "@/components/Posts/Posts";

import React from "react";

export default function Home(): JSX.Element {
  return (
    <div className="root">
      <div className="container">
        <Posts />
      </div>
    </div>
  );
}
