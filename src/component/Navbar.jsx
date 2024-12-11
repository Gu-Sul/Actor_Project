import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex w-5/6 h-full justify-between items-center font-bold border-b-[#E6E6E6] border-b-solid border-b">
      <Link to={'/'}>
        <h1 className="text-start text-2xl">
          actor <br />
          project
        </h1>
      </Link>
      <nav className="flex 2xl:gap-[350px] xl:gap-[200px] lg:gap-[100px] text-xl h-2/5 items-end">
        <ul className="flex 2xl:gap-[200px] xl:gap-[150px] lg:gap-[100px]">
          <Link to={'/casting_jobs'}>
            <li>캐스팅 공고</li>
          </Link>
          <Link to={'/actor_profile'}>
            <li>배우 프로필</li>
          </Link>
          <Link to={'/'}>
            <li>극장 정보</li>
          </Link>
        </ul>
        <section className="flex gap-[30px]">
          <Link to={'/sign_up'}>
            <p>회원가입</p>
          </Link>
          <Link to={'/login'}>
            <p>로그인</p>
          </Link>
        </section>
      </nav>
    </div>
  );
};
export default Navbar;
