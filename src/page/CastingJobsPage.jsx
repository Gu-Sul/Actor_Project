import { useEffect, useState } from "react";
import axios from "axios";
import { CastingJobCard } from "../component/CastingJobCard";

export const CastingJobsPage = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCastData = async () => {
      try {
        const response = await axios.get("/mockup_data/castPosting.JSON");
        setCast(response.data);
        console.log("Fetched Data:", response.data);
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
    <div className="flex flex-wrap gap-10  w-[1000px] ">
      {cast.map((data) => (
        <CastingJobCard key={data.content_id} cast={data} />
      ))}
    </div>
  );
};
