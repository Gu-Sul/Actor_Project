import { StyledButton } from "../component/StyledButton";
import { StyledInput } from "../component/StyledInput";

const UserInfoEdit = () => {
  return (
    <>
      <div className="flex justify-start items-center flex-wrap gap-[10px] text-left rounded-[10px] border-black border-[1px] p-10 w-[650px]">
        <label>
          아이디
          <StyledInput size={"md"} />
        </label>
        <StyledButton size={"md"} label={"아이디 중복확인"} isLogin={true} />
        <label>
          비밀번호
          <StyledInput size={"md"} />
        </label>
        <label>
          비밀번호 확인
          <StyledInput size={"md"} />
        </label>
        <label>
          이름
          <StyledInput size={"md"} />
        </label>
        <label>
          생년월일
          <StyledInput size={"md"} />
        </label>
        <label>
          이메일
          <StyledInput size={"md"} />
        </label>

        <label>
          휴대폰 번호
          <StyledInput size={"md"} />
        </label>
        <StyledButton size={"md"} label={"휴대폰 인증"} />
        <label>
          <StyledInput size={"md"} />
        </label>
        <StyledButton size={"md"} label={"인증 번호 확인"} />

        <label>
          주소
          <StyledInput size={"md"} />
        </label>
        <StyledButton size={"md"} label={"주소검색"} />
        <StyledButton size={"md"} label={"수정"} />
      </div>
    </>
  );
};

export default UserInfoEdit;
