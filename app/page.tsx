"use client";

import { PostCard } from "@/components";
import { Like } from "@/components/Like/Like";
import { useState } from "react";
import React from "react";

export default function Home(): JSX.Element {
  // const [rating, setRating] = useState<number>(0);

  const [likesCount, setLikesCount] = useState<number>(4);

  return (
    <div className="root">
      <PostCard likesCount={likesCount} />
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <Like setLikesCount={setLikesCount} />
      </div>
      {/* <Rating rating={rating} isEditable={true} setRating={setRating} /> */}
    </div>
  );
}
