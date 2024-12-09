import { useEffect, useState } from "react";
import axios from "axios";
import { CastingJobCard } from "../component/CastingJobCard";
import Button from "../component/Button";

export const CastingJobsPage = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCastData = async () => {
      try {
        const response = await axios.get("/mockup_data/castPosting.JSON");
        setCast(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadCastData();
  }, []);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (error) {
    return <p>에러가 발생했습니다: {error.message}</p>;
  }

  return (
    <div className="h-full  gap-5">
      <div className="flex justify-end gap-5">
        <Button label={"새로운 공고 등록"} size={"xl"} />
      </div>
      <div className=" flex flex-wrap gap-10 h-7 w-[1000px]">
        {cast.reverse().map((data) => (
          <CastingJobCard key={data.content_id} cast={data} />
        ))}
      </div>
    </div>
  );
};
