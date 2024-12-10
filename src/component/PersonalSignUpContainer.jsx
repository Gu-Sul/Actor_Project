import kakaotalkLoginButton from '../assets/kakaotalk_login_button.png';
import naverLoginButton from '../assets/naver_login_button.png';
import googleLoginButton2 from '../assets/google_login_button2.png';
import { useNavigate } from 'react-router-dom';

export const PersonalSignUpContainer = () => {
  const navigate = useNavigate();

  const moveToPersonalSignUpFormPage = () => {
    navigate('/sign_up/personal');
  };

  return (
    <div className="w-2/5 h-4/5 border boder-solid border-[#E6E6E6] flex flex-col rounded-3xl gap-12 justify-center items-center p-5">
      <h2 className="text-4xl font-bold text-center">개인 회원가입</h2>
      <section className="justify-evenly items-center w-full h-[400px] flex flex-col p-7 font-bold">
        <button
          className="w-5/6 h-[50px] bg-slate-200"
          onClick={moveToPersonalSignUpFormPage}
        >
          actor project 회원으로 시작하기
        </button>
        <button className="w-5/6 h-[50px]  bg-[#FEE500] flex justify-center items-center gap-3">
          <img src={kakaotalkLoginButton} className="w-[30px] h-[30px]" />
          카카오로 시작하기
        </button>
        <button className="w-5/6 h-[50px]  bg-[#03C75A] text-white flex justify-center items-center gap-3">
          <img src={naverLoginButton} className="w-[30px] h-[30px]" />
          네이버로 시작하기
        </button>
        <button className="w-5/6 h-[50px] bg-[#FFFFFF] border-[#E6E6E6] border-solid border flex justify-center items-center gap-6">
          <img src={googleLoginButton2} className="w-[20px] h-[20px]" /> 구글로
          시작하기
        </button>
      </section>
    </div>
  );
};
