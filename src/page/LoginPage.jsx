import kakaotalkLoginButton from '../assets/kakaotalk_login_button.png';
import naverLoginButton from '../assets/naver_login_button.png';
import googleLoginButton from '../assets/google_login_button.png';
import { StyledInput } from '../component/StyledInput';
export const LoginPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col border boder-[#E6E6E6] border-solid rounded-3xl w-2/5 h-4/5 justify-around items-center p-5">
        <form action="" className="flex flex-col w-4/6 gap-7">
          <h2 className="text-4xl font-bold text-center">로그인</h2>
          <label>
            아이디
            <StyledInput size="default" />
          </label>
          <label>
            비밀번호
            <StyledInput size="default" type="password" />
          </label>
          <button className=" h-[50px] bg-slate-200" type="submit">
            acrtor project 회원으로 로그인
          </button>
        </form>
        <section className="justify-around items-center w-4/6 h-[150px] flex flex-col font-bold">
          <div className="w-full social_login_line_text text-center text-gray-400">
            간편 로그인
          </div>
          <div className="flex w-full justify-evenly ">
            <img
              src={kakaotalkLoginButton}
              alt="Kakaotalk Login Button"
              className="w-[50px] h-[50px cursor-pointer"
            />
            <img
              src={naverLoginButton}
              alt="Naver Login Button"
              className="w-[50px] h-[50px cursor-pointer"
            />
            <img
              src={googleLoginButton}
              alt="Google Login Button"
              className="w-[50px] h-[50px cursor-pointer"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
