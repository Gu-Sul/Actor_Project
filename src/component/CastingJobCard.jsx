import { DeadlineButton } from "./DeadlineButton";
import { BookmarkButton } from "./BookmarkButton";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./StyledButton";

export const CastingJobCard = ({ cast }) => {
  const navigate = useNavigate();
  const content_id = cast.content_id;
  const handler = (id) => {
    navigate(`/casting_job/${id}`);
  };
  return (
    <div
      onClick={() => {
        handler(content_id);
      }}
      className=" w-[200px] border boder-[#E6E6E6] border-solid rounded-xl "
    >
      <img
        src="https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="
        className="w-[200px] h-[200px] rounded-xl"
      />
      <div className="p-1 flex flex-col gap-2">
        <div className="flex gap-2 ">
          <span className="font-bold text-sm">{cast.title}</span>
          <BookmarkButton />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">{cast.closing_date.substr(2)}</p>
          <DeadlineButton closingDate={cast.closing_date} />
        </div>
        <div className="flex items-end justify-items-start gap-1 pt-2">
          <StyledButton size={"xs"} label={cast.category} cusor={"default"} />
          <StyledButton
            size={"xs"}
            label={cast.category_sub}
            cusor={"default"}
          />
        </div>
      </div>
    </div>
  );
};
