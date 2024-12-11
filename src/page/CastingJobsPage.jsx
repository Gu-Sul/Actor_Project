import { useEffect, useState } from "react";
import axios from "axios";
import { CastingJobCard } from "../component/CastingJobCard";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../component/StyledButton";

export const CastingJobsPage = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [selectedArray, setSelectedArray] = useState("new");
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
    <div className="flex flex-col h-full  gap-6">
      <div className="flex justify-between gap-9">
        <select
          className=" bg-[#f4f4f4] text-center rounded-[50px] focus:outline-none "
          value={selectedArray}
          onChange={(e) => setSelectedArray(e.target.value)}
          defaultValue="new"
        >
          <option value="new">최신 순</option>
          <option value="old">오래된 순</option>
        </select>
        <StyledButton
          label={"새로운 공고 등록"}
          size={"xl"}
          onClick={() => navigate("/create_casting_job")}
        />
      </div>

      <div className=" flex flex-wrap gap-10 h-7 w-[1000px]">
        {(selectedArray === "new" ? [...cast].reverse() : cast).map((data) => (
          <CastingJobCard key={data.content_id} cast={data} />
        ))}
      </div>
    </div>
  );
};
