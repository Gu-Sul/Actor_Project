// 사용자가 입력한 데이터 관리
// 유효성 검사
// 제출 이벤트 처리
import Button from "./Button";
import InputBox from "./Input";
import { InputWithButton } from "./InputWithButton";

export const SignUpForm = () => {
  return (
    <div className="flex justify-start items-center flex-wrap gap-[10px] text-left rounded-[10px] border boder-[#E6E6E6] border-solid p-10 w-[500px] border boder-[#E6E6E6] border-solid">
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
        <InputBox size={"md"} />
      </label>
      <label>
        비밀번호 확인
        <InputBox size={"md"} />
      </label>
      <label>
        이름
        <InputBox size={"md"} />
      </label>
      <label>
        생년월일
        <InputBox size={"md"} />
      </label>
      <label>
        이메일
        <InputBox size={"md"} />
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
      <Button label={"회원가입"} />
    </div>
  );
};
