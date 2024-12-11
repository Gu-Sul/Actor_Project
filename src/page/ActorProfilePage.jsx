import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActorProfileCard } from '../component/ActorProfileCard';
import axios from 'axios';
import { StyledInput } from '../component/StyledInput';
import { Search } from 'lucide-react';

export const ActorProfilePage = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const response = await axios.get('/mockup_data/profilePosting.JSON');
        setProfiles(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfileData();
  }, []);

  console.log({ profiles });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (error) {
    return <p>에러가 발생했습니다: {error.message}</p>;
  }

  return (
    <div>
      <section className="w-full h-[100px] p-4 flex items-center justify-between">
        <select
          id="dropdown"
          className="h-[50px] w-[150px] text-xl bg-[#f4f4f4] text-center rounded-[50px]"
        >
          <option value="">필터</option>
          <option value="gender">성별</option>
          <option value="age">나이</option>
          <option value="height">신장</option>
          <option value="weight">체중</option>
        </select>
        <div className="border border-solid border-gray-400 rounded-[50px] w-[300px] h-[50px] flex justify-between items-center">
          <input
            type="text"
            placeholder="대학, 전공, 언어 ,특기"
            className="bg-transparent w-4/5 h-full px-4 outline-none"
          />
          <Search className="text-gray-400 w-1/5 " />
        </div>
      </section>
      <div className="grid grid-cols-4 w-[1200px] h-fit p-9 gap-24">
        {profiles.map((profile) => (
          <ActorProfileCard key={profile.userId} profile={profile} />
        ))}
      </div>
    </div>
  );
};
