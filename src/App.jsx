import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './component/Navbar';
import { MainPage } from './page/MainPage';
import { CastingJobsPage } from './page/CastingJobsPage';
import { ActorProfilePage } from './page/ActorProfilePage';
import { SignUpPage } from './page/SignUpPage';
import { LoginPage } from './page/LoginPage';
import { PersonalSignUpPage } from './page/PersonalSignUpPage';
import { CastingJobCreatePage } from './page/CastingJobCreatePage';
import { CompanySignUpPage } from './page/CompanySignUpPage';
import { CastingJobDetailPage } from './page/CastingJobDetailPage';

function App() {
  return (
    <div className="w-full h-full items-center flex flex-col">
      <header className="flex justify-center items-center h-[150px] w-full fixed z-10 bg-white">
        <Navbar />
      </header>
      <main className="flex justify-center items-start max-w-[1350px] w-full h-[calc(100vh-150px)] top-[150px] relative">
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/casting_jobs'} element={<CastingJobsPage />} />
          <Route
            path={'/create_casting_job'}
            element={<CastingJobCreatePage />}
          />
          <Route path={'/actor_profile'} element={<ActorProfilePage />} />
          <Route path={'/sign_up'} element={<SignUpPage />} />
          <Route path={'/sign_up/personal'} element={<PersonalSignUpPage />} />
          <Route path={'/sign_up/company'} element={<CompanySignUpPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route
            path={'/casting_job/:contentId'}
            element={<CastingJobDetailPage />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
