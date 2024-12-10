import { StyledInput } from "./StyledInput";

export const CastingJobCreateForm = () => {
  return (
    <div className="flex justify-start items-center flex-wrap gap-[10px] text-left p-10 w-[1000px]">
      <div className="font-bold text-[1.7rem]">캐스팅 공고 등록</div>
      <InputWithTitle
        title="카테고리"
        inputProps={{
          size: "sm",
        }}
      />
    </div>
  );
};

const InputWithTitle = ({
  title,
  inputProps = {}, // InputBox 관련 props
}) => (
  <div className="flex">
    <p>{title}</p>
    <div className="flex items-center gap-[10px]">
      <StyledInput {...inputProps} />
    </div>
  </div>
);
