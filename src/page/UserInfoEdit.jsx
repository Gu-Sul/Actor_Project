import Button from "../component/Button";
import InputBox from "../component/Input";

const UserInfoEdit = () => {
  return (
    <>
      <div className="flex justify-start items-center flex-wrap gap-[10px] text-left rounded-[10px] border-black border-[1px] p-10 w-[650px]">
        <label>
          아이디
          <InputBox size={"md"} />
        </label>
        <Button size={"md"} label={"아이디 중복확인"} isLogin={true} />
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

        <label>
          휴대폰 번호
          <InputBox size={"md"} />
        </label>
        <Button size={"md"} label={"휴대폰 인증"} />
        <label>
          <InputBox size={"md"} />
        </label>
        <Button size={"md"} label={"인증 번호 확인"} />

        <label>
          주소
          <InputBox size={"md"} />
        </label>
        <Button size={"md"} label={"주소검색"} />
        <Button size={"md"} label={"수정"} />
      </div>
    </>
  );
};

export default UserInfoEdit;
