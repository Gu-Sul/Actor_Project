import { useNavigate } from 'react-router-dom';

export const CompanySignUpContainer = () => {
  const navigate = useNavigate();

  const moveToCompanySignUpFormPage = () => {
    navigate('/sign_up/company');
  };
  return (
    <div className="w-2/5 h-4/5 border boder-solid border-[#E6E6E6] flex flex-col rounded-3xl gap-12 justify-center items-center p-5">
      <h2 className="text-4xl font-bold text-center">기업 회원가입</h2>
      <section className="justify-evenly items-center w-full h-[400px] flex flex-col p-7 font-bold">
        <button
          className="w-5/6 h-[50px] bg-slate-200"
          onClick={moveToCompanySignUpFormPage}
        >
          actor project 회원으로 시작하기
        </button>
      </section>
    </div>
  );
};
