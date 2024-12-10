import { Bookmark } from "lucide-react";
import { useState } from "react";

export const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };
  return (
    <Bookmark
      onClick={toggleBookmark}
      className="w-7 h-7 cursor-pointer"
      fill={`${isBookmarked ? "black" : "none"}`}
    />
  );
};
