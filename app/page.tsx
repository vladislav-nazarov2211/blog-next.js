"use client";

import { PostCard, Rating } from "@/components";
import { Like } from "@/components/Like/Like";
import { useState } from "react";

export default function Home() {
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
