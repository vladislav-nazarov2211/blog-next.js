"use client";

import { Rating } from "@/components";
import { useState } from "react";
import React from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <span>Content</span>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}
