import { Bookmark } from "lucide-react";
import Button from "./Button";
import { useEffect, useState } from "react";

export const CastingJobCard = ({ cast }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const DeadlineButton = ({ closingDate }) => {
    const [isPast, setIsPast] = useState(false);

    useEffect(() => {
      const targetDate = new Date(closingDate);
      const now = new Date();
      if (now > targetDate) {
        setIsPast(true);
      }
    }, [closingDate]);
    return (
      <>{isPast && <Button size={"xxs"} label={"마감"} variant={"orange"} />}</>
    );
  };
  return (
    <div className=" w-[200px] border boder-[#E6E6E6] border-solid rounded-xl ">
      <img
        src="https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="
        className="w-[200px] h-[200px] rounded-xl"
      />
      <div className="p-1 flex flex-col gap-2">
        <div className="flex gap-2 ">
          <span className="font-bold text-sm">{cast.title}</span>
          <Bookmark
            onClick={toggleBookmark}
            className="w-7 h-7"
            fill={`${isBookmarked ? "black" : "none"}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">{cast.closing_date.substr(2)}</p>
          <DeadlineButton closingDate={cast.closing_date} />
        </div>
        <div className="flex items-end justify-items-start gap-1 pt-2">
          <Button size={"xs"} label={cast.category} />
          <Button size={"xs"} label={cast.category_sub} />
        </div>
      </div>
    </div>
  );
};
