import { API } from "@/app/api";
import { cardType } from "@/components/Posts/dataType";
import { Posts } from "@/components/Posts/Posts";

import React from "react";

async function getPosts(): Promise<Array<cardType>> {
  const res = await fetch(API.posts);

  return res.json();
}

export default async function Home(): Promise<JSX.Element> {
  const posts = await getPosts();

  return (
    <div className="root">
      <div className="container">
        <Posts posts={posts} />
      </div>
    </div>
  );
}
