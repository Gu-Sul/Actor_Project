import { InputWithButton } from "./InputWithButton";
import { StyledButton } from "./StyledButton";
import { StyledInput } from "./StyledInput";

export const CompanySignUpForm = () => {
  return (
    <div className="flex justify-start items-center flex-wrap gap-[10px] text-left rounded-[10px] border boder-[#E6E6E6] border-solid p-10 w-[500px]">
      <InputWithButton
        label="아이디"
        inputProps={{
          size: "sm",
          placeholder: "아이디를 입력하세요",
        }}
        buttonProps={{
          size: "md",
          variant: "lightgray",
          label: "아이디 중복확인",
          isLogin: true,
          onClick: () => alert("중복확인 쳌"),
        }}
      />
      <label>
        비밀번호
        <StyledInput size={"md"} />
      </label>
      <label>
        비밀번호 확인
        <StyledInput size={"md"} />
      </label>
      <label>
        회사명
        <StyledInput size={"md"} />
      </label>
      <label>
        사업자등록번호
        <StyledInput size={"md"} />
      </label>
      <label>
        이메일
        <StyledInput size={"md"} />
      </label>
      <label>
        홈페이지 링크
        <StyledInput size={"md"} />
      </label>
      <label>
        담당자명
        <StyledInput size={"md"} />
      </label>
      <InputWithButton
        label="휴대폰 번호"
        inputProps={{
          size: "sm",
          placeholder: "휴대폰 번호를 입력하세요",
        }}
        buttonProps={{
          size: "md",
          variant: "lightgray",
          label: "휴대폰 인증",
          isLogin: true,
          onClick: () => alert("휴대폰 번호 쳌"),
        }}
      />
      <InputWithButton
        inputProps={{
          size: "sm",
          placeholder: "인증번호를 입력하세요",
        }}
        buttonProps={{
          size: "md",
          variant: "lightgray",
          label: "인증번호 확인",
          isLogin: true,
          onClick: () => alert("인증번호 쳌"),
        }}
      />
      <InputWithButton
        label="주소"
        inputProps={{
          size: "sm",
          placeholder: "주소를 입력하세요",
        }}
        buttonProps={{
          size: "md",
          variant: "lightgray",
          label: "주소검색",
          isLogin: true,
          onClick: () => alert("주소 쳌"),
        }}
      />
      <StyledButton label={"회원가입"} />
    </div>
  );
};
